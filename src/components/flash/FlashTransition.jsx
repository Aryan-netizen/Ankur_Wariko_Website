// FlashTransition.jsx
import { useRef } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

export const FlashTransition = ({ onComplete }) => {
  const flashRef = useRef();

  const tl = gsap.timeline({
      onComplete: () => {
        // ✅ Scroll to top right before navigation
        window.scrollTo({ top: 0, behavior: "instant" });
        // ✅ Continue navigation
        onComplete?.();
      },
    });
  tl.fromTo(
    flashRef.current,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.5,
      onComplete: () => {
        gsap.to(flashRef.current, {
          opacity: 0,
          duration: 2,
          onComplete: onComplete, // callback to trigger navigation
        });
      },
    }
  );

  return createPortal(
    <div
      ref={flashRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffffff",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />,
    document.body
  );
};
