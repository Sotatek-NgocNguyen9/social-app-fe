import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/sign-in" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
