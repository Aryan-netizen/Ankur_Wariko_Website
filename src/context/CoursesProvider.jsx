import { createContext, useContext, useState } from "react";

// Create Context
const CoursesContext = createContext();

// Custom Hook (optional but recommended)
export const useCourses = () => useContext(CoursesContext);

// Sample Course Data
const courseData = [
  {
    id: 1,
    h1: "Take Charge of Your Time",
    img: "https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=736&auto=format&fit=crop",
    p: "Stop running in circles. This course is for the overthinkers, overworkers, and overwhelmed. If you're tired of feeling busy but unproductive — this is your blueprint to a calm, focused, and high-output life.",
    video: "https://www.youtube.com/embed/7ax4Tb5G1P4",
    learnings: [
      "Build a system to manage your time",
      "Learn to say no without guilt",
      "Handle procrastination with awareness",
      "Apply time-blocking and deep work",
      "Create sustainable daily routines"
    ],
    blog: {
      heading: "Mastering Time Management",
      sections: [
        {
          h2: "Why time management matters",
          p: "Time is your most valuable asset. Managing it well leads to clarity, productivity, and reduced stress."
        },
        {
          h2: "Techniques that work",
          p: "Try Pomodoro, time blocking, or deep work to protect your focus and get more done in less time."
        }
      ]
    }
  },
  {
    id: 2,
    h1: "Master Your Money Mindset",
    img: "https://images.unsplash.com/photo-1593672715438-d88a70629abe?q=80&w=687&auto=format&fit=crop",
    p: "We were never taught how to manage money. This course is your crash course in earning, saving, and investing without jargon or fear.",
    video: "https://www.youtube.com/watch?v=CeaxZ816omk",
    learnings: [
      "Understand your money patterns",
      "Build a budgeting system that sticks",
      "Start saving and investing early",
      "Avoid lifestyle inflation",
      "Master delayed gratification"
    ],
    blog: {
      heading: "Redesign Your Relationship with Money",
      sections: [
        {
          h2: "The mental side of money",
          p: "Most of us carry beliefs about money from childhood. Awareness is the first step to change."
        },
        {
          h2: "Money habits that stick",
          p: "Automate saving, track expenses, and set clear short- and long-term financial goals."
        }
      ]
    }
  },
  {
    id: 3,
    h1: "Design a Meaningful Career",
    img: "https://images.unsplash.com/photo-1459180129673-eefb56f79b45?q=80&w=1173&auto=format&fit=crop",
    p: "Not sure what to do with your life? This guide helps you align passion with profession through clarity exercises and practical thinking.",
    video: "https://www.youtube.com/watch?v=1mnLjra9PAE",
    learnings: [
      "Identify your core values and skills",
      "Build clarity around your ideal work",
      "Understand the Ikigai model",
      "Explore careers through experimentation",
      "Make intentional career pivots"
    ],
    blog: {
      heading: "Finding Career Clarity",
      sections: [
        {
          h2: "What makes work meaningful?",
          p: "Purpose, growth, autonomy, and impact — these are the ingredients of fulfilling work."
        },
        {
          h2: "How to gain clarity",
          p: "Reflect, experiment, and eliminate what doesn’t resonate. Clarity is earned, not found."
        }
      ]
    }
  },
  {
    id: 4,
    h1: "Break the Procrastination Loop",
    img: "https://images.unsplash.com/photo-1527266237111-a4989d028b4b?q=80&w=1170&auto=format&fit=crop",
    p: "You’re not lazy. You’re stuck in a loop. Learn the mental models and habits that help you take action even when motivation fades.",
    video: "https://www.youtube.com/watch?v=7KBxvfz4mQk",
    learnings: [
      "Understand the science behind procrastination",
      "Use friction and triggers to your advantage",
      "Master the 2-minute rule",
      "Create dopamine-smart environments",
      "Build momentum daily"
    ],
    blog: {
      heading: "Overcoming Chronic Procrastination",
      sections: [
        {
          h2: "Why we delay important tasks",
          p: "Fear of failure, lack of clarity, or perfectionism often block us from starting."
        },
        {
          h2: "Momentum beats motivation",
          p: "Action leads to motivation. Start small and let consistency do the rest."
        }
      ]
    }
  },
  {
    id: 5,
    h1: "Speak with Confidence",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1170&auto=format&fit=crop",
    p: "Public speaking isn't a talent — it’s a skill. Learn how to express your thoughts with clarity, calm, and charisma.",
    video: "https://www.youtube.com/watch?v=savwVzZh5go",
    learnings: [
      "Structure your speech for impact",
      "Conquer stage fear with mindset shifts",
      "Use tone and body language effectively",
      "Engage your audience emotionally",
      "Practice storytelling as a tool"
    ],
    blog: {
      heading: "Finding Your Voice",
      sections: [
        {
          h2: "Why public speaking matters",
          p: "Communication is your leverage in work and life. It boosts trust, clarity, and leadership."
        },
        {
          h2: "How to improve fast",
          p: "Record yourself. Join groups like Toastmasters. Learn by doing, not just reading."
        }
      ]
    }
  },
  {
    id: 6,
    h1: "Make Better Life Decisions",
    img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1170&auto=format&fit=crop",
    p: "Overthinking every choice? This mini-course helps you build a system to make smarter, faster decisions you won’t regret later.",
    video: "https://www.youtube.com/watch?v=xlvdyc_je-I",
    learnings: [
      "Use decision trees and mental models",
      "Avoid analysis paralysis",
      "Trust your gut — but with reason",
      "Learn from past decisions",
      "Set clear decision boundaries"
    ],
    blog: {
      heading: "Decide Like a Pro",
      sections: [
        {
          h2: "What makes decisions hard",
          p: "Too many options, fear of regret, and unclear values are the root of indecision."
        },
        {
          h2: "Frameworks that help",
          p: "Try 'Regret Minimization', Eisenhower Matrix, or the 10–10–10 rule."
        }
      ]
    }
  },
  {
    id: 7,
    h1: "Build Powerful Daily Habits",
    img: "https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?q=80&w=736&auto=format&fit=crop",
    p: "Tiny habits → Big results. Learn how to build routines that support your goals without relying on willpower alone.",
    video: "https://www.youtube.com/watch?v=xkm6dhRkMQ8",
    learnings: [
      "Stack habits to existing routines",
      "Start with atomic actions",
      "Track progress visually",
      "Design an environment for success",
      "Make habits rewarding"
    ],
    blog: {
      heading: "Small Habits, Massive Change",
      sections: [
        {
          h2: "Why habits beat motivation",
          p: "Motivation fades. Habits stay. Identity-based habits are the most powerful."
        },
        {
          h2: "Start tiny, grow big",
          p: "The key is consistency. A 1% daily improvement compounds massively over time."
        }
      ]
    }
  },
  {
    id: 8,
    h1: "Unlock Your Focus",
    img: "https://images.unsplash.com/photo-1517926112623-f32a800790d4?q=80&w=1170&auto=format&fit=crop",
    p: "The world is loud. Your mind doesn't have to be. Discover tools to reclaim deep focus and finally finish what you start.",
    video: "https://www.youtube.com/watch?v=dITNwCpbvog",
    learnings: [
      "Eliminate digital distractions",
      "Use deep work techniques",
      "Train your attention span",
      "Create focus-friendly environments",
      "Recover from mental fatigue"
    ],
    blog: {
      heading: "The Science of Focus",
      sections: [
        {
          h2: "Why focus is your superpower",
          p: "In a distracted world, the ability to focus is a rare and valuable skill."
        },
        {
          h2: "Focus is trainable",
          p: "Mindfulness, time blocking, and environment design can radically improve your concentration."
        }
      ]
    }
  }

];

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState(courseData);

  return (
    <CoursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </CoursesContext.Provider>
  );
};
