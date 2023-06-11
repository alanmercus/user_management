import { createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../services/UserService';

// Async action creator to fetch users
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  try {
    const response = await UserService.getAllUsers();
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});
export const fetchUserById = createAsyncThunk('user/fetchUserById', async (userId) => {
  try {
    const response = await UserService.getUserById(userId);
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});

// Async action creator to create a user
export const createUser = createAsyncThunk('user/createUser', async (user) => {
  try {
    const response = await UserService.createUser(user);
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});

// Async action creator to update a user
export const updateUser = createAsyncThunk('user/updateUser',async ({ userId, user }) => {
    try {
      const response = await UserService.updateUser(userId, user);
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

// Async action creator to delete a user
export const deleteUser = createAsyncThunk('user/deleteUser', async (userId) => {
  try {
    await UserService.deleteUser(userId);
    return userId;
  } catch (error) {
    throw Error(error.message);
  }
});