import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Motivation = () => {
  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();
  const text4 = useRef();
  const contain = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contain.current,
        start: "top 50%",
        end: "+=300",
        scrub: true,
        markers: true,
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
    tl.from(text4.current, {
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
        This is your <span className="text-red-500"> wake-up call.</span>
      </h1>
      <h1
        ref={text2}
        className="text-[5vh] md:text-[10vh] whitespace-nowrap font-gilroy-exBold p-4 px-8"
      >
        Because the next hour will pass{" "}
        <span className="text-amber-300">either way.</span>
      </h1>
      <h1
        ref={text3}
        className="text-[2vh] md:text-[10vh] whitespace-nowrap font-gilroy-exBold p-4 px-8 text-emerald-300"
      >
        What you do with it is the only
      </h1>
      <h1
        ref={text4}
        className="text-[12vh] md:text-[30vh] whitespace-nowrap font-gilroy-exBold p-4 px-8 text-red-500 uppercase mt-[-6vh]"
      >
        difference.
      </h1>
      <hr className="border-2 w-full border-amber-50" />
      <h1
        ref={text1}
        className="text-[5vh] md:text-[10vh] mt-20 whitespace-nowrap font-gilroy-exBold p-4 px-8  "
      >
        Courses That Take You <br />
        From  <span className="text-amber-300">Learning</span> to  <span className="text-red-500">Doing</span>
      </h1>
      <h1
        ref={text1}
        className="text-[1vh] md:text-[4vh] whitespace-nowrap  p-4 px-8 "
      >
        Learn the skills. Build the Life that You Want.
      </h1>
    </div>
  );
};

export default Motivation;
