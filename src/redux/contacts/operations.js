import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../instance';
import { toast } from 'react-toastify';

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
      toast.success(`Contact deleted!`);
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
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    const credentials = {
      name: body.name,
      phone: body.phone,
      email: body.email,
    };
    try {
      const { data } = await instance.post('api/contacts/add', credentials);
      toast.success(`Contact ${body.name} succesfully added!`);
      return data;
    } catch (error) {
      toast.error(`Something went wrong. Please try again later.`);
      return rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (body, { rejectWithValue }) => {
    const credentials = {
      name: body.name,
      phone: body.phone,
      email: body.email,
    };
    try {
      const { data } = await instance.put(
        `api/contacts/${body._id}`,
        credentials
      );
      toast.success(`Contact ${body.name} succesfully edited!`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
