import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: null,
    trailerVideo: null,
    PopularMovies: null,
    TopRatedMovies: null,
    UpcomingMovies: null,
    SearchedMovies: null,
    AllVideos: null,
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
    addSearchedVideo: (state, action) => {
      state.SearchedMovies = action.payload;
    },
    addAllVideo: (state, action) => {
      state.AllVideos = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addPopularMovie,
  addTrailerVideo,
  addTopRatedMovie,
  addUpcomingMovie,
  addSearchedVideo,
  addAllVideo,
} = movieSlice.actions;

export default movieSlice.reducer;
