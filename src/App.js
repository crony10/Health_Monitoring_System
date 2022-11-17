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
import Temp from './components/temp';
import AddPatients from './components/AddPatients';
import ShowPatients from './components/ShowPatients';
import ShowPatientDetails from './components/ShowPatientDetails';
import ShowHospitalProfile from './components/ShowHospitalProfile';
// toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  // const onUserIdChange = (string) => {
  //   setUserId(string);
  // };

  const isVerify = () => {
    const items = JSON.parse(localStorage.getItem('token'));
    // const incomingUserId = JSON.parse(localStorage.getItem('userId'));
    // const userId2 = JSON.parse(localStorage.getItem('userId'));
    // setUserId(JSON.parse(localStorage.getItem('userId')));
    // console.log(userId2);
    if (items) {
      setAuth(true);
    } else {
      setAuth(false);
    }

    // if(userId==''){
    //   onUserIdChange(incomingUserId);
    // }
  };

  useEffect(() => {
    isVerify();

  }, []);

  return (
    <Fragment>
      <div
        style={{
          background: '#dff6f4',
        }}
      >
        <Router>
        
            <Switch>
              <Route
                exact
                path="/"
                render={(props) =>
                  !isAuthenticated ? (
                    <Landing {...props} />
                  ) : (
                    <Redirect to="/signup_login/dashboard" setAuth={setAuth} />
                  )
                }
              />
              <Route
                exact
                path="/temp"
                render={(props) =>
                  !isAuthenticated ? (
                    <Temp {...props} />
                  ) : (
                    <Redirect to="/signup_login/dashboard" setAuth={setAuth}  />
                  )
                }
              />
              <Route
                exact
                path="/signup_login/login/"
                render={(props) =>
                  !isAuthenticated ? (
                    <Login {...props} setAuth={setAuth} userId={userId} />
                  ) : (
                    <Redirect to="/signup_login/dashboard" setAuth={setAuth} />
                  )
                }
              />
              <Route
                exact
                path="/signup_login/register/"
                render={(props) =>
                  !isAuthenticated ? (
                    <Register {...props} setAuth={setAuth} />
                  ) : (
                    <Redirect to="/signup_login/dashboard" setAuth={setAuth} />
                  )
                }
              />
              <Route
                exact
                path="/signup_login/dashboard/"
                render={(props) =>
                  isAuthenticated ? (
                    <Dashboard {...props} setAuth={setAuth} />
                  ) : (
                    <Redirect to="/signup_login/login" />
                  )
                }
              />
              <Route
                exact
                path="/signup_login/dashboard/ShowHospitalProfile"
                render={(props) =>
                  isAuthenticated ? (
                    <ShowHospitalProfile {...props} setAuth={setAuth} />
                  ) : (
                    <Redirect to="/signup_login/login" />
                  )
                }
              />
              <Route
                exact
                path="/signup_login/dashboard/AddPatients"
                render={(props) =>
                  isAuthenticated ? (
                    <AddPatients {...props} setAuth={setAuth} />
                  ) : (
                    <Redirect to="/signup_login/login" />
                  )
                }
              />
              <Route
                exact
                path="/signup_login/dashboard/ShowPatients/"
                render={(props) =>
                  isAuthenticated ? (
                    <ShowPatients {...props} setAuth={setAuth} />
                  ) : (
                    <Redirect to="/signup_login/login" />
                  )
                }
              />

              <Route
                exact
                path="/signup_login/dashboard/ShowPatientDetails/"
                render={(props) =>
                  isAuthenticated ? (
                    <ShowPatientDetails {...props} setAuth={setAuth} />
                  ) : (
                    <Redirect to="/signup_login/login" />
                  )
                }
              />
            </Switch>
          
        </Router>
        <ToastContainer />
      </div>
    </Fragment>
  );
}

export default App;
// temp change in deploy1
// temp change in deployHeroku
