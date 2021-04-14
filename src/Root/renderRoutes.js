import React, {createContext, useState} from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../Component/Home page";
import SingeMovie from "../Component/Movie page/Single movie";
import PrivateRoute from "./private-route";

export const LoadingContext = createContext(true);

export const RenderRoutes = (config) =>
{
    const [loading, setLoading] = useState(true);

    return (
        <LoadingContext.Provider value={[loading, setLoading]}>
        <Switch>
            <PrivateRoute path="/movies" exact component={Index} />
            <Route path="/movies:id" component={SingeMovie} />
        </Switch>
        </LoadingContext.Provider>
    );
};

export default RenderRoutes;
