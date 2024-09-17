import { combineReducers, configureStore } from "@reduxjs/toolkit";
import question_reducer from "./questions_reducer";
import result_reducer from "./result_reducer";

//call reducers
const rootReducer = combineReducers({
  questions: question_reducer,
  result: result_reducer,
});

//create store with reducer

export const store = configureStore({
  reducer: rootReducer,
});
