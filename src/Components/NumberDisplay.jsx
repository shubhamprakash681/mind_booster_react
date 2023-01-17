import React, { useEffect, useState } from "react";

const NumberDisplay = ({
  sumInput,
  inputRef,
  total,
  setTotal,
  score,
  setScore,
}) => {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 100) + 10);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 100) + 10);
  const [firstTime, setFirstTime] = useState(true);

  let incorrectCount = 0;

  const validator = (sumInput) => {
    console.log("sumInput: ", sumInput);

    let sum = num1 + num2;

    if (sum === Number(sumInput)) {
      console.log("s");
      setNum1(sum);
      setNum2(Math.floor(Math.random() * 100) + 10);
      sum = num1 + num2;
      incorrectCount = 0;
      setScore(Math.random());
    } else {
      if (incorrectCount === 0) {
        incorrectCount = 1;
      } else {
        setNum1(sum);
        setNum2(Math.floor(Math.random() * 100) + 10);
        sum = num1 + num2;
        incorrectCount = 0;
      }
    }
  };

  useEffect(() => {
    inputRef.current.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        console.log("ENTER PRESSED");
        console.log(inputRef.current.value);

        validator(inputRef.current.value);
      }
    });

    return () =>
      inputRef.current.removeEventListener("keypress", () =>
        console.log("keypress event listner removed")
      );
  }, [inputRef]);

  return (
    <>
      <div className="row">
        <span className="num-cont">
          <span>
            <span>{num1}</span>
            <span>+</span>
            <span>{num2}</span>
          </span>
          <span>=</span>
        </span>
      </div>
    </>
  );
};

export default NumberDisplay;
