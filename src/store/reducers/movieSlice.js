import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: null,
    trailerVideo: null,
    PopularMovies: null,
    TopRatedMovies: null,
    UpcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addPopularMovie,
  addTrailerVideo,
  addTopRatedMovie,
  addUpcomingMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
