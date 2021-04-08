import React from 'react';
import { Switch, Route } from "react-router-dom";
import BlueTeam from './BlueTeam';
import RedTeam from './RedTeam';
import GreenTeam from './GreenTeam';
import YellowTeam from './YellowTeam';

const Routing = () => {

    return (
        <Switch>
            <Route exact path = "/plavi-tim">
                <BlueTeam/>
            </Route>
            <Route exact path = "/crveni-tim">
                <RedTeam/>
            </Route>
            <Route exact path = "/zeleni-tim">
                <GreenTeam/>
            </Route>
            <Route exact path = "/zuti-tim">
                <YellowTeam/>
            </Route>
        </Switch>
    )
}

export default Routing;