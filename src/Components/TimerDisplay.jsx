import React from "react";

const TimerDisplay = ({ seconds, minutes }) => {
  return (
    <>
      <div className="row">
        <span>
          {minutes}:
          {seconds}
        </span>
      </div>
    </>
  );
};

export default TimerDisplay;
