import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  console.log("here");
  const accountLoggedIn = useSelector((state) => state.account.loggedIn);
  const isAuth = accountLoggedIn.accountId !== 0;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
