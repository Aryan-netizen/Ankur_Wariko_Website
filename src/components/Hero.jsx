import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useCursor } from "../context/CursorContext";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);


const Hero = () => {
   const { mouseRef, setCursorSpeed } = useCursor();
  const TextRef = useRef();
  const ImageRef = useRef();
  const containerRef = useRef();
  const text1 = useRef();
  const text2 = useRef();

  useGSAP(() => {
    const split1 = new SplitText(text1.current, { type: "words" });
    const split2 = new SplitText(text2.current, { type: "words" });

    gsap.to(containerRef.current, {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "linear",
      duration: 30,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=800",
            scrub: true,
            pin: true,
            pinSpacing: false,
            markers: false,
            snap: 0.1,
          },
        }).to(containerRef.current, {
          opacity: 0,
          y: -200,
          stagger: 2,
        });
      },
    });

    tl.fromTo(
      TextRef.current,
      { opacity: 0, y: 400, scale: 2 },
      { opacity: 1, y: -200, scale: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        ImageRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, delay: 2, ease: "power1.out" },
        "<"
      )
      .fromTo(
        TextRef.current,
        { opacity: 1 },
        { opacity: 0, duration: 2, ease: "back.inOut" }
      )
      .from(split1.words, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
      })
      .from(split2.words, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
      });
  }, []);

  const change = () => {
    gsap.to(mouseRef.current, { scale: 2, duration: 2 });
    setCursorSpeed(3);
  };

  const ret = () => {
    gsap.to(mouseRef.current, { scale: 1, duration: 2 });
    setCursorSpeed(1);
  };
  return (
    <div>
        <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      <img
        src="/images/bg-ankur.webp"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover scale-350 z-0"
      />

      <div className="relative h-screen w-full flex items-center justify-center">
        <h1
          ref={TextRef}
          className="text-[10vw] sm:text-[9vw] lg:text-[8vw] whitespace-nowrap font-gilroy-bold z-10"
        >
          ANKUR WARIKO
        </h1>
        <img
          ref={ImageRef}
          src="/images/hero-ankur.webp"
          alt=""
          className="absolute top-0 left-0 w-full h-full scale-100 object-cover z-0"
        />
      </div>

      <div className="absolute inset-0 h-full w-full z-20 pt-20 px-4 sm:px-10 md:px-20">
        <div className="flex flex-col justify-evenly h-full gap-10">
          <div>
            <h1
              onMouseEnter={change}
              onMouseLeave={ret}
              ref={text1}
              className="text-[7vw] sm:text-[5vw] md:text-[3.5vw] font-gilroy-reg max-w-[90%] sm:max-w-[70%] md:max-w-[50%]"
            >
              Build a life you're <br /> proud of
            </h1>
          </div>
          <div className="flex justify-end">
            <h1
              ref={text2}
              onMouseEnter={change}
              onMouseLeave={ret}
              className="text-[6vw] sm:text-[4.5vw] md:text-[3vw] font-gilroy-reg text-right max-w-[90%] sm:max-w-[70%] md:max-w-[50%]"
            >
              I’m <br /> Ankur Warikoo
            </h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero