import jwt from "jsonwebtoken";

const authHandler = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    const error = new Error("Unauthorized");
    error.statusCode = 401;
    return next(error);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    const error = new Error("Invalid token");
    error.statusCode = 401;
    return next(error);
  }
};

export default authHandler;