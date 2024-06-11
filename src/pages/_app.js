import { Box, CssBaseline, Switch, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import { theme as myTheme } from "@/utils/theme";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  const [showChild, setShowChild] = useState(false);
  const theme = createTheme(myTheme(mode));
  const { push, pathname } = useRouter();

  const changeMode = () => {
    setMode((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const changeThemeMode = () => {
    const theme = localStorage.getItem("themeMode");
    changeMode();
    localStorage.setItem("themeMode", theme === "light" ? "dark" : "light");
  };

  useLayoutEffect(() => {
    const themeMode = localStorage.getItem("themeMode");
    if (themeMode === null) localStorage.setItem("themeMode", "light");
    else if (mode !== themeMode) changeMode();

    const token = localStorage.getItem("jwtToken");
    if (token === null && pathname !== "/") push("/");
    else if (token != null && pathname === "/") push("/me");
    else setShowChild(true);
  }, [pathname, push, mode]);

  console.log(mode);

  if (!showChild) return null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Switch onChange={changeThemeMode} checked={mode !== "light"}>
          {mode}
        </Switch>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
