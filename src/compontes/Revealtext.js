import React, { useEffect, useState } from 'react';
import './revealtext.css';

const Text = () => {
    const sentences = [
        "Home to every customer.",
        "And opportunity.",
        "And conversation.",
        "And click. And action."
    ];

    const [activeIndex, setActiveIndex] = useState(0); // Start with the first sentence active

    useEffect(() => {
        const handleScroll = () => {
            const line = document.querySelector('.line');
            if (!line) return;

            const scrollPosition = window.scrollY + window.innerHeight;
            const lineTop = line.getBoundingClientRect().top + window.scrollY;
            const lineHeight = line.scrollHeight;

            // Adjust the offset to trigger the first sentence reveal earlier
            const revealFactor = (scrollPosition - lineTop - window.innerHeight * 0.2) / (lineHeight + window.innerHeight / 2);

            // Calculate which sentence should be active
            const newActiveIndex = Math.min(
                sentences.length - 1,
                Math.max(0, Math.floor(revealFactor * sentences.length))
            );

            if (newActiveIndex !== activeIndex) {
                setActiveIndex(newActiveIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeIndex, sentences.length]);

    return (

        <div className='tos'>
        <div className="line">
            <div className="line-content">
                {sentences.map((sentence, index) => (
                    <span 
                        key={index} 
                        style={{ color: index === activeIndex ? '#000' : '#b1b1b1' }}
                    >
                        {sentence}
                    </span>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Text;
