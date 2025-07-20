import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Features = () => {
    const container2=useRef()
    const video=useRef()
    const h1=useRef()
    const h2=useRef()
    const p=useRef()
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container2.current,
              start: "top 20%",
              end: "+=10",
              markers: true,
            },
        })
        tl.from(h1.current,{
            opacity:0,
            y:200,
            duration:0.3
        }).from(h2.current,{
            opacity:0,
            y:200,
            duration:0.3
        }).from(p.current,{
            opacity:0,
            y:200,
            duration:0.3
        })
        gsap.to(container2.current, {
    scale: 0.8,
    ease: "linear",
    duration: 20,
  });
    },[])
      const enter = ()=>{
    gsap.to(video.current,{
        opacity:1,
        scale:1.1,
        duration:0.5,
    })
    setCursorSpeed(3)
  }
  const leave = ()=>{
    gsap.to(video.current,{
        opacity:0.5,
        scale:1,
        duration:0.5,
    })
    setCursorSpeed(1)
  }

  return (
    <div ref={container2} className=" h-screen w-full bg-black overflow-hidden relative">
      <video
        ref={video}
        className="w-full h-screen scale-120 opacity-60"
        src="/videos/ankur4.mp4"
        onMouseEnter={enter} onMouseLeave={leave}
        muted
        autoPlay
        loop
      ></video>
      <h1 ref={h1} className="absolute z-40 left-[25vh] top-[25vh] font-gilroy-semi text-5xl ">
        about Us.
      </h1>
      <h2 ref={h2} className="absolute z-40 left-[25vh] top-[70vh] font-gilroy-bold text-5xl ">
        Ankur Wariko
      </h2>
      <p ref={p} className="absolute z-40 left-[25vh] top-[80vh] w-[80%] font-gilroy-semi text-2xl ">
        I’m Ankur Warikoo — entrepreneur, author, and mentor to millions.
        Through my books, courses, and content, I help you take control of your
        time, money, and decisions.
      </p>
    </div>
  );
};

export default Features;
