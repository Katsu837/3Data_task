import React from "react";
import Header from "@/components/Header";

const Layout = ({ children, changeThemeMode, mode }) => {
  return (
    <>
      <Header changeThemeMode={changeThemeMode} mode={mode} />
      {children}
    </>
  );
};

export default Layout;
