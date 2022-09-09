import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import connectionsApi from 'services/connectionsApi';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
};

// Async actions
export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, thunkApi) => {
    try {
      return await connectionsApi.removeContact(id);
    } catch (error) {
      toast(error.message, { type: 'error' });
      return thunkApi.rejectWithValue(error.message);
    } finally {
      thunkApi.dispatch(getAllContacts());
    }
  }
);
export const getAllContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      return await connectionsApi.getAllContacts();
    } catch (error) {
      toast(error.message, { type: 'error' });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkApi) => {
    try {
      await connectionsApi.createContact(contact);
      return await connectionsApi.getAllContacts();
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return thunkApi.rejectWithValue();
    } finally {
      thunkApi.dispatch(getAllContacts());
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContactFilter(state, action) {
      state.filter = action.payload.filter;
    },
  },
  extraReducers: {
    [getAllContacts.pending]: state => {
      state.isLoading = true;
    },
    [getAllContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getAllContacts.rejected]: state => {
      state.isLoading = false;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [addContact.rejected]: state => {
      state.isLoading = false;
    },
    [removeContact.pending]: state => {
      state.isLoading = true;
    },
    [removeContact.fulfilled]: state => {
      state.isLoading = false;
    },
    [removeContact.rejected]: state => {
      state.isLoading = false;
    },
  },
});

// Contacts selectors
export const getContactsFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;
export const getLoadingStatus = state => state.contacts.isLoading;

// Contacts redusers
export default contactsSlice.reducer;

// Contacts actions
export const { setContactFilter } = contactsSlice.actions;
