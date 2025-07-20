import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursor } from "../context/CursorContext";
gsap.registerPlugin(ScrollTrigger);

const LifeMeaning = () => {
      const { mouseRef, setCursorSpeed } = useCursor();
    
     const container2=useRef()
    const video=useRef()
    const h2=useRef()
    const p=useRef()
    const button=useRef()
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container2.current,
              start: "top 20%",
              end: "+=10",
              markers: true,
            },
        })
        tl.from(h2.current,{
            opacity:0,
            y:200,
            duration:0.3
        }).from(p.current,{
            opacity:0,
            y:200,
            duration:0.3
        })
    },[])

     const enter = ()=>{
    gsap.to(button.current,{
        scale:2,
        duration:0.5,
    })
    gsap.to(mouseRef.current, {
      scale: 2,
      duration: 2,
    });
    setCursorSpeed(3)
  }
  const leave = ()=>{
    gsap.to(button.current,{
        scale:1,
        duration:0.5,
    })
    gsap.to(mouseRef.current, {
      scale: 1,
      duration: 2,
    });
    setCursorSpeed(1)
  }
  return (
    <div ref={container2} className=" h-screen w-full bg-black overflow-hidden relative">
      <video
      ref={video}
        className="w-full h-screen scale-120"
        src="/videos/Homepage.mp4"
        muted
        autoPlay
        loop
      ></video>

      <h2 ref={h2} className="absolute z-40 left-[25vh] top-[50vh] font-gilroy-bold text-5xl ">
        Life is Too Short too <br />
        live Completely
      </h2>
      <p ref={p} className="absolute z-40 left-[25vh] top-[70vh] w-[80%] font-gilroy-semi text-2xl ">
        “I used to feel like I had no time. Now, I teach people how to build
        lives where time works for them — not against them. This course is
        everything I’ve learned through real struggle.”
      </p>
      <button onMouseEnter={enter} onMouseLeave={leave} ref={button} className="absolute z-40 left-[25vh] top-[85vh] w-[20%] font-gilroy-semi text-2xl button">Explore courses Now</button>

    </div>
  );
};

export default LifeMeaning;
