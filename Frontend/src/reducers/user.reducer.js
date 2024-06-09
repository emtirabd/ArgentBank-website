import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    userName: "",
  },
  reducers: {
    setUser: (state, action) => {
      const { firstName, lastName, userName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userName = userName;
    },
    updateUser: (state, action) => {
      const { firstName, lastName, userName } = action.payload;
      if (userName) state.userName = userName;
      if (firstName) state.firstName = firstName;
      if (lastName) state.lastName = lastName;
    },
  },
});

export const { setUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
