import { createTheme } from "@mui/material";

const Theme = createTheme({
  typography: {
    // font type and weights

    fontFamily: "Inter",
    h1: {
      fontSize: "3rem",
      fontWeight: 1000,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 1000,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 1000,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 1000,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 1000,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 1000,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
      textTransform: "none",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
  },

  // primary and secondary palette
  palette: {
    // mode: "light",
    primary: {
      main: "#325A55",
    },
    secondary: {
      main: "#FDF1E3",
    },
    white: {
      main: "#FFFFFF",
    },
    grey: {
      main: "#F3F3F3",
    },
    smiley5: {
      main: "#FFA500",
    },
    smiley4: {
      main: "#ED7117",
    },
    smiley3: {
      main: "#B2AC88",
    },
    smiley2: {
      main: "#391E94",
    },
    smiley1: {
      main: "#4B0082",
    },
    smiley0: {
      main: "#C7C7C7",
    },
    smiley5Backing: {
      main: "#C0EAAD",
    },
    smiley4Backing: {
      main: "#E5FFD9",
    },
    smiley3Backing: {
      main: "#FEFFC8",
    },
    smiley2Backing: {
      main: "#FFEABC",
    },
    smiley1Backing: {
      main: "#FFDDD6",
    },
    smiley0Backing: {
      main: "#F3F3F3",
    },
  },

  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#FFFFFF",
            backgroundColor: "#325A55",
          },
        },
      },
    },
  },
});
export default Theme;
