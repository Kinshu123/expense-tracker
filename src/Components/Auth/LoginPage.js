import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/api/login",
        { username, password },
        { withCredentials: true }
      );
      if (res && res.data) {
        toast.success(res.data.message);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUsername("");
        setPassword("");
        navigate("/dashboard");
      } else {
        toast.error("Unexpected response from server");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while logging in");
      }
    }
  };

  return (
    <LoginPageStyled>
      <div id="login" className="login container">
        <div className="form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login </button>
          </form>
          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  /* LoginPage.css */

  .login.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login.container .form {
    width: 400px;
    background-color: #fcf6f9;
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .login.container .form h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  .login.container .form form {
    display: flex;
    flex-direction: column;
  }

  .login.container .form form input {
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .login.container .form form button {
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    background-color: #222260;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .login.container .form form button:hover {
    background-color: #1a183b;
  }

  .signup-link {
    text-align: center;
    margin-top: 1rem;
  }

  .signup-link a {
    color: #222260;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .signup-link a:hover {
    color: #1a183b;
  }
`;

export default LoginPage;