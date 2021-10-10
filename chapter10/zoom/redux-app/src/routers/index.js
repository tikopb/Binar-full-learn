import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const Home = lazy(() => import("../views/Home.js"));
const Profile = lazy(() => import("../views/Profile.js"));

const Routing = () => {

    return (
        <Suspense fallback={"Loading..."}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </Router>
        </Suspense>
    );
};

export default Routing;