import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Become = () => {
    const text1=useRef()
    const text2=useRef()
    const contain=useRef()
     
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: contain.current,
              start: "top 60%",
              end: "+=500",
              scrub: true,
              markers: true,
            },
          })
  tl.to(text1.current, {
    x: -40,
    duration: 80,
    ease: "power3.Out",
  });

  tl.to(text2.current, {
    x: -250,
    duration: 80,
    ease: "power3.out",
  });
}, []);

  return (
    <div ref={contain}>
      <div className="bg-emerald-700 w-fit">
        <h1 ref={text1} className="text-[15vh] translate-x-[20vh] whitespace-nowrap font-gilroy-exBold p-4">
          I’m not here to sell you dreams.
        </h1>
      </div>
      <div className="bg-amber-800 w-fit">
        <h1 ref={text2} className="text-[15vh] whitespace-nowrap font-gilroy-exBold p-4">
          I’m here to help you build your own.
        </h1>
      </div>
      <div className="bg-emerald-700 w-fit">
        <h1  className="text-[13vh] whitespace-nowrap font-gilroy-exBold p-4 px-30">
          I’m not here to sell you dreams.
        </h1>
      </div>
      <div className="bg-amber-800 w-fit">
        <h1 className="text-[13vh] whitespace-nowrap font-gilroy-exBold p-4">
          I’m here to help you build your own.
        </h1>
      </div>
    </div>
  );
};

export default Become;
