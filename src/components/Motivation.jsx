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

  const markerRefs = useRef([]);
  
  useGSAP(() => {
    gsap.from(markerRefs.current, {
      opacity: 0,
      scale: 0.5,
      rotate:90,
      stagger: 0.04,
      duration: 1,
      yoyo:true,
      repeat:-1,
      ease: "elastic.out",
    })
  });
  const markers = Array.from({ length: 60 }, (_, i) => {
    const angle = (i * 6 - 90) * (Math.PI / 180);
    const radius = 120;
    const x1 = 150 + (radius - (i % 5 === 0 ? 0 : 4)) * Math.cos(angle);
    const y1 = 150 + (radius - (i % 5 === 0 ? 0 : 4)) * Math.sin(angle);
    const x2 = 150 + (radius - (i % 5 === 0 ? 20 : 10)) * Math.cos(angle);
    const y2 = 150 + (radius - (i % 5 === 0 ? 20 : 10)) * Math.sin(angle);
    return (
      <line
        key={i}
        ref={(el) => (markerRefs.current[i] = el)}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="white"
        strokeWidth="0.5"
      />
    );
  });


  return (
    <div ref={contain} className="col-center">
      
      
      <svg
        width="1800"
        height="300"
        viewBox="0 10 300 100"
        className=""
      >
        {markers}
      </svg>
    </div>
  );
};

export default Motivation;
