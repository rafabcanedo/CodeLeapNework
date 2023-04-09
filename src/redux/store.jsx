import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import postsSlices from "./postsSlice";

export default configureStore({
 reducer: {
  user: userReducer,
  posts: postsSlices,
 },
})