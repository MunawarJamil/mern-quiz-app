import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchQuestions } from "../customHooks/useFetchQuestions";
import { updateResult } from "../customHooks/useSetResult";
function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);

  const result = useSelector((state) => state.result.result);
  const dispatch = useDispatch();
  const [{ isLoading, apiData, serverError }] = useFetchQuestions();

  // console.log("api data is ", apiData);

  function onSelect(i) {
    // setChecked(onChecked);
    onChecked(i);
    setChecked(i);
    dispatch(updateResult([trace, checked]));
    // console.log(`Option ${i} is selected`);
  }

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  useEffect(() => {
    console.log("here are questions", questions);
    dispatch(updateResult([trace, checked]));
  }, [checked]);

  if (isLoading) return <h3 className="text-light">Loading...</h3>;
  if (serverError)
    return <h3 className="text-light"> unknown error occured </h3>;

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((option, i) => (
          <li key={i}>
            <input
              type="radio"
              value={option}
              name="option"
              onChange={() => onSelect(i)}
              id={`q${i}-option`}
              checked={checked === i}
            />
            <label htmlFor={`q${i}-option`} className="text-primary">
              {option}
            </label>
            <div
              className={`check ${result[trace] == i ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
