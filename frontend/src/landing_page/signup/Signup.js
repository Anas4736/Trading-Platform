import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './index.css';

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
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
      username: "",
    });
  };
  return (
    <div className="container pt-2 my-5">
      <h1 className="fs-2 opacity-75 fw-bold mt-5 text-center">
        Open a free demat & trading account online
      </h1>
      <p className="fs-5 text-center text-muted">
        Start investing brokerage free and join a community of 1.5+ crore
        investors and traders
      </p>
      <div className="row py-5 my-5">
        <div className="col-1"></div>
        <div className="col-5">
          <img
            src="media/images/signup.png"
            alt="signup random"
            style={{ height: "90%", width: "90%" }}
          />
        </div>
        <div className="col-4">
          {/* <h1 className="mt-2 fs-3">Signup now</h1>
          <p className="mb-3 fs-5 text-muted">
            Or track your existing application
          </p>
          <div class="input-group">
            <span class="input-group-text">🇮🇳&nbsp;+91</span>
            <input
              placeholder="Enter your mobile number"
              type="text"
              class="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <Link
            to=""
            className="btn btn-primary mt-4 mx-auto"
            style={{
              height: "15%",
              width: "60%",
              fontWeight: "600",
              fontSize: "1.2rem",
            }}
          >
            Get OTP
          </Link>
          <p className="mt-5" style={{ fontSize: "0.85rem" }}>
            By proceeding, you agree to the Zerodha <a href="/fg">terms</a> &{" "}
            <a href="/fgjn">privacy policy</a>
          </p> */}
          <div className="form_container">
                <h2>Signup Account</h2>
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
                    <label htmlFor="email">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      placeholder="Enter your username"
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
                    Already have an account? <Link to={"/login"}>Login</Link>
                  </span>
                </form>
                <ToastContainer />
              </div>
        </div>
        <div className="col-1 my-5"></div>
      </div>
    </div>
  );
}

export default Signup;
