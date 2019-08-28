import React from "react";
import { Route } from "react-router-dom";
import { home, Users } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={home} />
    <Route path="/users/" exact component={Users} />
    <Route path="/users/:name" component={Users} />
  </>
);
