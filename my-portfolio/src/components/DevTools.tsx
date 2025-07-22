import React, { useState, useEffect } from 'react';

const DevTools: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    // Set initial values
    setWindowWidth(window.innerWidth);
    const container = document.querySelector('.container');
    if (container) {
      setContainerWidth(container.clientWidth);
    }

    // Update on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const container = document.querySelector('.container');
      if (container) {
        setContainerWidth(container.clientWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black/70 text-white p-3 rounded-lg z-50 text-xs">
      <div>Window Width: {windowWidth}px</div>
      <div>Container Width: {containerWidth}px</div>
      <div>Container Max: 1440px</div>
    </div>
  );
};

export default DevTools; 