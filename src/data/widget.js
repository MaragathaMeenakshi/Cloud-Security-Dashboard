import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  showWidget: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleWidget(state) {
      state.showWidget = !state.showWidget;
    },
    setWidgetVisibility(state, action) {
      state.showWidget = action.payload;
    },
  },
});

export const { toggleWidget, setWidgetVisibility } = sidebarSlice.actions;


const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
});

export default store;
