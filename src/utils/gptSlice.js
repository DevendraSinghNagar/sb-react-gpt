import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT Search",
  initialState: {
    isGPTEnable: false,
  },
  reducers: {
    setEnableDisable: (state) => {
      state.isGPTEnable = !state.isGPTEnable;
    },
  },
});

export const { setEnableDisable } = gptSlice.actions;
export default gptSlice.reducer;
