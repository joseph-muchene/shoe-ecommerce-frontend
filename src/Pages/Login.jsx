import React, { useEffect, useState } from "react";
import { login } from "../app/Feartures/Auth/AuthSlice";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { reset } from "../app/Feartures/Auth/AuthSlice";
import { toast } from "react-toastify";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  const { isSuccess, isError, message, user } = useSelector(({ Auth }) => Auth);

  useEffect(() => {
    // check the user role
    if (user?.isAdmin) {
      return navigate("/dashboard");
    } else if (user && isSuccess && !isError) {
      navigate("/cart");
    }

    // return () => {
    //   dispatch(reset());
    // };
  }, [user]);

  useEffect(() => {
    if (message && !isSuccess) {
      return toast.error(message);
    }
  }, [message, isSuccess]);

  const handleOnChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { email, password, username } = formData;

  const onLogin = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    try {
      dispatch(login(userData));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <Banner title="login" />
      <form
        onSubmit={onLogin}
        className="container d-flex justify-content-center flex-column"
      >
        <h1 className="my-4">Login to your account..</h1>
        {message !== "" && (
          <div className=" d-flex justify-content-center">
            <p className="alert alert-danger"> {message}</p>
          </div>
        )}
        <div className="mt-3">
          <label htmlFor="">email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            name="email"
            onChange={handleOnChange}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="">password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            name="password"
            onChange={handleOnChange}
          />
        </div>
        <div className="mt-3">
          <button className="btn btn-primary">Login</button>
        </div>

        <div className="d-flex justify-content-center my-2">
          <h5>
            Dont have an account{" "}
            <Link to="/register">click here to register</Link>
          </h5>
        </div>
      </form>
    </div>
  );
}

export default Login;
