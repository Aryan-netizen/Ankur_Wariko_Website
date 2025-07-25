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
  }, []);
  function convertToEmbedUrl(youtubeUrl) {
    const videoId = youtubeUrl.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1`;
  }

  return (
    <div
      ref={container2}
      className=" h-screen w-full bg-black overflow-hidden relative"
    >
      <div className="w-[90vw] h-[90vh] mx-auto mt-10 relative">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 transition-all duration-500"
          src={convertToEmbedUrl("https://www.youtube.com/watch?v=bGgGp72D_OI")}

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-full h-full bg-transparent absolute top-0 left-0"></div>
      </div>
      <h1
        ref={h1}
        className="absolute z-40 left-[17%] top-[65%] md:text-5xl text-3xl font-gilroy-semi "
      >
        About Us.
      </h1>
      <h2
        ref={h2}
        className="absolute z-40 right-[86%] top-[21%] md:left-20 text-7xl font-gilroy-bold dir scale-[-1]"
      >
        Ankur Wariko
      </h2>
      <p
        ref={p}
        className="absolute z-40 left-[17%] top-[75%] text-lg md:text-2xl w-[90%] md:w-[60%] font-gilroy-semi"
      >
        I’m Ankur Warikoo — entrepreneur, author, and mentor to millions.
        Through my books, courses, and content, I help you take control of your
        time, money, and decisions.
      </p>
    </div>
  );
};

export default Features;
