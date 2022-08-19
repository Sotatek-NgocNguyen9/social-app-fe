import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/sign-in" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
