import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: null,
    role: null,
  },
  reducers: {
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
    // setToken: (state, action) => {
    //   state.token = action.payload;
    // },
    setCredentials: (state, action) => {
      state.user=action.payload.username;
      state.token=action.payload.jwtToken;
      state.role = action.payload.role;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
});

export const { setCredentials, setError, clearError, logout } = authSlice.actions;
export default authSlice.reducer;
