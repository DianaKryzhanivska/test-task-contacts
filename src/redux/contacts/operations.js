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

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await instance.delete(`/api/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSearchContacts = createAsyncThunk(
  'contacts/getSearchContacts',
  async (searchTerm, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/api/contacts/search?term=${searchTerm}`
      );
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
