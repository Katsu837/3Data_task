import { Amiko } from "next/font/google";

const amiko = Amiko({
  weight: "400",
  subsets: ["latin"],
});
export const theme = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#44A815",
          },
          secondary: {
            main: "#f50057",
          },
          background: {
            default: "#F5F5F7",
            paper: "#F5F5F7",
          },
        }
      : {
          primary: {
            main: "#44A815",
            contrastText: "#2B2E33",
          },
          secondary: {
            main: "#f50057",
          },
          background: {
            default: "#2B2E33",
            paper: "#2B2E33",
          },
        }),
  },
  shape: {
    borderRadius: 15,
  },
  typography: {
    // fontFamily: amiko,
    fontSize: 14,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        // fullWidth: true,
        sx: {
          margin: "4px 0",
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "label" },
          style: {
            margin: "1px",
            padding: "0 3px",
          },
        },
        {
          props: { variant: "error" },
          style: {
            position: "relative",
            background: "#F38271",
            width: "110px",
            bottom: "10px",
            borderRadius: "5px",
            fontSize: 11,
            padding: "1px 5px",
            margin: "0 10px",
            color: "white",
            zIndex: "1",
          },
        },
      ],
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableRipple: true,
        disableElevation: true,
        sx: {
          "&:hover": {
            background: "#69B943",
          },
        },
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained",
        disableRipple: true,
        disableElevation: true,
        sx: {
          "&:hover": {
            background: "#69B943",
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 3,
        sx: {
          padding: 2,
        },
      },
    },
    MuiStack: {
      defaultProps: {
        justifyContent: "center",
      },
      variants: [
        {
          props: { variant: "center" },
          style: {
            gap: "5px",
            minWidth: "300px",
          },
        },
        {
          props: { variant: "input" },
          style: {
            justifyContent: "start",
          },
        },
        {
          props: { variant: "fullPage" },
          style: {
            alignItems: "center",
            height: "100vh",
          },
        },
        {
          props: { variant: "centeringStack" },
          style: {
            alignItems: "center",
          },
        },
      ],
    },
    MuiSwitch: {
      defaultProps: {
        position: "absolute",
        top: "100px",
        left: "10px",
      },
    },
  },
});
