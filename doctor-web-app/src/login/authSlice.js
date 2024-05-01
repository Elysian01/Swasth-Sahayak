import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const persistConfig = {
  key: "auth",
  storage,
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: null,
    role: null,
    pids: [], // Add pids array to the initial state
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.username;
      state.token = action.payload.jwtToken;
      state.role = action.payload.role;
      state.error = null;
    },
    setPids: (state, action) => { // New reducer to set pids array
      state.pids = action.payload;
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
      state.role = null;
      state.pids = []; // Clear pids array on logout
    },
  },
});

export const { setCredentials, setPids, setError, clearError, logout } = authSlice.actions;

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);
export default persistedReducer;
