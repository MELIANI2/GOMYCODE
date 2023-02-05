import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../../movies";
export const movieslice = createSlice({
  name: "movies",
  initialState: movies,
  reducers: {
    Togglewatched: (state, action) => {
      console.log("payload", action.payload);
      state = state.map((movie) => {
        if (movie.id === action.payload) {
          return { ...movie, watched: !movie.watched };
        }
        return movie;
      });
      return state;
    },
  },
});
export const {Togglewatched} = movieslice.actions
