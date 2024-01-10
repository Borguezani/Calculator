import React from "react";
import "./button.css";

export default function Button({ value, character, numberPickHandler }) {
  return (
    <>
      <button value={value} onClick={(e) => numberPickHandler(e.target.value)}>
        {character}
      </button>
    </>
  );
}
