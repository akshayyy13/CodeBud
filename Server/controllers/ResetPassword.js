const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto")

// resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        success: false,
        message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
      });
    }
    const token = crypto.randomBytes(20).toString("hex");
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 1000 * 60 * 5,
      },
      { new: true }
    );
    console.log("DETAILS", updatedDetails);
    const url = `http://localhost:3000/update-password/${token}`;
    await mailSender(
      email,
      "Password Reset Link",
      `Your Password reset Link is <a href=${url}>here</a>`
    );

    return res.json({
      success: true,
      message: "Email sent successfully, please check mail to reset",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while reset pwd mail",
    });
  }
};

// reset password
exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;
    if (password !== confirmPassword) {
      return res.status(401).json({
        success: false,
        message: "Password is not matching",
      });
    }
    const userDetails = await User.findOne({ token: token });
    if (!userDetails) {
      return res.json({
        success: false,
        message: "Token is invalid",
      });
    }
    if (userDetails.resetPasswordExpires < Date.now()) {
      return res.status(401).json({
        success: false,
        message: "Token expired",
      });
    }
    const hasehdPassword = await bcrypt.hash(password, 10);

    await User.findOneAndUpdate(
      { token: token },
      { password: hasehdPassword },
      { new: true }
    );
    return res.status(200).json({
        success:true,
        message:"Password reset successfull"
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Password reset unsuccessfull",
      error:error.message
    });}
};
