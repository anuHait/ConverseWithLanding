"use client";
import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Page() {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
        startListening,
        stopListening
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support Speech Recognition.</span>;
      }
  return (
    <div>
    <p>Microphone: {listening ? 'on' : 'off'}</p>
    <button onMouseDown={startListening} onMouseUp={stopListening}>Hold to talk</button>
    <button onClick={resetTranscript}>Reset</button>
    <p>{transcript}</p>
  </div>
  )
}

export default Page
