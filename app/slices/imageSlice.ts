import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageOverlay {
  id: number;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
}

interface ImageState {
  overlays: ImageOverlay[];
}

const initialState: ImageState = {
  overlays: [],
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImageOverlay: (state, action: PayloadAction<ImageOverlay>) => {
      state.overlays.push(action.payload);
    },
    removeImageOverlay: (state, action: PayloadAction<number>) => {
      state.overlays = state.overlays.filter(img => img.id !== action.payload);
    },
    updateImageOverlay: (state, action: PayloadAction<ImageOverlay>) => {
      const index = state.overlays.findIndex(img => img.id === action.payload.id);
      if (index !== -1) {
        state.overlays[index] = action.payload;
      }
    },
  },
});

export const { addImageOverlay, removeImageOverlay, updateImageOverlay } = imageSlice.actions;
export default imageSlice.reducer;
