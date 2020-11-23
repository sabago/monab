import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./scrollTop";
import { Home }  from "./components/home";
import { Store } from "./components/store";

export default class Routes extends React.Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop>
                {/* <Navigation /> */}
                <Switch>
                    <Route 
                    exact path="/" 
                    component={Home}/>
                    <Route exact path="/store" component={Store} />
                </Switch>
                </ScrollToTop>
             </Router> 
        );
    }
}