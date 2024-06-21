import React from "react";
import { Box, Switch, Tab, Tabs, Button } from "@mui/material";
import { useRouter } from "next/router";

function Header({ changeThemeMode, mode }) {
  const { push, pathname } = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) push("/me");
    else push("/table");
  };
  const logout = async () => {
    await localStorage.removeItem("jwtToken");
    setValue(0);
    push("/");
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
      <Box>
        <Switch
          onChange={changeThemeMode}
          checked={mode !== "light"}
          sx={{ m: 1 }}
        >
          {mode}
        </Switch>
        {pathname === "/" ? null : (
          <Button onClick={logout} sx={{ m: 1 }}>
            logout
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Header;
