import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    newMovies: null,
  },
  reducers: {
    addNewMovies: (state, action) => {
      state.newMovies = action.payload;
    },
  },
});

export const { addNewMovies } = movieSlice.actions;
export default movieSlice.reducer;
