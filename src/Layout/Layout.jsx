import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "src/components";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
