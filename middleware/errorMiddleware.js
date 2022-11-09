const errorHandler = (err,req,res, next) => {
    const statusCode =  res.statusCode ? res.statusCode : 500
    // The res.status() function set the HTTP status for the response.
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
    })
}


module.exports = {
    errorHandler
}