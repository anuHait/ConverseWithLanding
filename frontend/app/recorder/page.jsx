"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

function Page() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [transcript, setTranscript] = useState("");

  const recognitionRef = useRef(null);

  const startRecording = () => {
    setIsRecording(true);
    recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      let newTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          newTranscript += event.results[i][0].transcript + " ";
        }
      }
      setTranscript((prevTranscript) => prevTranscript + newTranscript);
    };

    recognitionRef.current.start();
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const stopRecording = async () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setRecordingComplete(true);
    }
    console.log("Transcript:", transcript);
    
    // try {
    //   const response = await axios.post("http://3.108.21.108/cw_web_tts", { text: transcript }, { responseType: 'arraybuffer' });
    //   console.log("Response data:", response.data);

    //   const blob = new Blob([response.data], { type: 'audio/wav' });
    //   const url = URL.createObjectURL(blob);
    //   const audio = new Audio(url);
    //   audio.play();
    // } catch (error) {
    //   console.error("Error:", error);
    // }

    // setTranscript("");
  };

  const handleToggleRecording = () => {
    if (!isRecording) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          console.log('Microphone permission granted.');
          stream.getTracks().forEach(track => track.stop());
          startRecording();
        })
        .catch((error) => {
          console.error('Error accessing microphone:', error);
        });
    } else {
      stopRecording();
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className="flex items-center justify-center h-screen w-full text-black">
      <div className="w-full">
        {(isRecording || transcript) && (
          <div className="w-1/4 m-auto rounded-md border p-4 bg-white">
            <div className="flex-1 flex w-full justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {recordingComplete ? "Recorded" : "Recording"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {recordingComplete ? "Thanks for talking." : "Start speaking..."}
                </p>
              </div>
              {isRecording && (
                <div className="rounded-full w-4 h-4 bg-red-400 animate-pulse" />
              )}
            </div>

            {transcript && (
              <div className="border rounded-md p-2 h-fullm mt-4">
                <p className="mb-0">{transcript}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center w-full">
          {isRecording ? (
            <button
              onClick={handleToggleRecording}
              className="mt-10 m-auto flex items-center justify-center bg-red-400 hover:bg-red-500 rounded-full w-20 h-20 focus:outline-none"
            >
              <svg
                className="h-12 w-12 "
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleToggleRecording}
              className="mt-10 m-auto flex items-center justify-center bg-blue-400 hover:bg-blue-500 rounded-full w-20 h-20 focus:outline-none"
            >
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
              >
                <path
                  fill="currentColor"
                  d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
