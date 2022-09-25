import React, { Fragment, useState } from "react";
// import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
  });

  const { userName, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(e);
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();

    // backend
    // try {
    //   const body = { email, password };
    //   const response = await fetch(
    //     "http://localhost:5000/authentication/login",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //       body: JSON.stringify(body),
    //     }
    //   );

    //   const parseRes = await response.json();

    //   if (parseRes.jwtToken) {
    //     localStorage.setItem("token", parseRes.jwtToken);
    //     setAuth(true);
    //     toast.success("Logged in Successfully");
    //   } else {
    //     setAuth(false);
    //     toast.error(parseRes);
    //   }
    // } catch (err) {
    //   console.error(err.message);
    // }
  };

  return (
    <Fragment>
      <h1 className="mt-5">Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="userName"
          value={userName}
          placeholder="User Name"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />

        <input
          type="text"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <button onClick={() => setAuth(true)}>Authenticate</button>
    </Fragment>
  );
};

export default Login;
