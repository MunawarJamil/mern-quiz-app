import React, { useEffect } from "react";
import "../styles/Result.css";
import ResultTable from "./ResultTable";
import { Link } from "react-router-dom";
import { resetAllActions } from "../redux/questions_reducer";
import { resetResultActions } from "../redux/result_reducer";
import { useDispatch, useSelector } from "react-redux";
import { attempts_number, flagResult } from "./helper/Helper";
import { earnedPoints } from "./helper/Helper";
function Result() {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  useEffect(() => {
    console.log("here is saved result ", result);
    console.log("earned points ", points);
  });

  const totalPoints = queue.length * 10;
  const attempts = attempts_number(result);
  const points = earnedPoints(result, answers, 10);
  const flag = flagResult(totalPoints, earnedPoints);

  function onRestart() {
    console.log("onRestart clicked");
    dispatch(resetAllActions());
    dispatch(resetResultActions());
  }
  return (
    <div className="container">
      <h1 className=" title text-light">Quiz Application</h1>
      <div className="flex-center result">
        <div className="flex">
          <span>Total quiz points</span>
          <span className="bold">{totalPoints || 0}</span>
        </div>

        <div className="flex">
          <span>Total Questions</span>
          <span className="bold">{queue.length || 0}</span>
        </div>

        <div className="flex">
          <span>Total Ettempts</span>
          <span className="bold">{attempts || 0}</span>
        </div>

        <div className="flex">
          <span>Earned points</span>
          <span className="bold">{points || 0}</span>
        </div>

        <div className="flex">
          <span>Remarks</span>
          <span className="bold"> {flag ? "Passed" : "Failed"}</span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to="/" onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="container">
        <ResultTable />
      </div>
    </div>
  );
}

export default Result;
