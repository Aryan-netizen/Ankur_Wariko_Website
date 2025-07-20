import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursor } from "../context/CursorContext";
gsap.registerPlugin(ScrollTrigger);
const Features = () => {
    const { mouseRef, setCursorSpeed } = useCursor();
  const container2 = useRef();
  const video = useRef();
  const h1 = useRef();
  const h2 = useRef();
  const p = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container2.current,
        start: "top 20%",
        end: "+=10",
        markers: true,
      },
    });
    tl.from(h1.current, {
      opacity: 0,
      y: 200,
      duration: 0.3,
    })
      .from(h2.current, {
        opacity: 0,
        y: 200,
        duration: 0.3,
      })
      .from(p.current, {
        opacity: 0,
        y: 200,
        duration: 0.3,
      });
    gsap.to(container2.current, {
      scale: 0.8,
      ease: "linear",
      duration: 20,
    });
  }, []);
  const enter = () => {
    gsap.to(video.current, {
      opacity: 1,
      scale: 1.1,
      duration: 0.2,
    });
    setCursorSpeed(3);
  };
  const leave = () => {
    gsap.to(video.current, {
      opacity: 0.5,
      scale: 1,
      duration: 0.2,
    });
    setCursorSpeed(1);
  };

  return (
    <div
      ref={container2}
      className=" h-screen w-full bg-black overflow-hidden relative"
    >
      <video
        ref={video}
        className="w-full h-full object-cover opacity-60 transition-all duration-500"
        src="/videos/ankur4.mp4"
        onMouseEnter={enter}
        onMouseLeave={leave}
        muted
        autoPlay
        loop
      ></video>
      <h1
        ref={h1}
        className="absolute z-40 left-6 top-1/4 md:left-20 md:text-5xl text-3xl font-gilroy-semi"
      >
        about Us.
      </h1>
      <h2
        ref={h2}
        className="absolute z-40 left-6 top-[60%] md:left-20 md:text-5xl text-2xl font-gilroy-bold"
      >
        Ankur Wariko
      </h2>
      <p
        ref={p}
        className="absolute z-40 left-6 top-[75%] md:left-20 text-lg md:text-2xl w-[90%] md:w-[60%] font-gilroy-semi"
      >
        I’m Ankur Warikoo — entrepreneur, author, and mentor to millions.
        Through my books, courses, and content, I help you take control of your
        time, money, and decisions.
      </p>
    </div>
  );
};

export default Features;
