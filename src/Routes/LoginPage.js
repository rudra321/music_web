import React, { useState } from "react";
import "./LoginPage.css";
import i_f from "../Assets/if.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    setPhoneNumber(input);
  };

  const isSignInButtonEnabled = phoneNumber.length === 10;

  const handleClick = () => {
    if (isSignInButtonEnabled) {
      navigate("/OTPVerification", { state: { mobile: phoneNumber } });
    }
  };

  return (
    <div className="login-page-container">
      <div className="boxMain">
        <div className="box1">
          <p>Sign In</p>
        </div>
        <div className="box2">
          <p>
            Please enter your mobile number to login. We will send an OTP to
            verify your number.
          </p>
        </div>
        <div className="box3">
          <div className="flag-icon">
            <img src={i_f} alt="Indian Flag" width="30" height="20" />
          </div>
          <div className="std-code">+91</div>
          <div className="phone-input">
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>
        <div>
          <button className="btn" onClick={handleClick}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
