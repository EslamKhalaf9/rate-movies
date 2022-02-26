import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import moviesServices from './moviesServices';

const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
  isSucceess: false,
  message: '',
};

export const searchMovies = createAsyncThunk(
  'movies/search',
  async (title, thunkApi) => {
    try {
      return await moviesServices.searchMovies(title);
    } catch (error) {
      const message = error.response.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    reset: (state) => {
      state.movies = [];
      state.isLoading = false;
      state.isError = false;
      state.isSucceess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.isError = false;
      state.isSucceess = true;
      state.isLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.isError = true;
      state.isSucceess = false;
      state.isLoading = false;
      state.movies = [];
      this.message = action.payload;
    });
  },
});

export const { reset } = moviesSlice.actions;

export default moviesSlice.reducer;
