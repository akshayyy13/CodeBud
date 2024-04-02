import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {HiArrowLongLeft} from "react-icons/hi2"
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };
  return (
    <div className=" flex justify-center">
      {loading ? (
        <div className=" min-h-screen flex items-center justify-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className=" text-richblack-25 flex flex-col max-w-lg mx-auto mt-[150px] p-8">
          <h1 className=" text-3xl font-inter text-left text-white">
            {!emailSent ? "Reset Your Password" : "Check Your Email"}
          </h1>
          <p
            className={`  mt-3 text-[18px] text-richblack-300 ${
              emailSent ? "w-[60%]" : ""
            }`}
          >
            {!emailSent
              ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handleOnSubmit} className=" mt-4 flex flex-col">
            {!emailSent && (
              <label>
                <p className=" text-richblack-25 mt-2">
                  Email Address <span className="text-pink-200 text-lg">*</span>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className=" bg-richblack-800 p-3 rounded-md text-white w-full mt-3
                   border-b-[1px] border-gray-500"
                />
              </label>
            )}
            <button
              type="submit"
              className={` text-center text-[13px] px-6 py-3 rounded-md font-bold bg-yellow-50 text-black shadow-yellow-300
                  hover:scale-95 transition-all duration-200 mt-8`}
              style={{
                boxShadow: "rgb(255, 235, 135) 1px 1px 0px 1px",
              }}
            >
              {!emailSent ? "Reset Password" : "Resend Link"}
            </button>
          </form>
          <div className=" text-white mt-5 ">
            <Link to="/login" className="flex gap-2 items-center">
              <HiArrowLongLeft className=" scale-x-125" />
              <p>Back to Login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
