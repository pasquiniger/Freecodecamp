const {StatusCodes} = require('http-status-codes')


const errorHandlerMiddleware = (err, req, res, next) => {

  let customError = {
    //set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong'
  }

  if(err.code && err.code === '11000'){
    customError.msg = `Duplicated value in ${err.keyValue} field`
    customError.statusCode = 400
  }

  if(err.name === 'ValidatorError'){
    console.log(Object.values(err.errors))
    customError.msg = Object.values(err.errors)
      .map( item => item.message )
      .join(', ')
      .trim()

    customError.statusCode = 400
  }

  if(err.name === 'CastError'){
    customError.msg = `No item found with id ${err.value}`
    customError.statusCode = 404
  }

// revisando el error de esta forma puedo encontrar un codigo que lo define
// por ejemplo, para un campo con valores repetidos anteriormente en la DB el codigo es 11000
//  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err })


  return res.status(customError.statusCode).json({msg: customError.msg})

}

module.exports = errorHandlerMiddleware
