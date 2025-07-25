import React from "react";
import HalfClock from "../components/HalfClock";
import CoursesCard from "../components/CoursesCard";

const Courses = () => {
  return (
    <div>
      <div className="h-fit overflow-hidden ">
        <section className="h-screen">
          <HalfClock />
        </section>
        <section className="h-[300vh]">
            <CoursesCard/>
        </section>
      </div>
    </div>
  );
};

export default Courses;
