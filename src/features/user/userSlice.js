import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  light: "autumn",
  dark: "coffee",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.light;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: "john",
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login user");
    },
    logoutUser: (state) => {
      console.log("logout user");
    },
    toggleTheme: (state) => {
      const { light, dark } = themes;
      //   console.log(light, dark);
      state.theme = state.theme === light ? dark : light;
      document.documentElement.setAttribute("data-theme", state.theme);
      //REVISIT==============================
      localStorage.setItem("theme", state.theme);
      console.log("toggle theme");
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
