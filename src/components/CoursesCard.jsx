import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const CoursesCard = () => {
  const [cardsData, setCardsData] = useState([]);
  const data = [
    {
      h1: "Take Charge of Your Time",
      img: "https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=736&auto=format&fit=crop",
      p: "Stop running in circles. This course is for the overthinkers, overworkers, and overwhelmed. If you're tired of feeling busy but unproductive — this is your blueprint to a calm, focused, and high-output life.",
    },
    {
      h1: "Master Your Money Mindset",
      img: "https://images.unsplash.com/photo-1593672715438-d88a70629abe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      p: "We were never taught how to manage money. This course is your crash course in earning, saving, and investing without jargon or fear.",
    },
    {
      h1: "Design a Meaningful Career",
      img: "https://images.unsplash.com/photo-1459180129673-eefb56f79b45?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      p: "Not sure what to do with your life? This guide helps you align passion with profession through clarity exercises and practical thinking.",
    },
    {
      h1: "Break the Procrastination Loop",
      img: "https://images.unsplash.com/photo-1527266237111-a4989d028b4b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      p: "You’re not lazy. You’re stuck in a loop. Learn the mental models and habits that help you take action even when motivation fades.",
    },
    {
      h1: "Speak with Confidence",
      img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      p: "Public speaking isn't a talent — it’s a skill. Learn how to express your thoughts with clarity, calm, and charisma.",
    },
    {
      h1: "Make Better Life Decisions",
      img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      p: "Overthinking every choice? This mini-course helps you build a system to make smarter, faster decisions you won’t regret later.",
    },
    {
      h1: "Build Powerful Daily Habits",
      img: "https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      p: "Tiny habits → Big results. Learn how to build routines that support your goals without relying on willpower alone.",
    },
    {
      h1: "Unlock Your Focus",
      img: "https://images.unsplash.com/photo-1517926112623-f32a800790d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      p: "The world is loud. Your mind doesn't have to be. Discover tools to reclaim deep focus and finally finish what you start.",
    },
  ];

  useEffect(() => {
    setCardsData(data);
  }, []);

  return (
    <div className="h-full w-full overflow-hidden flex justify-start align-top">
      <h1 className="w-[5%] ml-20 text-right mt-20 text-8xl font-gilroy-bold uppercase dir">
        <p className="text-sm mb-10">Courses which will Give You Growth</p>
        Courses.
      </h1>
      <div className="h-full w-[95%]">
        <div className="h-[8%]">
          <h1 className="w-[60%] ml-20 mt-20 text-5xl font-gilroy-bold uppercase">
            <p className="text-lg opacity-50">
              Courses
            </p>
            Devoted To Making The Most Memorable Experiences Within Our Time.
          </h1>
        </div>
        <div className="h-full w-[95%] overflow-hidden grid grid-cols-3 p-20 gap-20">
          {cardsData.map((c, i) => (
            <Card data={c} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
