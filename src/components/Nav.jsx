import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useCursor } from "../context/CursorContext";
import { Link, Outlet } from "react-router-dom";
import { useFlashNavigate } from "./flash/useFlashNavigate";

const Nav = () => {
  const { mouseRef, setCursorSpeed } = useCursor();
  const [flashNavigate, flash] = useFlashNavigate();

  const navref = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(navref.current.querySelectorAll("h1"), {
      opacity: 0,
      stagger: 0.2,
      y: 50,
      duration: 0.4,
    });
  });
  const enter = () => {
    gsap.to(mouseRef.current, {
      scale: 2,
      duration: 2,
    });
    setCursorSpeed(3);
  };
  const leave = () => {
    gsap.to(mouseRef.current, {
      scale: 1,
      duration: 2,
    });
    setCursorSpeed(1);
  };
  return (
    <>
      <div
        ref={navref}
        className="flex justify-end gap-8 p-5 text-2xl w-full fixed z-20 glass-card px-20"
      >
        <Link to="/">
          <h1 onMouseEnter={enter} onMouseLeave={leave}>
            Home
          </h1>
        </Link>
        <Link to="/courses">
          <h1 onMouseEnter={enter} onMouseLeave={leave}>
            Courses
          </h1>
        </Link>
        <Link to="/">
          <h1 onMouseEnter={enter} onMouseLeave={leave}>
            Books
          </h1>
        </Link>
        <Link to="/">
          <h1 onMouseEnter={enter} onMouseLeave={leave}>
            About
          </h1>
        </Link>
        <Link to="/">
          <h1 onMouseEnter={enter} onMouseLeave={leave}>
            Login
          </h1>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
