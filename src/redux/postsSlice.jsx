import { createSlice } from "@reduxjs/toolkit";

export const postsSlices = createSlice({
 name: 'posts',
 initialState: {
  items: [],
 },
 reducers: {
  addPost: function(state, action){
    state.items.push(action.payload)
  },
  deletePost: function(state, action) {
   state.items = state.items.filter(item => item.id != action.payload)
  },
  updatePost: function(state, action) {
   state.items.map(item => {
    if(item.id == action.payload.id) {
      item.title = action.payload.title;
      item.content = action.payload.content;
    }
   })
  },
 },
})

export const { addPost, deletePost, updatePost } = postsSlices.actions

export default postsSlices.reducer