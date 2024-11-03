// src/components/TypewriterEffect.js
import React, { useEffect, useState } from 'react';

const TypewriterEffect = ({ strings, typingSpeed, deletingSpeed, pauseTime }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[currentStringIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText(currentString.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentString.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentString) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setTimeout(() => setDisplayedText(''), pauseTime);
      }
    };

    const typingDelay = isDeleting ? deletingSpeed : typingSpeed;
    const typingInterval = setInterval(handleTyping, typingDelay);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, currentStringIndex, strings, typingSpeed, deletingSpeed, pauseTime]);

  return <span>{displayedText}</span>;
};

export default TypewriterEffect;
