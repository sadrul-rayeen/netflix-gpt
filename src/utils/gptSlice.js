import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    gptActiveOrNot: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { gptActiveOrNot } = gptSlice.actions;
export default gptSlice.reducer;
