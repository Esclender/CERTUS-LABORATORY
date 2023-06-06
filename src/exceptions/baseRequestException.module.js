import BaseException from "./baseExceptions.module.js";

class BaseRequestException extends BaseException{
  constructor(message){
    super(message, 400)
  }
}

export default BaseRequestException