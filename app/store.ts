import { configureStore } from '@reduxjs/toolkit';
import timelineReducer from "@/app/slices/timelineSlice"
import audioReducer from "@/app/slices/audioSlice"
import subtitleReducer from "@/app/slices/subtitleSlice"
import imageReducer from "@/app/slices/imageSlice"
import renderReducer from "@/app/slices/renderSlice"

export const store = configureStore({
  reducer: {
    timeline: timelineReducer,
    audio: audioReducer,
    subtitles: subtitleReducer,
    images: imageReducer,
    render: renderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
