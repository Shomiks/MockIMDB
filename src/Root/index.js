import React from "react";
import { Redirect } from "react-router-dom";
import renderRoutes from "./renderRoutes";
import SingleMovie from "../Component/Movie page/Single movie";
import Index from "../Component/Home page";
export const RedirectToDefault = () => <Redirect to={"/movies"} />;
export const RedirectToLogin = () => <Redirect to={"/login"} />;

const configAuthorised = [
  {
    component: SingleMovie,
    path: "/movies/:id",
  },
  {
    component: Index,
    path: "/movies",
  },
  {
    component: RedirectToDefault,
    path: "*",
  },
];

const configUnauthorized = [
  {
    component: RedirectToDefault,
    path: "*",
  },
];

export const Root = () => {
  return renderRoutes(configAuthorised);
};
