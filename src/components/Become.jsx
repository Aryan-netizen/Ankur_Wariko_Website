import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Become = () => {
  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();
  const contain = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contain.current,
        start: "top 70%",
        end: "+=500",
        scrub: true,
      },
    });
    tl.from(text1.current, {
      y: -40,
      opacity: 0,
      duration: 2,
      ease: "power3.Out",
    });

    tl.from(text2.current, {
      y: -40,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    });
    tl.from(text3.current, {
      y: -40,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={contain} className="col-center">
      <h1
        ref={text1}
        className="text-[5vh] md:text-[10vh] whitespace-nowrap font-gilroy-exBold p-4 px-8 "
      >
        I’m not here to <span className="text-red-500"> sell you dreams.</span>
      </h1>
      <h1
        ref={text2}
        className="text-[5vh] md:text-[10vh] whitespace-nowrap font-gilroy-exBold p-4 px-8"
      >
        I’m here to help you <span className="text-amber-300">build your own.</span>
      </h1>
      <h1
        ref={text3}
        className="text-[12vh] md:text-[25vh] whitespace-nowrap font-gilroy-exBold p-4 px-8 text-emerald-500 
        hover:text-yellow-400"
      >
        DREAM LIFE
      </h1>
    </div>
  );
};

export default Become;
