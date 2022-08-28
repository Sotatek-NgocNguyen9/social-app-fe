import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gray: {
      background: string;
      text: string;
    };
  }
  interface PaletteOptions {
    gray: {
      background: string;
      text: string;
    };
  }
}

export const appTheme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["Poppins"].join(","),
      h1: {
        fontSize: "56px",
        fontWeight: 700,
      },
      h3: {
        fontSize: "32px",
        fontWeight: 600,
      },
      h4: {
        fontSize: "24px",
        fontWeight: 600,
      },
      h5: {
        fontSize: "18px",
        fontWeight: 600,
      },
      h6: {
        fontSize: "16px",
        fontWeight: 500,
      },
      body1: {
        fontSize: "16px",
        fontWeight: 400,
      },
      body2: {
        fontSize: "14px",
        fontWeight: 300,
      },
    },
    palette: {
      primary: {
        main: "#C18FF5",
        contrastText: "#fff",
      },
      gray: {
        background: "#F6F6F6",
        text: "#ACACAC",
      },
      secondary: {
        main: "#5487F5",
        contrastText: "#fff",
      },
      background: {
        default: "#f6f6f6",
      },
    },
  })
);
