import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  dashboardData: [
    {
      title: "CSPM Executive Dashboard",
      cloudData: [
        {
          title: "Cloud Accounts",
          value: [
            { title: "Connected (2)", value: 1, color: "#5578FF" },
            { title: "Not Connected (2)", value: 1, color: "#E0EBFF" },
          ],
          show: true,
        },
        {
          title: "Cloud Account Risk Assessment",
          value: [
            { title: "Failed (1689)", value: 1689, color: "#B9140F" },
            { title: "Warning (681)", value: 681, color: "#FAD732" },
            { title: "Not Available (36)", value: 36, color: "#E0EBFF" },
            { title: "Passed (7253)", value: 7253, color: "#19A55A" },
          ],
          show: true,
        },
      ],
    },
    {
        title: "CWPP Dashboard",
        cloudData: [
          {
            title: "Tap 5 Namesspace Specific alert",
            value: [
              { title: "data 1", value: 65, color: "#5578FF" },
              { title: "data 2", value: 59, color: "#E0EBFF" },
              { title: "data 3", value: 70, color: "#E0EBFF" },
            ],
            show: true,
          },
          {
            title: "Cloud Account Risk Assessment",
            value: [
              { title: "Failed (1689)", value: 1689, color: "#B9140F" },
              { title: "Warning (681)", value: 681, color: "#FAD732" },
              { title: "Not Available (36)", value: 36, color: "#E0EBFF" },
              { title: "Passed (7253)", value: 7253, color: "#19A55A" },
            ],
            show: true,
          },
        ],
      },
  ],
  showWidget: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateCloudData(state, action) {
        const { newValue } = action.payload;
        return newValue;
      },
  },
});

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

export const { updateCloudData } = dashboardSlice.actions;
export const { toggleWidget, setWidgetVisibility } = sidebarSlice.actions;

const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
    sidebar: sidebarSlice.reducer,
  },
});

export default store;
