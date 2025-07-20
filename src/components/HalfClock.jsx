import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HalfClock = () => {
  const needle1Ref = useRef(null);
  const needle2Ref = useRef(null);
  const contain = useRef(null);
  const markerRefs = useRef([]);

useGSAP(()=>{
  gsap.from(markerRefs.current, {
      opacity: 0,
      scale: 0.5,
      stagger: 0.02,
      duration: 1,
      ease: 'linear',
    });
})
  
  useEffect(() => {
    // Animate markers with stagger
    

    // Animate needles
    const tl = gsap.timeline();

    tl.fromTo(
      needle1Ref.current,
      { rotation: -50, transformOrigin: "bottom center" },
      { rotation: 120, duration: 30, repeat: -1, ease: "none" },
    ).fromTo(
      needle2Ref.current,
      { rotation: -90, transformOrigin: "bottom center" },
      { rotation: 120, duration: 6, repeat: -1, ease: "none" },
      "<"
    );
  }, []);

  const markers = Array.from({ length: 60 }, (_, i) => {
    const angle = (i * 6 - 90) * (Math.PI / 180);
    const radius = 120;
    const x1 = 150 + (radius - (i % 5 === 0 ? 0 : 4)) * Math.cos(angle);
    const y1 = 150 + (radius - (i % 5 === 0 ? 0 : 4)) * Math.sin(angle);
    const x2 = 150 + (radius - (i % 5 === 0 ? 20 : 10)) * Math.cos(angle);
    const y2 = 150 + (radius - (i % 5 === 0 ? 20 : 10)) * Math.sin(angle);
    return (
      <line
        key={i}
        ref={(el) => (markerRefs.current[i] = el)}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="white"
        strokeWidth="0.5"
      />
    );
  });

  return (
    <div ref={contain} className="flex justify-center items-center h-screen bg-black relative pb-10">
      <svg width="1800" height="700" viewBox="0 0 300 150">
        {markers}
        {/* Needles */}
        <line ref={needle2Ref} x1="150" y1="150" x2="150" y2="-80" stroke="white" strokeWidth="0.5" />
        <line ref={needle1Ref} x1="150" y1="150" x2="150" y2="-80" stroke="white" strokeWidth="0.5" />
      </svg>
      <div className="absolute flex justify-center flex-col items-center mt-20">
        <h1 className="text-[13vh] text-white">Time is <span className="text-red-500"> ticking. </span></h1>
        <h2 className="text-xl text-white">It doesn’t pause. Not for you. Not for me. Not for anyone.</h2>
      </div>
    </div>
  );
};

export default HalfClock;
