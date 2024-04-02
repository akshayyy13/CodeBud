import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiArrowLongLeft } from "react-icons/hi2";
import { resetPassword } from "../services/operations/authAPI";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
const UpdatePassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const { password, confirmPassword } = formData;

  const submitHandler = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, location));
    setFormData({
      password: "",
      confirmPassword: "",
    });
    navigate("/login");
  };
  return (
    <div className="">
      {loading ? (
        <div className=" min-h-screen flex items-center justify-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className=" text-richblack-25 flex flex-col max-w-lg mx-auto mt-[150px] p-8 ">
          <h1 className=" text-3xl font-inter text-left text-white">
            Choose New Password
          </h1>
          <p className={`  mt-3 text-[18px] text-richblack-300 `}>
            Almost done. Enter your new password and you're all set
          </p>
          <form onSubmit={submitHandler} className="">
            {/* createPassword and Confirm Password */}
            <div className=" mt-4 flex flex-col">
              <label className="w-full relative">
                <p className="text-richblack-25 mt-2">
                  New Password<span className="text-pink-200 text-lg">*</span>
                </p>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={changeHandler}
                  placeholder="Enter Password"
                  value={formData.password}
                  className=" w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-gray-500 mt-2 "
                />
                <span
                  className="absolute right-3 top-[54px] cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>

              <label className="w-full relative">
                <p className="text-richblack-25 mt-5">
                  Confirm Password
                  <span className="text-pink-200 text-lg">*</span>
                </p>
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={changeHandler}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  className=" w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] mt-2 border-b-[1px] border-gray-500"
                />
                <span
                  className="absolute right-3 top-[66px] cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
                <button
                  type="submit"
                  className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
                  style={{ boxShadow: "rgb(255, 235, 135) 1px 1px 0px 1px" }}
                >
                  Reset Password
                </button>
              </label>
            </div>
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

export default UpdatePassword;
