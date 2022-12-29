const { customApiError } = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof customApiError){
        res.status(err.statusCode).json({ message: err.message })
    }

    res.status(500).json({ message: "Something went wrong, Please try again later"})
}

module.exports = errorHandlerMiddleware;