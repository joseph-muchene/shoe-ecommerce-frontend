import React, { useEffect } from "react";
import { useState } from "react";
import { register, reset } from "../app/Feartures/Auth/AuthSlice";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
function Register() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone_number: "",
  });
  const { message, registered, isSuccess } = useSelector(({ Auth }) => Auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (registered && isSuccess) {
      navigate("/login");
    }
    dispatch(reset());
  }, [registered, isSuccess]);

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
  const { email, password, username, phone_number } = formData;

  const onRegister = (e) => {
    e.preventDefault();
    if (
      email == "" ||
      password == " " ||
      username == "" ||
      phone_number === ""
    ) {
      return toast.error("All fields are required");
    }
    const userData = {
      email,
      password,
      username,
      phone_number,
      isAdmin: false,
    };

    try {
      dispatch(register(userData));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <Banner title="Register" />
      <form
        onSubmit={onRegister}
        className="container d-flex justify-content-center flex-column col-md-6"
      >
        <h1 className="my-4">Create an account..</h1>

        <div className="mt-3">
          <label htmlFor="">username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            name="username"
            onChange={handleOnChange}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="">phone</label>
          <input
            type="text"
            className="form-control"
            value={phone_number}
            name="phone_number"
            onChange={handleOnChange}
          />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>

        <div className="d-flex justify-content-center my-2">
          <h5>
            Already have an account <Link to="/login">login</Link>
          </h5>
        </div>
      </form>
    </div>
  );
}

export default Register;
