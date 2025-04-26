import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Subtitle {
  id: number;
  start: number;
  end: number;
  text: string;
  fontSize: number;
  position: 'top' | 'bottom' | 'middle';
  color: string;
}

interface SubtitleState {
  subtitles: Subtitle[];
}

const initialState: SubtitleState = {
  subtitles: [],
};

const subtitleSlice = createSlice({
  name: 'subtitles',
  initialState,
  reducers: {
    addSubtitle: (state, action: PayloadAction<Subtitle>) => {
      state.subtitles.push(action.payload);
    },
    removeSubtitle: (state, action: PayloadAction<number>) => {
      state.subtitles = state.subtitles.filter(sub => sub.id !== action.payload);
    },
    updateSubtitle: (state, action: PayloadAction<Subtitle>) => {
      const index = state.subtitles.findIndex(sub => sub.id === action.payload.id);
      if (index !== -1) {
        state.subtitles[index] = action.payload;
      }
    },
  },
});

export const { addSubtitle, removeSubtitle, updateSubtitle } = subtitleSlice.actions;
export default subtitleSlice.reducer;
