import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
 name: 'username',
 initialState: {
  username: '',
  isLogged: false,
 },
  reducers: {
   changeUser(state, { payload }) {
    return {...state, isLogged: true, username: payload}
   },
   logout(state){
    return {...state, isLogged: false, username: ''}
   }
  }
})

export const { changeUser, logout } = slice.actions

export const selectUser = state => state.user

export default slice.reducer