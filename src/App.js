// import logo from "./logo.svg";
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import Landing from './components/Landing';

import React, { Fragment, useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Redirect,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

// toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const isVerify = () => {
    const items = JSON.parse(localStorage.getItem('token'));

    if (items) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  useEffect(() => {
    isVerify();
  }, []);

  return (
    <Fragment>
      {/* <div style={{
            background: "#41D69B",
          }}> */}
      <Router>
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) =>
                !isAuthenticated ? (
                  <Landing {...props}/>
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/login"
              render={(props) =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={(props) =>
                !isAuthenticated ? (
                  <Register />
                ) : (
                  <Redirect to="/dashboard" setAuth={setAuth} />
                )
              }
            />
            <Route
              exact
              path="/dashboard"
              render={(props) =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
      <ToastContainer />
      {/* </div> */}
    </Fragment>
  );
}

export default App;
// temp change in deploy1
