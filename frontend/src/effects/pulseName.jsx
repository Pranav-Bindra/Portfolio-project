// AnimatedName.js
import React, { useState, useEffect } from 'react';

const AnimatedName = () => {
    const [text, setText] = useState('Pranav Bindra');
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Fade out
            setOpacity(0);

            setTimeout(() => {
                setText((currentText) => currentText === 'Pranav Bindra' ? 'प्रणव बिन्द्रा' : 'Pranav Bindra');
                setOpacity(1);
            }, 500);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div 
            className="animate-customPulse pl-3 text-emerald-300 transition-opacity duration-500"
            style={{ opacity: opacity }}
        >
            {text}
        </div>
    );
};

export default AnimatedName;
