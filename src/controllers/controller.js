/* eslint-disable class-methods-use-this */
/**
 * Controller base class.
 */
import status from 'http-status';
import verifiJs from '../config/verifi.js';

class Controller {
  constructor() {
    this.jsonResponse = this.jsonResponse.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.errorResponse = this.errorResponse.bind(this);
    this.validate = verifiJs;
  }

  // add http status codes as controller class property.
  statusCode = status;

  /*
       * Return the response as a json
       *
       * @param {object} res
       * @param {number} httpStatus
       * @param {string} message
       */
  jsonResponse(res, httpStatus, response) {
    res.status(httpStatus || status.OK).json(response || {});
  }

  errorResponse(res, error, validation = false) {
    let statusCode = status.INTERNAL_SERVER_ERROR;
    let errorMessage = 'Something went wrong';
    // we are not show detailed error messages in production env
    // instead we show meaningful error message.
    if (process.env.NODE_ENV === 'production' && validation === false) {
      res.status(statusCode).json({
        error: errorMessage,
      });
    } else {
      // if it is a validation error then need to show detailed message.
      if (validation) {
        statusCode = status.UNPROCESSABLE_ENTITY;
        errorMessage = error;
      } else {
        statusCode = error.statusCode || statusCode;
        errorMessage = error.message;
      }
      res.status(statusCode).json({
        error: errorMessage,
      });
    }
  }

  /**
       * Validate input data
       * @param {object} data
       * @param {object} schema
       * @returns promise
       */
  async validateInput(data, schema) {
    const validate = await this.validate.check(data, schema);

    if (!validate.validation) {
      validate.error = validate.error.join();
    }
    return validate;
  }
}

export default Controller;
