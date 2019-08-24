import React from "react";
import { Route } from "react-router-dom";
import { home, users, busca } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={home} />
    <Route path="/users/" component={users} />
    <Route path="/busca/" component={busca} />
    <Route path="/users/:name" component={users} />
  </>
);
