import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { useSelector, useDispatch } from "react-redux";
import { pushAnswer } from "../customHooks/useSetResult"; 
import { Navigate } from "react-router-dom";
import {
  MoveNextQuestion,
  MovePrevQuestion,
} from "../customHooks/useFetchQuestions";

function Quiz() {
  const { trace, queue } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);

  const [checked, setChecked] = useState(undefined);
  const dispatch = useDispatch();

  function prev() {
    console.log("prev is clicked");

    //update the trace value by decreasing one
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(checked) {
    console.log(checked);
    setChecked(checked);
  }
  // finished exam after the last question
  if (result.length && result.length > queue.length) {
    return <Navigate to={"/result"} replace={true} />;
  }
  function next() {
    console.log("next is clicked");
    //update the trace value increasing by  one
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      if (result.length >= trace) {
        dispatch(pushAnswer(checked));
      }
      setChecked(undefined);
    }
  }

  return (
    <div className="container ">
      <h1 className=" title text-light">Quiz Application</h1>
      {/* Display Questions */}
      <Questions onChecked={onChecked} />{" "}
      {/*for getting the option selected by user */}
      {/* prev next buttons */}
      <div className="grid">
        {trace > 0 && (
          <button className="btn prev" onClick={prev}>
            prev
          </button>
        )}

        <button className="btn next" onClick={next}>
          next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
