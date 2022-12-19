import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import landing from '../assets/landing.svg';

const Landing = () => {
  return (
    <>
      <div>
        {/* Navigation bar */}
        <nav className="navbar navbar-expand-sm navbar-light py-3">
          <div className="container ">
            <Link to="/" className="navbar-brand text-dark">
              <img width="100px" src={logo} alt="logo" />
            </Link>

            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-bs-toggle="collapse"
              // data-target="#navmenu"
              href="#navmenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/login/"
                    className="btn text-light btn-lg text-sm-start rounded-pill"
                    style={{
                      background: '#35CBBD',
                    }}
                  >
                    Login
                  </Link>
                  {/* <Link to="/signup_login/login/" className="nav-link text-dark">Log in</Link> */}
                </li>
                <li className="nav-item">
                  <Link
                    to="/register/"
                    className="btn text-light btn-lg text-sm-start rounded-pill"
                    style={{
                      background: '#35CBBD',
                    }}
                  >
                    Register
                  </Link>
                  {/* <Link to="/signup_login/register/" className="nav-link text-dark">Register</Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero section */}
        <section>
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
              <div>
                <h1 className="font" style={{ color: '#000000' }}>
                  Welcome to{' '}
                  <span style={{ color: '#35CBBD' }}>
                    Health monitoring system
                  </span>{' '}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="text-dark p-5 p-lg-0 ">
          <div className="container">
            <div className="d-sm-flex justify-content-center flex-row">
              <img
                style={{
                  width: '600px',
                  height: '500px',
                }}
                className="img-fluid pt-5"
                src={landing}
                alt="image"
              />

              <div className="d-flex justify-content-center flex-column p-5 m-5">
                {/* <h1 class="font">Welcome</h1>

              <div className="mt-5">
                <h2 className="mb-4">Get started by adding a habit</h2>
              </div> */}

                <div className="m-3 pt-5">
                  <h1>
                  <span style={{ color: '#35CBBD' }}>
                    Hassel free
                  </span>{' '} portal for all your patient's  <span style={{ color: '#35CBBD' }}>
                    medical records
                  </span>{' '}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;

// <Link  to="/signup_login/login/" >Sign in</Link>
//             <div><Link  to="/signup_login/register/" >Register</Link></div>
