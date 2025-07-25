import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { useCourses } from "../context/CoursesProvider";

const CoursesCard = () => {
  const { courses } = useCourses();

  return (
    <div className="h-[300vh] w-full overflow-hidden flex justify-start align-top">
      <h1 className="w-[5%] ml-20 text-right mt-20 text-8xl font-gilroy-bold uppercase dir">
        <p className="text-sm mb-10">Courses which will Give You Growth</p>
        Courses.
      </h1>
      <div className="h-[250vh] w-[95%]">
        <div className="h-[8%]">
          <h1 className="w-[60%] ml-20 mt-20 text-5xl font-gilroy-bold uppercase">
            <p className="text-lg opacity-50">
              Courses
            </p>
            Devoted To Making The Most Memorable Experiences Within Our Time.
          </h1>
        </div>
        <div className="h-full w-[95%] overflow-hidden grid grid-cols-3 p-20 gap-20">
          {courses.map((c, i) => (
            <Card key={i} data={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
