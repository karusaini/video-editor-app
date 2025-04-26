import { createSlice } from '@reduxjs/toolkit';

interface RenderState {
  isRendering: boolean;
  isRendered: boolean;
}

const initialState: RenderState = {
  isRendering: false,
  isRendered: false,
};

const renderSlice = createSlice({
  name: 'render',
  initialState,
  reducers: {
    startRendering: (state) => {
      state.isRendering = true;
      state.isRendered = false;
    },
    finishRendering: (state) => {
      state.isRendering = false;
      state.isRendered = true;
    },
    resetRendering: (state) => {
      state.isRendering = false;
      state.isRendered = false;
    },
  },
});

export const { startRendering, finishRendering, resetRendering } = renderSlice.actions;
export default renderSlice.reducer;
