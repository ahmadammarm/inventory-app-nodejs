const notFound = (_, response, next) => {
  try {
    response.status(404).json({
      status: 'error',
      message: 'Resource not found',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = notFound;
