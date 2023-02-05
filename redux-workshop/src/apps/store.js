import { configureStore } from "@reduxjs/toolkit";
import { movieslice } from "./slices/movieslice";

export const store = configureStore({
  reducer: {
    movies: movieslice.reducer,
  },
});

export const { Togglewatched } = movieslice.actions;