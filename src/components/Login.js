import React, { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";


const Login = ({ setAuth }) => {

  const notify = () => toast("Wow so easy !");
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
    // this is basic toast
    // toast("Wow so easy !");
    
    // this is modified toast, more on here:- https://fkhadra.github.io/react-toastify/positioning-toast
    // toast.success("Success Notification !", {
    //   position: toast.POSITION.TOP_CENTER
    // });


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
  // function toastFun(){
  //   toast.success("Logged in Successfully");
  // }

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

      {/* <button onClick={notify}>Notify !</button>
      <ToastContainer /> */}
    </Fragment>
  );
};

export default Login;
