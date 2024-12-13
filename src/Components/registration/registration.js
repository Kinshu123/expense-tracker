import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const Registration = () => {
    React.useEffect(() => {
    }, []);
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhoneNo] = useState("");
  const [eventname, setEventname] = useState("");
  const [fee, setFee] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/signup",
        {
          name,
          email,
          phn,
          eventname,
          date,
          fee,

        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res && res.data) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error("Unexpected response from server");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while signing up");
      }
    }
  };

  return (
    <div id="registration" className="registration container">
        <Navigation /> 
      <div className="form">
        <h2>Registration</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone No."
            value={phn}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Event Name"
            value={eventname}
            onChange={(e) => setEventname(e.target.value)}
          />
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Registration Fee"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          />
          <button type="submit" onClick={()=>navigate("/Payment")}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;