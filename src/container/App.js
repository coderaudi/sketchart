import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getBasicData } from "../actions/index";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import ReactGA from "react-ga";  // google analytics 

import Landing from "./landing";
import MainApp from "../routes/index";


ReactGA.initialize("UA-160000456-1");


class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.history.listen(location => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });

    ReactGA.pageview(window.location.pathname);

    console.log("App loaded");
    this.props.getBasicData();
    console.log("App loaded");
  }

  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Landing} />
          <Route path='/app' component={MainApp} />
        </Switch>


      </div>
    );
  }
}


// map state to props
const mapStateToProps = ({ gallary }) => {
  return {
    gallary
    // gallary : gallary
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      getBasicData
    }
  )(App)
);
