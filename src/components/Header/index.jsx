import React from "react";
import { Box, Switch, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";

function Header({ changeThemeMode, mode }) {
  const { push, pathname } = useRouter();
  const [value, setValue] = React.useState(() => {
    if (pathname === "/me") return 0;
    else return 1;
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) push("/me");
    else push("/table");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {pathname === "/" ? (
        <div />
      ) : (
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Me Page" />
          <Tab label="Table Page" />
        </Tabs>
      )}
      <Switch onChange={changeThemeMode} checked={mode !== "light"}>
        {mode}
      </Switch>
    </Box>
  );
}

export default Header;
