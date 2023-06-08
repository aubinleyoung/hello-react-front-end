import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './components/slice/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});

export default store;