import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontSize: 12,
    h4: { marginTop: "15px" },
  },
  components: {
    MuiTypography: {
      defaultProps: { marginBottom: "15px", variant: "h6" },
    },
    MuiCssBaseline: {
      styleOverrides: ``,
    },
  },
});

export default theme;
