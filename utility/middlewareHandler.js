function logger (req, res, next) {
    console.log (`${req.method} sent to ${req.url}`)
    next()
}

module.exports = logger