import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import api from "../services/api";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get('https://dev.codeleap.co.uk/careers/?limit=10');
    return (response.data);
  } catch (error) {
    //return err.message;
    console.log(error);
  }
})

export const postsSlices = createSlice({
 name: 'posts',
 initialState: {
  posts: [],
  status: 'idle', // idle | loading | sucess | failed
  error: null
 },
 reducers: {
  addPost: function(state, action){
    state.posts.push(action.payload)
  },
  deletePost: function(state, action) {
   state.posts = state.posts.filter(post => post.id != action.payload)
  },
  updatePost: function(state, action) {
   state.posts.map(post => {
    if(post.id == action.payload.id) {
      post.title = action.payload.title;
      post.content = action.payload.content;
    }
   })
  },
 },
 extraReducers(builder) {
  builder
   .addCase(fetchPosts.pending, (state) => {
    state.status = 'loading';
   })
   .addCase(fetchPosts.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.posts = action.payload.results
   })
   .addCase(fetchPosts.rejected, (state, action) => {
    state.status = 'failed'
    state.error = action.error.message
   })
 },
});

// Select Posts
export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { addPost, deletePost, updatePost } = postsSlices.actions

export default postsSlices.reducer