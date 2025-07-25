import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    gsap.from(".main-heading", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });
    gsap.from(".sub-heading", {
      y: 50,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(".about-section", {
      opacity: 0,
      y: 30,
      delay: 0.6,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.3,
    });
  }, []);

  function convertToEmbedUrl(youtubeUrl) {
    const videoId = youtubeUrl.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1`;
  }

  return (
    <div className="h-[200vh] w-full overflow-hidden flex justify-start align-top">
      {/* Left Side Text */}
      <h1 className="w-[5%] ml-20 text-right mt-20 text-8xl font-gilroy-bold uppercase dir">
        <p className="text-sm mb-10">Who we are & what we believe</p>
        About.
      </h1>

      {/* Right Side Content */}
      <div className="h-full w-[95%]">
        {/* Main Heading */}
        <div className="h-[8%]">
          <h1 className="w-[60%] ml-20 mt-20 text-5xl font-gilroy-bold uppercase main-heading">
            <p className="text-lg opacity-50 sub-heading">Our Mission</p>
            We Craft Experiences That Drive Personal and Professional Growth.
          </h1>
          {/* Video */}
          <div className="w-[80vw] h-[80vh] mx-auto mt-10 relative">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 transition-all duration-500"
          src={convertToEmbedUrl("https://www.youtube.com/watch?v=Yge7_u-4YwI")}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-full h-full bg-transparent absolute top-0 left-0"></div>
      </div>
      {/* main content  */}
          <div className="w-full px-20 py-16 flex flex-col gap-10 text-xl font-gilroy-reg text-gray-500">
          <p className="about-section leading-relaxed">
            At our core, we believe that learning should feel like an adventure — 
            empowering individuals to take charge of their time, skills, and future.
          </p>

          <p className="about-section leading-relaxed">
            Our platform isn't just about courses — it's about transformation. 
            Whether you’re learning time management, deepening your coding skills, 
            or improving your mindset, our goal is to help you apply knowledge meaningfully.
          </p>

          <p className="about-section leading-relaxed">
            With immersive content, expert-led teaching, and a community-first approach, 
            we’re committed to making every course a step forward in your journey.
          </p>

          <p className="about-section leading-relaxed">
            We’re not here to add more noise. We’re here to add clarity. Growth. 
            And most importantly — action.
          </p>
        </div>
        </div>

        {/* About Content Sections */}
        
      </div>
    </div>
  );
};

export default About;
