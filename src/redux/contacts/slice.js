import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchAllContacts,
  getSearchContacts,
} from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })
      .addCase(fetchAllContacts.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchAllContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(({ _id }) => _id !== payload);
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getSearchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(getSearchContacts.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getSearchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        state.isLoading = false;
      })
      .addCase(addContact.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.map(contact =>
          contact._id === payload._id ? payload : contact
        );
      })
      .addCase(editContact.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(editContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const contactsReducer = slice.reducer;
