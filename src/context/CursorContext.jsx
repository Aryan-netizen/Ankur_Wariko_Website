import { createContext, useContext, useRef, useEffect } from "react";
import gsap from "gsap";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const mouseRef = useRef(null);
  const rotationTween = useRef(null);

  const startCursorRotation = (speed = 2) => {
    // Kill old tween if exists
    if (rotationTween.current) rotationTween.current.kill();

    

    // Create new rotation tween
    rotationTween.current = gsap.to(mouseRef.current, {
      rotate: 360,
      repeat: -1,
      ease: "linear",
      duration: speed,
    });
  };

  const setCursorSpeed = (scale) => {
    if (rotationTween.current) {
      rotationTween.current.timeScale(scale);
    }
  };

  return (
    <CursorContext.Provider
      value={{
        mouseRef,
        startCursorRotation,
        setCursorSpeed,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
