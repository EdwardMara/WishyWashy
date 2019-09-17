
import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logout } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import WorkerRoute from "./utils/WorkerRoute";
import ManagerRoute from "./utils/ManagerRoute";

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Footer from "./components/Footer";
import Landing from "./components/Landing";
import RegisterWorker from "./components/RegisterWorker";
import RegisterManager from "./components/RegisterManager";
import LoginWorker from "./components/LoginWorker";
import LoginManager from "./components/LoginManager";
import HelloManager from "./components/HelloManager";
import LoginNavbar from "./components/LoginNavbar"
import WorkerDash from "./components/WorkerDash"
import NewJobForm from "./components/NewJobForm"
import WorkerList from "./components/workersList"


class App extends Component {


  state = {
    role: "employer"
  }
  // control the role and render diferent page base on the role
  // call to the backend  return from the db all the jobs
  // update state jobs with the data comming from the db then you will render result
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.setState({ auth: nextProps.auth });
    }
  }

  render() {
    return (
      <div className = 'theSite'>
        <Provider store={store}>
          <Router
          basename={process.env.PUBLIC_URL}
          >
            <div className="App site">
              <LoginNavbar />
              <Route exact path="/" component={Landing} />
              <div className="container site-content">
                <Route exact path="/registerWorker" component={RegisterWorker} />
                <Route exact path="/registerManager" component={RegisterManager} />
                <Route exact path="/loginWorker" component={LoginWorker} />
                <Route exact path="/loginManager" component={LoginManager} />
                <Route exact path="/helloWorker" component={WorkerDash} />
                <Route exact path="/helloManager" component={HelloManager} />
                <Route exact path="/Manager/newJob" component={NewJobForm} />
                <Route exact path="/Manager/workerList/:id" component={WorkerList} />
              </div>
              <Footer />
            </div>
          </Router>
        </Provider>
      </div>
    )
  };


}

HelloManager.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);
