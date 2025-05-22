// import { configureStore } from '@reduxjs/toolkit';
// import predictionReducer from './slice'; // ✅ CORRECT



// export const store = configureStore({
//   reducer: {
//     prediction: predictionReducer,
//   },
// });



import { createSlice } from '@reduxjs/toolkit';import { configureStore } from '@reduxjs/toolkit';
import predictionReducer from './slice'; // ✅ CORRECT



export const store = configureStore({
  reducer: {
    prediction: predictionReducer,
  },
});