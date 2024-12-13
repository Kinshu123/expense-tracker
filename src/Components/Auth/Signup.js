import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom"
import { useNavigate, Link } from "react-router-dom";

import styled from 'styled-components'
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/api/sign",
        {
          username,
          email,
          phn,
          password,
          cpassword,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res && res.data) {
        toast.success(res.data.message);
        setUsername("");
        setEmail("");
        setPhoneNo("");
        setPassword("");
        setConfirmPassword("");
        navigate("/login");
      } else {
        toast.error("Unexpected response from server");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
        console.log(error.response.data);
      } else {
        toast.error("An error occurred while signing up");
      }
    }
  };

  return (
    <SignupStyled>

    
    <div id="signup" className="signup container">
      <div className="form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone No."
            value={phn}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <div className="login-link">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
      </div>
    </div>
    </SignupStyled>
  );
};

const SignupStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .form {
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

  .form h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  .form form {
    display: flex;
    flex-direction: column;
  }

  .form form input {
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .form form button {
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    background-color: #222260;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .form form button:hover {
    background-color: #1a183b;
  }

  .login-link {
    text-align: center;
    margin-top: 1rem;
  }

  .login-link a {
    color: #222260;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .login-link a:hover {
    color: #1a183b;
  }
`;

export default Signup;
