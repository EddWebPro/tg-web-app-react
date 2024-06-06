import React, { useState } from 'react';

const SpeechRec = () => {
    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
    
    const recognition = new window.webkitSpeechRecognition();
    
    recognition.onstart = () => {
        console.log("Voice recognition started.");
        setIsListening(true);
    };
    
    recognition.onresult = event => {
        const currentTranscript = event.results[0][0].transcript;
        console.log("Recognized speech: ", currentTranscript);
        setTranscript(currentTranscript);
    };
    
    const startListening = () => {
        recognition.start();
    };
    
    const stopListening = () => {
        recognition.stop();
        setIsListening(false);
    };
    
    return (
        <div>
            <button onClick={startListening} disabled={isListening}>
                Start Listening
            </button>
            <button onClick={stopListening} disabled={!isListening}>
                Stop Listening
            </button>
            <p>{transcript}</p>
        </div>
    );
};

export default SpeechRec;