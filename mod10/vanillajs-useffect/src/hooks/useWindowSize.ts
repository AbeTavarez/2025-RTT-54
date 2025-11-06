import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
        
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    console.log(windowSize);
    window.addEventListener("resize", handleResize);

    // Clean up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return windowSize;
}

export default useWindowSize;
