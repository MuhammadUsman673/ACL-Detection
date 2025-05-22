// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   plane: null,
//   task: null,
//   probability: null,
//   diagnosis: null,
// };

// const predictionSlice = createSlice({
//   name: "prediction",
//   initialState,
//   reducers: {
//     setPredictionResult: (state, action) => {
//       const { plane, task, probability, diagnosis } = action.payload;
//       state.plane = plane;
//       state.task = task;
//       state.probability = probability;
//       state.diagnosis = diagnosis;
//     },
//     clearPrediction: (state) => {
//       state.plane = null;
//       state.task = null;
//       state.probability = null;
//       state.diagnosis = null;
//     },
//   },
// });

// export const { setPredictionResult, clearPrediction } = predictionSlice.actions;
// export default predictionSlice.reducer;





import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plane: null,
  task: null,
  probability: null,
  diagnosis: null,
  fullResults: null,
};

const predictionSlice = createSlice({
  name: "prediction",
  initialState,
  reducers: {
    setPredictionResult: (state, action) => {
      const { highest, fullResults } = action.payload;
      state.plane = highest.plane;
      state.task = highest.task;
      state.probability = highest.probability;
      state.diagnosis = highest.diagnosis;
      state.fullResults = fullResults;
    },
    clearPrediction: (state) => {
      state.plane = null;
      state.task = null;
      state.probability = null;
      state.diagnosis = null;
      state.fullResults = null;
    },
  },
});

export const { setPredictionResult, clearPrediction } = predictionSlice.actions;
export default predictionSlice.reducer;