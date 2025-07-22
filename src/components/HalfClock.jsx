import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HalfClock = () => {
  const needle1Ref = useRef(null);
  const needle2Ref = useRef(null);
  const contain = useRef(null);
  const markerRefs = useRef([]);

  useGSAP(() => {
    gsap.from(markerRefs.current, {
      opacity: 0,
      scale: 0.5,
      stagger: 0.02,
      duration: 1,
      ease: "linear",
    });
  });

  useEffect(() => {
    // Animate markers with stagger

    // Animate needles
    const tl = gsap.timeline();
    

    tl.fromTo(
      needle1Ref.current,
      { rotation: -630, transformOrigin: "bottom center" },
      { rotation: 0, duration: 2, ease:'power3.inOut' }
    ).fromTo(
      needle2Ref.current,
      { rotation: -610, transformOrigin: "bottom center" },
      { rotation: -120, duration: 2, ease:'power3.inOut' },
      "<"
    )
    tl.fromTo(
      needle1Ref.current,
      { rotation: 0, transformOrigin: "bottom center" },
      { rotation: 360, duration: 25, repeat: -1, ease: "none" }
    ).fromTo(
      needle2Ref.current,
      { rotation: -120, transformOrigin: "bottom center" },
      { rotation: 360, duration: 300, repeat: -1, ease: "none" },
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
    <div
      ref={contain}
      className="flex justify-center items-center h-screen bg-black relative pb-10"
    >
      <video
        className="w-full h-full object-cover transition-all duration-500 absolute z-0"
        src="/videos/Homepage.mp4"
        muted
        autoPlay
        loop
      ></video>
      <svg
        width="1800"
        height="700"
        viewBox="0 60 300 150"
        className="absolute z-2"
      >
        {/* Needles */}
        <line
          ref={needle2Ref}
          x1="150"
          y1="150"
          x2="150"
          y2="-80"
          stroke="white"
          strokeWidth="0.3"
        />
        <line
          ref={needle1Ref}
          x1="150"
          y1="150"
          x2="150"
          y2="-80"
          stroke="white"
          strokeWidth="0.3"
        />
      </svg>
      <div className="absolute left-[60%] top-[0] flex justify-start flex-col items-start mt-20 text-4xl font-gilroy-semi">
        <h1 className="opacity-50">Courses</h1>
        <h1>
          From <span className="text-amber-300">Learning</span> to{" "}
          <span className="text-red-500">Doing</span>
        </h1>
        <h1>Learn the skills.</h1>
        <h1> Build the Life that You Want.</h1>
      </div>
      <div className="absolute left-25 top-20">
        <h1 className="col-center leading-29 font-sans font-bold opacity-65 text-[20vh] dir">
          ANKUR
        </h1>
      </div>
    </div>
  );
};

export default HalfClock;
