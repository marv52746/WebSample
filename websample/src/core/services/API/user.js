// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { loadUserData } from "./userSlice";
import axios from "axios";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../slices/userListSlice";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest()); // Start the loading state
    try {
      const response = await axios.get(`${baseURL}/users`);
      dispatch(fetchUsersSuccess(response.data)); // Dispatch success action
    } catch (error) {
      console.error("Error fetching users:", error);
      dispatch(fetchUsersFailure(error.message)); // Dispatch failure action
    }
  };
};

// // registerUser
// export const registerUser = (data) => {
//   return async () => {
//     // Return a function that takes 'dispatch'
//     const response = await axios.post(`${baseURL}/register`, data);
//     return response.data;
//   };
// };

// // update single user
// export const setUser = (sys_id, data) => {
//   return async () => {
//     // Return a function that takes 'dispatch'
//     const response = await axios.post(`${baseURL}/update/${sys_id}`, data);
//     return response;
//   };
// };

// export const getUserData = (sys_id) => {
//   return async (dispatch) => {
//     // Return a function that takes 'dispatch'
//     const res = await axios.get(`${baseURL}/user/${sys_id}`);
//     dispatch(loadUserData(res.data));
//   };
// };

// export const getUser = (sys_id) => {
//   return async function fetchData() {
//     const response = await axios.get(`${baseURL}/user/${sys_id}`);
//     return response.data;
//   };
// };

// export const updateUser = createAsyncThunk(
//   "users/update",
//   async (user, sys_id) => {
//     const response = await axios.post(`${baseURL}/update/${sys_id}`, user);
//     return response.data;
//   }
// );

// // controller for delete
// // needs access token from current user
// export const deleteUser = (sys_id) => {
//   return async () => {
//     const response = await axios.delete(`${baseURL}/delete/${sys_id}`);
//     return response;
//   };
// };

// export const getUserbyEmail = (data) => {
//   return async function fetchData() {
//     const response = await axios.get(`${baseURL}/findbyEmail`, data);
//     return response;
//   };
// };

// export const getUserbyEmailFilter = (email) => {
//   return async function fetchData() {
//     const response = await axios.get(
//       `${baseURL}/load-user-filter?email=${email}`
//     );
//     return response;
//   };
// };
