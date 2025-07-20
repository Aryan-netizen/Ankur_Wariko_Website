// useFlashNavigate.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlashTransition } from "./FlashTransition";

export const useFlashNavigate = () => {
  const [flash, setFlash] = useState(null);
  const navigate = useNavigate();

  const flashNavigate = (to) => {
    setFlash(
      <FlashTransition
        onComplete={() => {
          setFlash(null);
          navigate(to);
        }}
      />
    );
  };

  return [flashNavigate, flash];
};
