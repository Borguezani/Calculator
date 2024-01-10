import React, { useState } from "react";
import Button from "./button";
import { Grid } from "@mui/material";
import "./calculator.css";
import styled from "styled-components";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [firstNum, setFirstNum] = useState(0);
  const [operator, setOperator] = useState(0);
  const buttons = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ",",
    ".",
    "=",
  ];
  const numberPickHandler = (value) => {
    var input = value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
    switch (input) {
      case "AC":
        setNum(0);
        break;
      case "%":
        setNum(num / 100);
        break;
      case "+/-":
        if (num > 0) {
          setNum(num * -1);
        } else {
          setNum(num * -1);
        }
        break;
      case "/":
        var operatorSign = input;
        setOperator(operatorSign);
        setFirstNum(num);
        setNum(0);
        break;
      case "*":
        var operatorSign = input;
        setOperator(operatorSign);
        setFirstNum(num);
        setNum(0);
        break;
      case "-":
        var operatorSign = input;
        setOperator(operatorSign);
        setFirstNum(num);
        setNum(0);
        break;
      case "+":
        var operatorSign = input;
        setOperator(operatorSign);
        setFirstNum(num);
        setNum(0);
        break;
      case "=":
        if (operator === "/") {
          setNum(firstNum / num);
        } else if (operator === "*") {
          setNum(firstNum * num);
        } else if (operator === "+") {
          setNum(parseFloat(firstNum) + parseFloat(num));
        } else if (operator === "-") {
          setNum(firstNum - num);
        }
        break;
    }
  };

  return (
    <>
      <h1>{num}</h1>
      <div className="container">
        {buttons.map((button, key) => (
          <Button
            key={key}
            numberPickHandler={numberPickHandler}
            character={button}
            value={button}
          />
        ))}
      </div>
    </>
  );
}
