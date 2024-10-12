import React from "react";
import { Route } from "react-router-dom";
import { all_routes } from "./all_routes";

import Signin from "../InitialPage/signin.jsx";
import Home from "../modules/home/home.js";
import About from "../modules/about/about.jsx";
import Profile from "../modules/profile/profile.jsx";
import Contact from "../modules/contact/contact.js";
import FormComponent from "../core/components/FormComponent.js";
import Users from "../modules/users/users.js";
import UserForm from "../modules/users/userForm.js";

const routes = all_routes;

export const publicRoutes = [
  {
    id: 1,
    path: routes.dashboard,
    name: "home",
    element: <Home />,
    route: Route,
  },
  {
    id: 2,
    path: routes.signin,
    name: "signin",
    element: <Signin />,
    route: Route,
  },
  {
    id: 3,
    path: routes.about,
    name: "about",
    element: <About />,
    route: Route,
  },
  {
    id: 4,
    path: routes.contact,
    name: "contact",
    element: <Contact />,
    route: Route,
  },
];

export const authRoute = [
  {
    id: 1,
    path: routes.profile,
    name: "profile",
    element: <Profile />,
    route: Route,
  },
  {
    id: 2,
    path: routes.users,
    name: "users",
    element: <Users />,
    route: Route,
  },
  {
    id: 3,
    path: routes.user_form,
    name: "user_form",
    element: <UserForm />,
    route: Route,
  },
];
