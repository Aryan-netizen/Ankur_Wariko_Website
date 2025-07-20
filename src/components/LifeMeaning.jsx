import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursor } from "../context/CursorContext";
import { useNavigate } from "react-router-dom";
import { useFlashNavigate } from "./flash/useFlashNavigate";
gsap.registerPlugin(ScrollTrigger);

const LifeMeaning = () => {
  const { mouseRef, setCursorSpeed } = useCursor();
  const [flashNavigate, flash] = useFlashNavigate();
  const container2 = useRef();
  const video = useRef();
  const h2 = useRef();
  const p = useRef();
  const button = useRef();
  let navigate = useNavigate();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container2.current,
        start: "top 20%",
        end: "+=10",
        markers: true,
      },
    });
    tl.from(h2.current, {
      opacity: 0,
      y: 200,
      duration: 0.3,
    }).from(p.current, {
      opacity: 0,
      y: 200,
      duration: 0.3,
    });
  }, []);

  const enter = () => {
    gsap.to(button.current, {
      scale: 1.2,
      duration: 0.5,
    });
    gsap.to(mouseRef.current, {
      scale: 2,
      duration: 2,
    });
    setCursorSpeed(3);
  };
  const leave = () => {
    gsap.to(button.current, {
      scale: 1,
      duration: 0.5,
    });
    gsap.to(mouseRef.current, {
      scale: 1,
      duration: 2,
    });
    setCursorSpeed(1);
  };
  const clicked = ()=>{
    flashNavigate("/courses")

  }
  return (
    <div
      ref={container2}
      className=" h-screen w-full bg-black overflow-hidden relative"
    >
      <video
        ref={video}
        className="w-full h-full object-cover transition-all duration-500"
        src="/videos/Homepage.mp4"
        muted
        autoPlay
        loop
      ></video>
      <h2
        ref={h2}
        className="absolute z-40 left-4 top-1/3 md:left-20 text-3xl md:text-5xl font-gilroy-bold leading-snug"
      >
        Life is Too Short to <br />
        live Completely
      </h2>
      <p
        ref={p}
        className="absolute z-40 left-4 top-[60%] md:left-20 text-lg md:text-2xl w-[90%] md:w-[60%] font-gilroy-semi"
      >
        “I used to feel like I had no time. Now, I teach people how to build
        lives where time works for them — not against them. This course is
        everything I’ve learned through real struggle.”
      </p>
      <button
        ref={button}
        onMouseEnter={enter}
        onMouseLeave={leave}
        onClick={clicked}
        className="absolute z-40 left-4 top-[80%] md:left-20 w-[80%] md:w-[30%] text-base md:text-2xl py-3 px-6 font-gilroy-semi button"
      >
        Explore courses Now
      </button>
      {flash}
    </div>
  );
};

export default LifeMeaning;
