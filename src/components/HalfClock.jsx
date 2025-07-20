import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HalfClock = () => {
  const needle1Ref = useRef(null);
  const needle2Ref = useRef(null);
  const contain = useRef(null);

  useEffect(() => {
    // Animate needle12
    const tl = gsap.timeline({
            scrollTrigger: {
              trigger: contain.current,
              start: "top 80%",
              end: "+=0",
              markers: true,
            },
        })

    tl.fromTo(
      needle1Ref.current,
      {
        rotation: 0,
        transformOrigin: "bottom center",
        duration: 60,
        repeat: -1,
        ease: "none",
      },
      {
        rotation: 90,
        transformOrigin: "bottom center",
        duration: 60,
        repeat: -1,
        ease: "none",
      }
    ).fromTo(
      needle2Ref.current,
      {
        rotation: -120,
        transformOrigin: "bottom center",
        duration: 12,
        repeat: -1,
        ease: "none",
      },
      {
        rotation: 120,
        transformOrigin: "bottom center",
        duration: 12,
        repeat: -1,
        ease: "none",
      },"<"
    );
  }, []);

  const markers = Array.from({ length: 60 }, (_, i) => {
    const angle = (i * 6 - 90) * (Math.PI / 180); // -90 to start from top
    const radius = 120;
    const x1 = 150 + (radius - `${i % 5 == 0 ? 0 : 4}`) * Math.cos(angle);
    const y1 = 150 + (radius - `${i % 5 == 0 ? 0 : 4}`) * Math.sin(angle);
    const x2 = 150 + (radius - `${i % 5 == 0 ? 20 : 10}`) * Math.cos(angle);
    const y2 = 150 + (radius - `${i % 5 == 0 ? 20 : 10}`) * Math.sin(angle);
    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="white"
        strokeWidth="0.5"
        className="ref"
      />
    );
  });

  return (
    <div ref={contain} className="flex justify-center items-center h-screen bg-black relative pb-10">
      <svg width="300*2" height="150*2" viewBox="0 0 300 150">
        {markers}

        {/* Needle 2 */}
        <line
          ref={needle2Ref}
          x1="150"
          y1="150"
          x2="150"
          y2="-80"
          stroke="white"
          strokeWidth="0.5"
        />
        <line
          ref={needle1Ref}
          x1="150"
          y1="150"
          x2="150"
          y2="-80"
          stroke="white"
          strokeWidth="0.5"
        />
      </svg>
      <div className="absolute flex justify-center flex-col items-center">
      <h1 className="text-xl">Time is tiking</h1>
      <h1 className="text-xl">When you take action</h1>
      </div>
    </div>
  );
};

export default HalfClock;
