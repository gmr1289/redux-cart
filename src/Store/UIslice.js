import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
  name: "UI",
  initialState: { visible: true, notification: null },
  reducers: {
    toggle(state) {
      state.visible = !state.visible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const UIactions = UISlice.actions;

export default UISlice.reducer;
