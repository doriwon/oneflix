import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
    <Router>
        <Switch> {/* 한 번에 오직 하나의 Route만 Render */}
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} /> {/* 중복되는 것 모두 노출이 되기 떄문에 exact를 넣어 그것만 노출되도록 */}
            <Route path="/tv/hot" render={() => <h1>Hot</h1>} />  {/* 하나의 Route에 두 개의 Router를 Render할 때 사용 */}
            <Route path="/search" component={Search} />
            <Redirect from="*" to="/" />  {/* 일치하는 Route가 없으면 / (Home)로 이동 */}
        </Switch>
    </Router>
);