// ---------------------------------------------
        Cloudwise: Coding Round 1
// ---------------------------------------------

/*
 * The PROBLEM STATEMENT
 * 
 * Time Limit: 30min
 * 
 * We Create a simple stopwactch in react with START, PAUSE, RESET functionality

 * /
 
import "./styles.css";
import { useEffect, useRef, useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Stopwatch delay={10} />
    </div>
  );
}

export const Stopwatch = ({ delay }) => {
  const [timerValue, setTimerValue] = useState(() => Number(delay));
  let timerObj = useRef(null);

  const startTimer = (e) => {
    e.preventDefault();

    clearInterval(timerObj.current);
    if (Number(timerValue) <= 0) {
      resetTimer(e);
    }

    timerObj.current = setInterval(() => {
      setTimerValue((prev) => {
        return Number(prev - 1);
      });
    }, 1000);
  };

  useEffect(() => {
    if (Number(timerValue) <= 0) {
      clearInterval(timerObj.current);
    }

  }, [timerValue]);

  useEffect(() => {
    return () => clearInterval(timerObj.current);
  }, [])

  const pauseTimer = (e) => {
    e.preventDefault();
    clearInterval(timerObj.current);
  };

  const resetTimer = (e) => {
    e.preventDefault();
    clearInterval(timerObj.current);
    setTimerValue(Number(delay));
  };

  return (
    <div>
      <button type="button" onClick={startTimer}>
        START TIMER
      </button>
      <button type="button" onClick={pauseTimer}>
        PAUSE TIMER
      </button>
      <button type="button" onClick={resetTimer}>
        RESET TIMER
      </button>
      <div
        style={{
          fontSize: "40px",
          color: "red",
          padding: "10px"
        }}
      >
        {timerValue}
      </div>
    </div>
  );
};
