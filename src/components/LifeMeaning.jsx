import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursor } from "../context/CursorContext";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const LifeMeaning = () => {
  const { mouseRef, setCursorSpeed } = useCursor();
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
      },
    });
    tl.from(h2.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
    }).from(p.current, {
      opacity: 0,
      y: 20,
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

   function convertToEmbedUrl(youtubeUrl) {
    const videoId = youtubeUrl.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1`;
  }

  const clicked = () => {
    navigate("/courses");
  };
  return (
    <div
      ref={container2}
      className=" h-screen w-full bg-black overflow-hidden relative"
    >
      <div className="w-[100vw] h-[100vh] mx-auto mt-10 relative">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 transition-all duration-500"
          src={convertToEmbedUrl("https://www.youtube.com/watch?v=SgEQrUIKJ6Y")}

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-full h-full bg-transparent absolute top-0 left-0"></div>
      </div>
      <h2
        ref={h2}
        className="absolute z-40 left-4 opacity-90 top-1/3 md:left-20 text-3xl md:text-5xl font-gilroy-bold leading-12"
      >
        Life is Too Short to <br />
        live Completely
      </h2>
      <p
        ref={p}
        className="absolute z-40 left-4 opacity-70 top-[52%] md:left-20 text-lg md:text-2xl w-[90%] md:w-[60%] font-gilroy-semi"
      >
        “I used to feel like I had no time. Now, I teach people how to build
        lives where time works for them — not against them. This course is
        everything I’ve learned through real struggle.”
      </p>
      <button
        onClick={clicked}
        ref={button}
        className="px-8 py-4 absolute z-40 left-[5%] top-[70%] text-2xl bg-amber-400 text-black font-gilroy-bold rounded-full"
      >
        Explore more
      </button>

    </div>
  );
};

export default LifeMeaning;
