import { createSlice } from "@reduxjs/toolkit";

export const question_reducer = createSlice({
  name: "questions",
  initialState: {
    queue: [], // questions with ,multiple choice
    answer: [], //actual ansewers of the questions
    trace: 0, // all user selected ansewers would be store here
  },

  reducers: {
    startExamAction: (state, action) => {
      let { question, answers } = action.payload;
      return {
        ...state,
        queue: question,
        answers,
      };
    },

    //update the trace value to switch on next question
    moveNextAction: (state) => {
      return { ...state, trace: state.trace + 1 };
    },

    movePrevAction: (state) => {
      return { ...state, trace: state.trace - 1 };
    },
    resetAllActions: () => {
      return {
        queue: [],
        answer: [],
        trace: 0,
      };
    },
  },
});

export const {
  startExamAction,
  moveNextAction,
  movePrevAction,
  resetAllActions,
} = question_reducer.actions;
export default question_reducer.reducer;
