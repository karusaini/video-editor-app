import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AudioSegment {
  id: number;
  start: number;
  end: number;
  muted: boolean;
}

interface AudioState {
  segments: AudioSegment[];
}

const initialState: AudioState = {
  segments: [],
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    addSegment: (state, action: PayloadAction<AudioSegment>) => {
      state.segments.push(action.payload);
    },
    removeSegment: (state, action: PayloadAction<number>) => {
      state.segments = state.segments.filter(seg => seg.id !== action.payload);
    },
    toggleMute: (state, action: PayloadAction<number>) => {
      const segment = state.segments.find(seg => seg.id === action.payload);
      if (segment) segment.muted = !segment.muted;
    },
    rearrangeSegments: (state, action: PayloadAction<AudioSegment[]>) => {
      state.segments = action.payload;
    },
  },
});

export const { addSegment, removeSegment, toggleMute, rearrangeSegments } = audioSlice.actions;
export default audioSlice.reducer;
