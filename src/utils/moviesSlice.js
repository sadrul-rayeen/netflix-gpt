import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularVideos: null,
  },
  reducers: {
    addMoviesList: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
  },
});

export const { addMoviesList, addTrailerVideo, addPopularVideos } =
  moviesSlice.actions;

export default moviesSlice.reducer;
