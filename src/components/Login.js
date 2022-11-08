import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    UserName: '',
    Password: '',
  });

  const { UserName, Password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // console.log(e);
  };
  // const setLoginAuth = (auth)=>{
  //   console.log(auth);
  //   setAuth.setAuth(auth);
  // }
  const onSubmitForm = async (e) => {
    e.preventDefault();

    // backend
    try {
      const body = { UserName, Password };

      // console.log(body.UserName);
      // console.log(body.Password);

      const response = await fetch('https://hmsapis1.azurewebsites.net/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: body.UserName,
          password: body.Password,
          grant_type: 'password',
        }),
      });

      const parseRes = await response.json(); // token chhe aa var ma
      console.log(parseRes);

      if (parseRes.access_token) {
        // localStorage.setItem("token", parseRes.jwtToken);
        // setLoginAuth(true);
        // setAuth(true);
        console.log(parseRes);
        // toast.success("Logged in Successfully");
        toast.success('Logged in Successfully', {
          position: toast.POSITION.TOP_CENTER,
        });

        localStorage.setItem('token', JSON.stringify('this is token'));
        window.location.reload(false);
      } else {
        // setLoginAuth(false);
        // setAuth(false);
        // toast.error(parseRes);
        toast.error('User does not exist!', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-sm navbar-light py-3">
        <div className="container ">
          <Link to="/" className="navbar-brand text-dark">
            <img width="100px" src={logo} alt="logo" />
          </Link>

          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="collapse"
            href="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* <Link to="/" className="nav-link text-dark">
                  Home page
                </Link> */}

                <Link
                  to="/"
                  className="btn text-light btn-lg text-sm-start rounded-pill"
                  style={{
                    background: '#35CBBD',
                  }}
                >
                  Home page
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link
                  to="/signup_login/register/"
                  className="nav-link text-dark"
                >
                  Register
                </Link> */}

                <Link
                  to="/signup_login/register/"
                  className="btn text-light btn-lg text-sm-start rounded-pill"
                  style={{
                    background: '#35CBBD',
                  }}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 className="mt-5 text-center">Login</h1>
      <form onSubmit={onSubmitForm} class="was-validated">
        <input
          type="text"
          name="UserName"
          value={UserName}
          placeholder="User Name"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
          required
        />

        <input
          type="text"
          name="Password"
          value={Password}
          placeholder="Password"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
          required
        />
        <button className="btn btn-success btn-block">Submit</button>
        
      </form>
      {/* <button onClick={() => setAuth(true)}>Authenticate</button> */}

      {/* <section>
        <div className="container py-2">
          <div className="d-sm-flex justify-content-center">
            <div
              style={{
                background: '#F0EFFF',
                width:'80%',
                height:'400px'
              }}
            >
              <h1 className="mt-5 text-center">Login</h1>
              <form onSubmit={onSubmitForm} class="was-validated">
                <input
                  type="text"
                  name="UserName"
                  value={UserName}
                  placeholder="User Name"
                  onChange={(e) => onChange(e)}
                  className="form-control my-3"
                  required
                />
                <input
                  type="text"
                  name="Password"
                  value={Password}
                  placeholder="Password"
                  onChange={(e) => onChange(e)}
                  className="form-control my-3"
                  required
                />
                
                
                <div ><button className="btn btn-success btn-block">Submit</button></div>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
};

export default Login;
// temp comment to deploy
