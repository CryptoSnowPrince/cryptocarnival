import React, { useState, useEffect } from "react";

const PageLoaderCircle = ({ delay = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, delay);

    // Cleanup function to clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
      {isVisible && (
        <div className="loader_first">
          <div className="circular-spinner"></div>
        </div>
      )}
    </>
  );
};

export default PageLoaderCircle;
;
