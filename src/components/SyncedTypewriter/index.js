import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const SyncedTypewriter = ({ sentences }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const intervalRef = useRef(null);

  // Convert sentences object to array
  const sentencesArray = sentences ? Object.values(sentences) : [
    "I build AI automation solutions",
    "I create web scraping systems", 
    "I develop intelligent workflows",
    "I design chatbot integrations",
    "I automate business processes",
    "I extract data intelligently"
  ];

  // Timing configuration
  const TYPING_SPEED = 6000;    // 6 seconds to type
  const PAUSE_SPEED = 2500;     // 2.5 seconds pause
  const BACKSPACE_SPEED = 1500; // 1.5 seconds to backspace
  const TOTAL_CYCLE = TYPING_SPEED + PAUSE_SPEED + BACKSPACE_SPEED; // 10 seconds total

  // Get current state based on real timestamp
  const getCurrentState = () => {
    const now = Date.now();
    // Each sentence cycle is 10 seconds
    const positionInCycle = now % TOTAL_CYCLE;
    
    // Calculate which sentence we should be on
    const totalSentenceTime = TOTAL_CYCLE * sentencesArray.length; // 60 seconds for all 6 sentences
    const globalPosition = now % totalSentenceTime;
    const sentenceIndex = Math.floor(globalPosition / TOTAL_CYCLE);
    
    const sentence = sentencesArray[sentenceIndex] || sentencesArray[0];
    
    if (positionInCycle <= TYPING_SPEED) {
      // TYPING PHASE (0-6 seconds)
      const typingProgress = positionInCycle / TYPING_SPEED;
      const targetLength = Math.floor(typingProgress * sentence.length);
      return {
        sentenceIndex,
        displayText: sentence.substring(0, targetLength),
        isTyping: true,
        phase: 'typing'
      };
    } else if (positionInCycle <= TYPING_SPEED + PAUSE_SPEED) {
      // PAUSE PHASE (6-8.5 seconds)
      return {
        sentenceIndex,
        displayText: sentence,
        isTyping: false,
        phase: 'pausing'
      };
    } else {
      // BACKSPACE PHASE (8.5-10 seconds)
      const backspaceStart = TYPING_SPEED + PAUSE_SPEED;
      const backspaceProgress = (positionInCycle - backspaceStart) / BACKSPACE_SPEED;
      const charsToRemove = Math.floor(backspaceProgress * sentence.length);
      const remainingLength = sentence.length - charsToRemove;
      return {
        sentenceIndex,
        displayText: sentence.substring(0, Math.max(0, remainingLength)),
        isTyping: true,
        phase: 'backspacing'
      };
    }
  };

  // Update display based on real time
  const updateDisplay = () => {
    const state = getCurrentState();
    setCurrentSentenceIndex(state.sentenceIndex);
    setDisplayedText(state.displayText);
  };

  // Main synchronization effect
  useEffect(() => {
    // Update immediately
    updateDisplay();

    // Update every 50ms for smooth animation
    intervalRef.current = setInterval(updateDisplay, 50);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [sentencesArray]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Get current phase for cursor animation
  const currentState = getCurrentState();
  const isActivelyTyping = currentState.phase === 'typing' || currentState.phase === 'backspacing';

  return (
    <div className="synced-typewriter">
      <span className="typed-text">{displayedText}</span>
      <span className={`cursor ${isActivelyTyping ? 'blinking' : 'steady'}`}>|</span>
    </div>
  );
};

export default SyncedTypewriter;