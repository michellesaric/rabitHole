import React from 'react';
import { Switch, Route } from "react-router-dom";
import BlueTeam from './BlueTeam';
import RedTeam from './RedTeam';
import GreenTeam from './GreenTeam';
import YellowTeam from './YellowTeam';

const Routing = () => {

    return (
        <Switch>
            <Route exact path = "/sWbPpouZ568Qc">
                <BlueTeam/>
            </Route>
            <Route exact path = "/pkLlwTzvuI91q">
                <RedTeam/>
            </Route>
            <Route exact path = "/12aSbVt6CmLox">
                <GreenTeam/>
            </Route>
            <Route exact path = "/49fgZa5B9nMqr">
                <YellowTeam/>
            </Route>
        </Switch>
    )
}

export default Routing;