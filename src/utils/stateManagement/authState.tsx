import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { iSign } from "../interfaces";

const initialState = {
  currentUser: {} || null,
};

const authState = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<iSign>) => {
      state.currentUser = payload;
    },

    logOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginUser, logOut } = authState.actions;

export default authState.reducer;
