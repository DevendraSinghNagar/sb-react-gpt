import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./../utils/userSlice";
import movieSlice from "./../utils/movieSlice";

const AppStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
  },
});

export default AppStore;
