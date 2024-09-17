import { createSlice } from "@reduxjs/toolkit";

export const result_reducer = createSlice({
  name: "result",
  initialState: {
    result: [],
    userId: null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },

    pushResultAction: (state, action) => {
      state.result.push(action.payload);
    },

    updateResultAction: (state, action) => {
      const [trace, checked] = action.payload;
      state.result.fill(checked, trace, trace + 1);
    },
    resetResultActions: () => {
      return {
        userId: null,
        result: [],
      };
    },
  },
});

export const {
  setUserId,
  pushResultAction,
  resetResultActions,
  updateResultAction,
} = result_reducer.actions;
export default result_reducer.reducer;
