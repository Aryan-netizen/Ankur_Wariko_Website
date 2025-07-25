import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const ScrollWithLoader = () => {
  const { pathname } = useLocation();
  const loaderContainer = useRef();
  const panel1 = useRef();
  const panel2 = useRef();
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(loaderContainer.current, { y: "0%" });

    tl
      .to(panel1.current, {
        y: 0,
        duration: 0.6,
        ease: "power2.inOut",
      })
      .to(panel2.current, {
        y: 0,
        duration: 0.6,
        ease: "power2.inOut",
      }, "<0.1")
      .fromTo(textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 },
        "<0.2"
      )
      .add(() => window.scrollTo(0, 0))
      .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.2,
      }, "+=0.4")
      .to([panel2.current, panel1.current], {
        y: "-100%",
        duration: 0.7,
        ease: "power2.inOut",
        stagger: 0.1,
      }, "-=0.2");

  }, [pathname]);

  return (
    <div
      ref={loaderContainer}
      className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none overflow-hidden"
    >
      {/* Background Panels */}
      <div
        ref={panel1}
        className="absolute top-0 left-0 w-full h-full bg-black translate-y-full z-20"
      />
      <div
        ref={panel2}
        className="absolute top-0 left-0 w-full h-full bg-gray-900 translate-y-full z-30"
      />

      {/* Loading Text */}
      <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        <div ref={textRef} className="tracking-wide">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default ScrollWithLoader;
