import React from "react";
import { Redirect } from "react-router-dom";
import renderRoutes from "../renderRoutes";
import Boards from "../Boards";
import SingleMovie from '../ai/singleMovie';
import Movies from '../ai/movies';
export const RedirectToDefault = () => <Redirect to={"/movies"} />;
export const RedirectToLogin = () => <Redirect to={"/login"} />;

const configAuthorised = [
    {
        component: SingleMovie,
        path: "/movies/:id"
    },
    {
        component: Movies,
        path: "/movies"
    },
    {
    component: Boards,
    path: "/boards",
  },
  {
    component: RedirectToDefault,
    path: "*",
  },
];

const configUnauthorized = [

    {
        component: RedirectToDefault,
        path: "*"
    }
];

export const Root = () => {

  return renderRoutes(configAuthorised);
};
