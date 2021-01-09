import React, {createContext, FC, useState} from "react";
import { Route, Switch, useParams } from "react-router-dom";
import Index from "../Component/Home page";
import SingeMovie from "../Component/Movie page/Single movie";
import PrivateRoute from "./private-route";

export const LoadingContext = createContext(true);

export const RenderRoutes = (config) =>
{
    const [loading, setLoading] = useState(true);

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <LoadingContext.Provider value={[loading, setLoading]}>
        <Switch>
            <PrivateRoute path="/movies" exact component={Index} />
            <Route path="/movies:id" component={SingeMovie} />
        </Switch>
        </LoadingContext.Provider>
    );
};

export default RenderRoutes;
