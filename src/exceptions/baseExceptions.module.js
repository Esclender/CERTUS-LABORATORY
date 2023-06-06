class BaseException extends Error{
  constructor(message,statusCode){
    super(message, {cause:{status: statusCode}})
  }
}

export default BaseException