import React from "react";
import HalfClock from "../components/HalfClock";
import Motivation from "../components/Motivation";
import CoursesCard from "../components/CoursesCard";

const Courses = () => {
  return (
    <div>
      <div className="h-fit overflow-hidden ">
        <section className="h-screen">
          <HalfClock />
        </section>
        <section className="h-[200vh]">
            <Motivation/>
        </section>
        {/* <section className="h-screen">
            <CoursesCard/>
        </section> */}
      </div>
    </div>
  );
};

export default Courses;
