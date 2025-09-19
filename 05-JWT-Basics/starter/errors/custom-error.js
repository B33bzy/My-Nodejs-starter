class CustomAPIError extends Error {
  constructor(message) {
    super(message)
    //this.statusCode = statusCode (we removed this)
  }
}

module.exports = CustomAPIError
