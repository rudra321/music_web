import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import "./OTPVerification.css";

const OTPVerification = () => {
  const location = useLocation();
  const mobile = location.state?.mobile;

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (e, index) => {
    const input = e.target;
    const value = input.value;

    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    } else if (value.length === 0 && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div>
      <div className="login-page-container">
        <div className="boxMain">
          <div className="box1">
            <p>OTP Verification</p>
          </div>
          <div className="box2">
            {mobile ? (
              <p>We have sent an OTP to mobile number +91 {mobile}. Please enter the code received to verify.</p>
            ) : (
              <p>Mobile number not provided.</p>
            )}
          </div>
          <div className="box_otp">
            {inputRefs.map((inputRef, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={inputRef}
                onChange={(e) => handleInputChange(e, index)}
              />
            ))}
          </div>
          <div className="btn2">
            <p>Verify</p>
          </div>
          <div className="notify_text" >
            <p>Resend OTP</p>
          </div>

          <div className="notify_text_2">
            <p>Use another number</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
