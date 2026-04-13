
const errorHandler = (err, req, res, next) => {

  const statusCode = err.statusCode || 500;

  if(process.env.NODE_ENV === 'production') {
    return res.status(statusCode).json({
      success: false,
      message: err.message || "Internal Server Error"
    })
  }

  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: err.stack
  })
};

export default errorHandler;