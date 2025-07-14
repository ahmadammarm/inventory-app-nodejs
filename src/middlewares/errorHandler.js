/* eslint-disable prettier/prettier */
const errorHandler = (error, request, response, next) => {
    try {
        const code = response.code ? response.code : 500;
        
        response.status(code).json({
            code,
            success: false,
            message: error.message || 'Internal Server Error',
            stack: error.stack
        })

    } catch(error) {
        next(error);
    }
}

module.exports = errorHandler;