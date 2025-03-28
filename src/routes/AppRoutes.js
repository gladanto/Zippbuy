import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/Home";
import Menu from "../pages/MenuPage/Menu";
import About from "../pages/AboutPage/About";
import Contact from "../pages/Contact/Contact";
import Productpage from "../pages/Productpage/Productpage";

function AppRoutes() {
  return React.createElement(
    Suspense,
    { fallback: React.createElement("div", null, "Loading...") },
    React.createElement(Routes, null,
      React.createElement(Route, { path: "/", element: React.createElement(HomePage) }),
      React.createElement(Route, { path: "/menu", element: React.createElement(Menu) }),
      React.createElement(Route, { path: "/about", element: React.createElement(About) }),
      React.createElement(Route, { path: "/contact", element: React.createElement(Contact) }),
      React.createElement(Route, { path: "/product", element: React.createElement(Productpage) })
    )
  );
}

export default AppRoutes;
