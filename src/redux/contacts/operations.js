import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../instance';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/api/contacts/mainpage');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
