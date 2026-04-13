import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {

  const { username, email, password } = req.body;

  const isExists = await userModel.findOne({
    $or: [
      { username },
      { email }
    ]
  });

  if (isExists) {
    const error = new Error("Username or email already exists");
    error.statusCode = 409;
    return next(error);
  }

  const user = await userModel.create({
    username,
    email,
    password
  });

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.cookie('token', token);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email
    }
  });
};

export const getUser = async (req, res, next) => {

  const userId = req.user;
  const user = await userModel.findById(userId);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    return next(error);
  }

  res.status(200).json({
    success: true,
    user: {
      id: user._id,
      username: user.username,
      email: user.email
    }
  });
};