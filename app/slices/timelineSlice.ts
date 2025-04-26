// store/timelineSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Scene = {
  id: number;
  name: string;
};

interface TimelineState {
  scenes: Scene[];
}

const initialState: TimelineState = {
  scenes: [
    { id: 1, name: "Scene 1" },
    { id: 2, name: "Scene 2" },
    { id: 3, name: "Scene 3" },
  ],
};

const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    addScene: (state) => {
      const newScene: Scene = {
        id: Date.now(),
        name: `Scene ${state.scenes.length + 1}`,
      };
      state.scenes.push(newScene);
    },
    removeScene: (state, action: PayloadAction<number>) => {
      state.scenes = state.scenes.filter(scene => scene.id !== action.payload);
    },
    rearrangeScenes: (state, action: PayloadAction<Scene[]>) => {
      state.scenes = action.payload;
    },
  },
});

export const { addScene, removeScene, rearrangeScenes } = timelineSlice.actions;
export default timelineSlice.reducer;
