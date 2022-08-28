import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import ContextProvider from "./contexts/ContextProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
