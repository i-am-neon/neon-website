import { useState, useEffect } from "react";

export default function PointerAnimation(): JSX.Element {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showFirstRing, setShowFirstRing] = useState(false);
  const [showSecondRing, setShowSecondRing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);

      // Delay for first ring
      setTimeout(() => setShowFirstRing(true), 500); // 500ms after the finger appears
      // Delay for second ring
      setTimeout(() => setShowSecondRing(true), 700); // 700ms after the finger appears

      // Cleanup to hide everything at once
      setTimeout(() => {
        // setShowAnimation(false);
        // setShowFirstRing(false);
        // setShowSecondRing(false);
      }, 3500); // Adjust based on longest animation duration

    }, 1000); // Initial delay before the finger appears

    return () => clearTimeout(timer);
  }, []);

  return (
    // Avatar is 288px
    <div className="absolute inset-0 mt-[170px] ml-[200px] pointer-events-none">
      {showAnimation && (
        <img src="gestures/finger.png" alt="" className="z-[9999] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fadeInScale -rotate-[30deg]" style={{ width: '50px', animationFillMode: 'forwards' }} />
      )}
      {showFirstRing && (
        <div className="ring-animation ring-first absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      )}
      {showSecondRing && (
        <div className="ring-animation ring-second absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      )}
    </div>
  );
}
