import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//register the user
export const register = createAsyncThunk(
  'user/register',
  async (user, thunkApi) => {
    try {
      return await userService.register(user);
    } catch (error) {
      const message = error.response.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

//login the user
export const login = createAsyncThunk('user/login', async (user, thunkApi) => {
  try {
    return await userService.login(user);
  } catch (error) {
    const message = error.response.data.message || error.message;
    return thunkApi.rejectWithValue(message);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,

  //these reducers arn't the asyncronous ones
  reducers: {
    reset: (state) => {
      localStorage.removeItem('user');
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = action.payload;
      state.user = null;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = action.payload;
      state.user = null;
    });
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
