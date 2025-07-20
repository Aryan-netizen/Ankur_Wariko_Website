import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useCursor } from "../context/CursorContext";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

const Home = () => {
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
      yoyo:true,
      ease: "linear",
      duration: 30,
    });
    // Initial animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // ScrollTrigger timeline starts after initial animation
        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=800",
              scrub: true,
              pin: true,
              pinSpacing: false,
              markers: true,
              snap: 0.1,
            },
          })
          .to(containerRef.current, {
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
    gsap.to(mouseRef.current, {
      scale: 2,
      duration: 2,
    });
    setCursorSpeed(3);
  };
  const ret = () => {
    gsap.to(mouseRef.current, {
      scale: 1,
      duration: 2,
    });
    setCursorSpeed(1);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      <img
        src="/images/bg-ankur.webp"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover scale-350 z-0"
      />

      <div className="relative h-screen w-full">
        <h1
          ref={TextRef}
          className="abs-center text-[28vh] whitespace-nowrap font-gilroy-bold z-5"
        >
          ANKUR WARIKO
        </h1>
        <img
          ref={ImageRef}
          src="/images/hero-ankur.webp"
          alt=""
          className="absolute top-0 left-0 w-full h-full scale-100 object-cover z-10"
        />
      </div>

      <div className="absolute h-screen w-full z-20 top-20">
        <div className="flex justify-evenly flex-col px-20 h-full ">
          <div>
            <h1
              onMouseEnter={change}
              onMouseLeave={ret}
              ref={text1}
              className="text-7xl w-[30%] font-gilroy-reg  "
            >
              Build a life you're proud of
            </h1>
          </div>
          <div className="flex justify-end">
            <h1
              ref={text2}
              onMouseEnter={change}
              onMouseLeave={ret}
              className="text-5xl w-[35%] font-gilroy-reg text-right"
            >
              I’m <br /> Ankur Warikoo
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
