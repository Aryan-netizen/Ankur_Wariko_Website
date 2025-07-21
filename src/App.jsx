import React, { useRef } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCursor } from "./context/CursorContext";
import Routes from "./routes/Router";

const App = () => {
  const { mouseRef, startCursorRotation } = useCursor();
  const handleMouse = (e) => {
    const size = 50;
    gsap.to(mouseRef.current, {
      x: e.clientX - size / 2,
      y: e.clientY - size / 2,

      duration: 0.2,
      ease: "power2.out",
    });
  };
  useGSAP(() => {
    startCursorRotation(); // Default speed = 2
  }, []);

  return (
    <div className="relative cursor-none" onMouseMove={handleMouse}>
      <div
        ref={mouseRef}
        className="crsr w-[50px] h-[50px] border-1 rounded-full fixed z-[999] pointer-events-none"
      ></div>

      <Nav />
      <Routes/>

    </div>
  );
};

export default App;
