import { createSlice } from "@reduxjs/toolkit"; //facility of redux

import { UsersData } from "../MyData";

export const userSlice = createSlice({
  name: "users", //object
  initialState: { value: UsersData }, //property call to value
  reducers: {
    //diff function to call action,state
    addUser: (state, action) => {
      state.value.push(action.payload); // push append element to last of array
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id); //condition specified and call back function
    },

    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username; // action.payload as its final element
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions; //1You can store a current user and maintain a list of all users that ever "signed in". user.slice.js
export default userSlice.reducer; //reducer call index.js for having feature
