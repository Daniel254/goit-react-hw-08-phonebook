import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import connectionsApi from 'services/connectionsApi';

const initialState = {
  user: { email: null, name: null },
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  token: null,
};

//Auth operations
export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const res = await connectionsApi.createUser(credentials);
      connectionsApi.token.set(res.token);
      return res;
    } catch (error) {
      switch (error.response.status) {
        case 400:
          toast.error('Creating user error');
          break;

        case 500:
          toast.error('Server error. Try later');
          break;

        default:
          toast.error('Something went wrong');
          break;
      }
      return thunkApi.rejectWithValue();
    }
  }
);
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const res = await connectionsApi.loginUser(credentials);
      connectionsApi.token.set(res.token);
      return res;
    } catch (error) {
      switch (error.response.status) {
        case 400:
          toast.error('Login or password is wrong');
          break;

        case 500:
          toast.error('Server error. Try later');
          break;

        default:
          toast.error('Something went wrong');
          break;
      }
      return thunkApi.rejectWithValue();
    }
  }
);
export const logoutUser = createAsyncThunk('auth/logout', async () => {
  try {
    await connectionsApi.logoutUser();
    connectionsApi.token.unset();
    return;
  } catch (error) {
    toast.error(error.message);
  }
});
export const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    if (!state.auth.token) {
      return thunkApi.rejectWithValue();
    }
    connectionsApi.token.set(state.auth.token);

    try {
      const res = await connectionsApi.getCurrentUser();
      return res;
    } catch (error) {
      toast.error(error.message);
    }
  }
);

//Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logoutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = false;
    },
  },
});

//Auth selectors
const getUser = state => state.auth.user;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
export const authSelectors = {
  getUser,
  getIsLoggedIn,
  getIsFetchingCurrentUser,
};

export default authSlice.reducer;
