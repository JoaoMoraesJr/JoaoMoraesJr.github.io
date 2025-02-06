import React, { useState, useEffect } from 'react';
import './TypingAnimation.scss'; // Import the CSS file

function TypingAnimation() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "  João Moraes";
  const [fadeOut, setFadeOut] = useState(false);
  const typingSpeed = 100;
  const fadeOutSpeed = 1500;
  const startDelay = 700; 

  useEffect(() => {
    const characters = Array.from(fullText); // Properly handles special characters
    let currentIndex = 0;

    const type = () => {
      if (currentIndex < characters.length -1) {
        console.log(characters[currentIndex])
        setDisplayedText((prev) => prev + characters[currentIndex]);
        currentIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(() => {
          setFadeOut(true);
        }, fadeOutSpeed);
      }
    };

    setTimeout(type, startDelay);

    // Cleanup function
    return () => {
      currentIndex = characters.length;
    };
  }, []);

  return (
    <div className={`typing-animation-background ${fadeOut ? 'fade-out' : ''}`}>
      <div className="typing-animation-container">
        <h1 className={`typing-animation ${fadeOut ? 'fade-out' : ''}`}>
          {displayedText}
          <span className="cursor">|</span>
        </h1>
      </div>
    </div>
  );
};

export default TypingAnimation;