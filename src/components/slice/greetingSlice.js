import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllGreetings = createAsyncThunk('greeting', async () => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
  return response.json();
});

const initialState = {
  greetings: [],
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    setGreetings: (state, { payload }) => ({ ...state, greetings: payload }),
  },
  extraReducers(builder) {
    builder.addCase(getAllGreetings.fulfilled, (state, action) => ({
      ...state,
      greetings: action.payload,
    }));
  },
});

export const { setGreetings } = greetingSlice.actions;
export default greetingSlice.reducer;
