import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import moviesReducer from "./reducers/movieSlice";
import gptReducer from "./reducers/gptSlice";
import configReducer from "./reducers/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
