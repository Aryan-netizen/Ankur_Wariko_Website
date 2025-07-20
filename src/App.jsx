import React, { useRef } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Features from "./components/Features";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCursor } from "./context/CursorContext";
import Become from "./components/Become";
import HalfClock from "./components/HalfClock";
import LifeMeaning from "./components/LifeMeaning";

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
        className="crsr w-[50px] h-[50px] border-8 border-dotted rounded-full fixed z-[999] pointer-events-none"
      ></div>

      <Nav />

      <div className="snap-y snap-mandatory h-fit overflow-hidden ">
        <section className="h-screen snap-start">
          <Home />
        </section>
        <section className="h-screen snap-start">
          <Become />
        </section>
        <section className="h-screen snap-start">
          <Features />
        </section>
        <section className="h-screen snap-start">
          <LifeMeaning />
        </section>
      </div>
    </div>
  );
};

export default App;
