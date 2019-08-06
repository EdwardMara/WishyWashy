import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logout } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import WorkerRoute from "./utils/WorkerRoute";
import ManagerRoute from "./utils/ManagerRoute";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import RegisterWorker from "./components/RegisterWorker";
import RegisterManager from "./components/RegisterManager";
import LoginWorker from "./components/LoginWorker";
import LoginManager from "./components/LoginManager";
import HelloWorker from "./components/HelloWorker";
import HelloManager from "./components/HelloManager";

import "./App.css";

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logout());

        // Redirect to login
        window.location.href = "/login";
    }
}

class App extends Component {
    render() {
        return (
            <Provider store = { store }>
                <Router>
                    <div className = "App">
                        <Navbar />
                        <Route exact path = "/" component = { Landing } />
                        <div className = "container">
                            <Route exact path = "/registerWorker" component = { RegisterWorker } />
                            <Route exact path = "/registerManager" component = { RegisterManager } />
                            <Route exact path = "/loginWorker" component = { LoginWorker } />
                            <Route exact path = "/loginManager" component = { LoginManager } />
                            <Route exact path = "/helloWorker" component = { HelloWorker } />
                            <Route exact path = "/helloManager" component = { HelloManager } />
                        </div>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
