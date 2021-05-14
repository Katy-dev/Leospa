import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { AboutPage } from "./pages/about/about";
import { FeaturePage } from "./pages/feature/feature";
import { ServicePage } from "./pages/service/service";
import { ContactPage } from "./pages/contact/contact";

export const useRoutes = () => {
        return (
            <Switch>
                <Route path="/" exact>
        <HomePage/>
        </Route>
        <Route path="/about" >
            <AboutPage/>
            </Route>
            <Route path="/feature" >
            <FeaturePage/>
            </Route>
            <Route path="/service">
            <ServicePage/>
            </Route>
            <Route path="/contact">
            <ContactPage/>
            </Route>
            <Redirect to="/" exact/>
        </Switch>
    )
};
