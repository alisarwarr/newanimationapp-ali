import { useState, useEffect } from 'react';

function ScrollPosition() {
    const [ scrollPosition, setScrollPosition ] = useState(0);
    
    const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
    }
      
    useEffect(() => {
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    })

    return scrollPosition;
}

export default ScrollPosition;