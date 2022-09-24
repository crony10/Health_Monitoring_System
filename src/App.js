import logo from "./logo.svg";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React, { Fragment, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isAuthenticated, setIsauthenticated] = useState(false);
  return (
    <Fragment>
      <Router>
        <div className="container">
          {/* <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/login"
              element={!isAuthenticated?(
                <Login/>
              ):(
                <Redirect to="/dashboard"/>
              )
            }
              // render={props=><Login/> }
            />
            <Route
              path="/register"
              element={<Register />}
            />
          </Routes> */}
          <Switch>
            <Route
              exact
              path="/login"
              render={props =>
                !isAuthenticated ? (
                  <Login {...props}/>
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={props =>
                !isAuthenticated ? (
                  <Register {...props}/>
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/dashboard"
              render={props =>
                isAuthenticated ? (
                  <Dashboard {...props}/>
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
