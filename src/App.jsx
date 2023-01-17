import { useEffect, useRef, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import "./App.css";
import NumberDisplay from "./Components/NumberDisplay";
import TimerDisplay from "./Components/TimerDisplay";

function App() {
  const inputRef = useRef();
  const [firstGame, setFirstGame] = useState(true);
  const [newAttempt, setNewAttempt] = useState(true);
  const [input, setInput] = useState("");
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);

  const { seconds, minutes, isRunning, start, reset, pause } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    console.log("current score: ", score);
  }, [score]);

  return (
    <>
      <div className="container">
        <div className="innerBox">
          {firstGame ? (
            <>
              <span>Welcome to Mind Booster</span>
              <button
                className="btn"
                onClick={() => {
                  setFirstGame(false);
                  start();
                }}
              >
                Start
              </button>
            </>
          ) : (
            <>
              <TimerDisplay seconds={seconds} minutes={minutes} />
              <NumberDisplay
                inputRef={inputRef}
                score={score}
                setScore={setScore}
              />

              <input
                type="number"
                placeholder="Enter Sum"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                ref={inputRef}
              />

              <div className="btn-container">
                <button className="btn" onClick={pause}>
                  Stop
                </button>

                {!firstGame && (
                  <button className="btn" onClick={reset}>
                    Try Again
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
