import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface Theme {
//     typography: {
//       fontFamily: string
//     }
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

export const appTheme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["Poppins"].join(","),
      h1: {
        fontSize: "56px",
        fontWeight: 600,
      },
      h6: {
        fontSize: "16px",
        fontWeight: 500,
      },
    },
    palette: {
      primary: {
        main: "#C18FF5",
        contrastText: "#fff",
      },
      secondary: {
        main: "#5487F5",
        contrastText: "#fff"
      },
      background: {
        default: "#f6f6f6",
      },
    },
  })
);
