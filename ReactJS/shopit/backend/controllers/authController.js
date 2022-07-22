const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
//Register a user => /api/v1/register

exports.register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "usertest",
      url: "https://res.cloudinary.com/dtfnsv2kg/image/upload/v1658381291/shopit/user_l0cpng.png",
    },
  });

  const token = user.getJwtToken();

  res.status(201).json({
    success: true,
    token: token,
  });
});

// Login user => /api/v1/login

exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and pwd is entered by user
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  // Finding user in DB
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  // Check if password is correct or not
  const isPwdMatched = await user.comparePassword(password);
  if (!isPwdMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  sendToken(user, 200, res);
});

// Forgot Password => /api/v1/password/forgot
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler(`User not found with this email`, 404));
  }

  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  // Create password Url
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const msgTitle = `Your password reset token is as follow:`;
  const msgBody = resetUrl;
  const msgFooter = `If you haven't requested this email, then ignore it`;
  try {
    await sendEmail({
      email: user.email,
      subject: "ShopIT Password Reset",
      msgTitle: msgTitle,
      msgBody: msgBody,
      msgFooter: msgFooter,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset Password => /api/v1/password/reset/:token
exports.resetPassword = catchAsyncError(async (req, res, next) => {
  //Hash URL token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        `Password reset token is invalid or has been expired`,
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmedPassword) {
    return next(new ErrorHandler(`Password does not match`, 400));
  }

  user.password = req.body.password;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

// Get logged user profile => /api/v1/me

exports.getUserProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// Update/Change password => /api/v1/password/update

exports.updatePassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPwdMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPwdMatched) {
    return next(new ErrorHandler(`Old password is incorrect`, 400));
  }

  if (req.body.password !== req.body.confirmedPassword) {
    return next(
      new ErrorHandler(`Password does not match the confirmed password`, 400)
    );
  }

  user.password = req.body.password;

  await user.save();

  sendToken(user, 200, res);
});

// Update user profile => /api/v1/me/update

exports.updateUserProfile = catchAsyncError(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };
  //Update Avatar TODO

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// Logout user => /api/v1/logout

exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

// Get all users => /api/v1/admin/users

exports.getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get user detail => /api/v1/admin/user/:id

exports.getSingleUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`User does not found with id: ${req.params.id}`, 400)
    );
  }
  res.status(200).json({
    success: true,
    user,
  });
});

// Update User => /api/v1/admin/user/:id

exports.updateUser = catchAsyncError(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// Delete User => /api/v1/admin/user/:id

exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`User does not found with id: ${req.params.id}`, 400)
    );
  }

  // Remove avatar from cloudinary - TODO
  await user.remove();

  res.status(200).json({
    success: true,
    message: "User is removed",
  });
});
