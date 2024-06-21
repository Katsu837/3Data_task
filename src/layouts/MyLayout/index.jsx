import React from "react";
import Header from "../../components/Header";

const MyLayout = ({ children, changeThemeMode, mode }) => (
  <>
    <Header changeThemeMode={changeThemeMode} mode={mode} />
    {children}
  </>
);

export default MyLayout;
