
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/index';

import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logout } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

// import WorkerRoute from "./utils/WorkerRoute";
// import ManagerRoute from "./utils/ManagerRoute";

import Footer from "./components/Footer";
import Landing from "./components/Landing";
import RegisterWorker from "./components/RegisterWorker";
import RegisterManager from "./components/RegisterManager";
import LoginWorker from "./components/LoginWorker";
import LoginManager from "./components/LoginManager";
import HelloWorker from "./components/HelloWorker";
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


  render() {
    return (
      <div>
        <Provider store={store}>
          <Router
            basename="/WishyWashy"
          >
            <div className="App">
              <LoginNavbar />
              <Route exact path="/" component={Landing} />
              <div className="container">
                <Route exact path="WishyWashy/registerWorker" component={RegisterWorker} />
                <Route exact path="WishyWashy/registerManager" component={RegisterManager} />
                <Route exact path="WishyWashy/loginWorker" component={LoginWorker} />
                <Route exact path="WishyWashy/loginManager" component={LoginManager} />
                <Route exact path="WishyWashy/helloWorker" component={WorkerDash} />
                <Route path="WishyWashy/helloManager" component={HelloManager} />
                <Route exact path="WishyWashy/Manager/newJob" component={NewJobForm} />
                <Route exact path="WishyWashy/Manager/workerList/:id" component={WorkerList} />
              </div>
              <Footer />
            </div>
          </Router>
        </Provider>
      </div>
    )
  };


}
export default App;
