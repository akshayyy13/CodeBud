/* eslint-disable */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate, Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import { GiBackwardTime } from "react-icons/gi";
const VerifyEmail = () => {
  const { loading, signUpData } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signUpData) {
      navigate("/signup");
    }
  }, []);

  const { accountType, firstName, lastName, email, password, confirmPassword } =
    signUpData;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate,
      ),
    );
  };
  return (
    <div className="">
      {loading ? (
        <div className=" min-h-screen flex items-center justify-center">
          <div className="spinner">Loading</div>
        </div>
      ) : (
        <div className=" text-richblack-25 flex flex-col max-w-lg mx-auto mt-[150px] p-3">
          <h1 className=" text-3xl font-inter text-left text-white">
            Verify email
          </h1>
          <p className=" mt-3 text-[18px] text-richblack-300">
            A verification code has been sent to your mail. Enter the code below
          </p>
          <form action="" onSubmit={submitHandler} className=" mt-4">
            <div className=" w-full">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className=""></span>}
                inputStyle={{
                  width: "46px",
                  maxWidth: "40px",
                  margin: "auto",
                  height: "48px",
                  borderRadius: "20%",
                }}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="flex justify-evenly text-white w-[50px] bg-richblack-700 outline-yellow-200"
                  />
                )}
                containerStyle={{ width: "100%", height: "50px" }}
              />
            </div>
            <button
              type="submit"
              style={{ boxShadow: "rgb(255, 235, 135) 1px 1px 0px 1px" }}
              className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
            >
              Verify And Register
            </button>
          </form>
          <div className=" flex mt-5 justify-between">
            <div className=" text-white ">
              <Link to="/login" className="flex gap-2 items-center">
                <HiArrowLongLeft className=" scale-x-125" />
                <p>Back to Login</p>
              </Link>
            </div>
            <button
              className=" flex gap-3 items-center text-blue-100 "
              onClick={() => dispatch(sendOtp(signUpData.email, navigate))}
            >
              <GiBackwardTime className=" scale-[175%]" />
              Resend It
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
