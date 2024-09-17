import { useEffect, useState } from "react";
// import data, { answers } from "../database/data";
import * as Action from "../redux/questions_reducer";
import { useDispatch } from "react-redux";
import { getServerData } from "../components/helper/Helper";

export const useFetchQuestions = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    //async function to fetch backend data

    (async () => {
      try {
        // let question = await data;
        // console.log("all questions are", question);
        const [{ questions, answers }] = await getServerData(
          `${process.env.API_SERVER_HOST}/api/server`,
          (data) => data
        );
        console.log(questions, answers);

        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));

          setGetData((prev) => ({
            ...prev,
            apiData: { question: questions, answers },
          }));
          //dispatch an action
          dispatch(Action.startExamAction({ questions, answers }));
        } else {
          throw new Error("No question available ");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};
//function to change the value of trace increasing by 1

export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (error) {
    console.log(error);
  }
};

//function to change the value of trace  decreasing by 1

export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction());
  } catch (error) {
    console.log(error);
  }
};
