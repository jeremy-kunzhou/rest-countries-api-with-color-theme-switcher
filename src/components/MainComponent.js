import React, { } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../scss/App.scss";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import CountryDetail from "./CountryDetailComponent";
import { BASE_URL } from './basic';

let Main = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <React.Fragment>
      <Header auth={auth} />
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={300}>
          <Switch>
            <Route path={`${BASE_URL}/home`} component={Home} />
            <Route path={`${BASE_URL}/country/:country_id`} component={CountryDetail} />
            <Redirect to={`${BASE_URL}/home`}  />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
};

export default withRouter(Main);
