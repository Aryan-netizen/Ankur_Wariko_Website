import { useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../context/CoursesProvider";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Course_Detail = () => {
  const { id } = useParams();
  const { courses } = useCourses();
  const navigate =useNavigate()

  const course = courses.find((c) => String(c.id) === id);

  const titleRef = useRef();
  const descRef = useRef();
  const videoRef = useRef();
  const blogRef = useRef();
  const learnRef = useRef();

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(descRef.current, {
      y: -30,
      opacity: 0,
      delay: 0.3,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(videoRef.current, {
      scale: 0.95,
      opacity: 0,
      delay: 0.5,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(blogRef.current, {
      x: -100,
      opacity: 0,
      delay: 0.8,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(learnRef.current, {
      x: 100,
      opacity: 0,
      delay: 0.8,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  if (!course) return <div className="text-3xl p-10">Course not found</div>;

  function convertToEmbedUrl(youtubeUrl) {
    const videoId = youtubeUrl.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1`;
  }
  function clicked(){
    navigate('/login')
  }

  return (
    <div className="min-h-screen w-full overflow-hidden pt-20 px-10">
      <h1 ref={titleRef} className="text-5xl font-gilroy-bold">
        {course.h1}
      </h1>
      <h1 ref={descRef} className="text-xl font-gilroy-light mt-4">
        {course.p}
      </h1>

      <div ref={videoRef} className="w-[80vw] h-[80vh] mx-auto mt-10 relative">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 transition-all duration-500"
          src={convertToEmbedUrl(course.video)}
          title={course.h1}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-full h-full bg-transparent absolute top-0 left-0"></div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row mt-10 gap-8 uppercase">
        {/* Course Details */}
        <div ref={blogRef} className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-gilroy-bold">Course Details</h1>
          {course.blog?.sections?.map((sec, i) => (
            <div key={i} className="flex flex-col gap-1">
              <h2 className="text-2xl font-gilroy-semi">{sec.h2}</h2>
              <p className="text-lg opacity-60 font-gilroy-reg">{sec.p}</p>
            </div>
          ))}
        </div>

        {/* What You'll Learn */}
        <div ref={learnRef} className="w-full lg:w-1/2 p-8 rounded-2xl flex flex-col gap-4">
          <h1 className="text-4xl font-gilroy-bold">What you'll learn</h1>
          <ul className="list-disc mt-2 ml-4">
            {course.learnings?.map((item, index) => (
              <li key={index} className="text-lg font-gilroy-semi">
                {item}
              </li>
            ))}
          </ul>
          <button 
          onClick={clicked}
          className="px-8 py-4 mt-8 ml-4 text-xl bg-amber-400 text-black font-gilroy-bold rounded-xl hover:scale-105 transition-transform duration-300">
            Enroll Now ➜
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course_Detail;
