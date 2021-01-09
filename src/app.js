import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./lib/private-route";
import "./app.css";
import Header from './Component/Header';
import HomePage from './Component/Home page';
import SingeMovie from './Component/Movie page/Single movie';

const App = () => {

    return (
    <div>
     <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" component={SingeMovie} />
        </Switch>
    </div>
  );
};

export default App;
