import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [showOptions, setShowOptions] = useState(false); // New state
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        window.location.href = "http://localhost:3001"; // Redirect to dashboard automatically
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  const handleDashboard = () => {
    window.location.href = "http://localhost:3001";
  };

  const handleLogout = () => {
    navigate("/"); // or "/" if your Zerodha frontend is at root
  };

  return (
    <div className="my-5n ms-5">
      <div className="form_container offset-4 my-5">
        <h2>Login Account</h2>
        {!showOptions ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit">Submit</button>
            <span>
              Already have an account? <Link to={"/Signup"}>Signup</Link>
            </span>
          </form>
        ) : (
          <div>
            <button onClick={handleDashboard}>Go to Dashboard</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
