import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts } from './operations';

const initialState = {
  contacts: [],
  isLoading: 'false',
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
      });
  },
});

export const contactsReducer = slice.reducer;
