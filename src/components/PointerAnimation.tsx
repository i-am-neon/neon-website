import { useState, useEffect } from "react";

export default function PointerAnimation(): JSX.Element {
  const [showAnimation, setShowAnimation] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showFirstRing, setShowFirstRing] = useState(false);
  const [showSecondRing, setShowSecondRing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);

      setTimeout(() => setShowFirstRing(true), 1000);
      setTimeout(() => setShowSecondRing(true), 1250);

      setTimeout(() => {
        setFadeOut(true); // Start fade out
        setTimeout(() => {
          setShowAnimation(false);
          setFadeOut(false);
          setShowFirstRing(false);
          setShowSecondRing(false);
        }, 500); // Wait for fade out to complete
      }, 3500); // Adjust based on longest animation duration

    }, 1000); // Initial delay before the finger appears

    return () => clearTimeout(timer);
  }, []);

  const animationClass = fadeOut ? 'animate-[fadeOutScale_0.5s_ease-in-out_forwards]' : 'animate-[fadeInScale_0.5s_ease-in-out_forwards]';

  return (
    <div className="absolute inset-0 mt-[170px] ml-[200px] pointer-events-none">
      {showAnimation && (
        <img src="gestures/finger.png" alt="" className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${animationClass} -rotate-[30deg]`} style={{ width: '50px', animationFillMode: 'forwards' }} />
      )}
      {showFirstRing && (
        <div className="ring-animation ring-first absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[52px]"></div>
      )}
      {showSecondRing && (
        <div className="ring-animation ring-second absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[52px]"></div>
      )}
    </div>
  );
}
