/**
 * Controller base class.
 */
import status from 'http-status';
import verifiJs from '../config/verifi.js';

class Controller {
  constructor() {
    this.jsonResponse = this.jsonResponse.bind(this);
    this.validateInput = this.validateInput.bind(this);
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
  jsonResponse(res, httpStatus, message) {
    switch (httpStatus) {
      case status.CREATED:
        res.status(status.CREATED).json({
          message: message || 'success!',
        });
        break;

      default:
        break;
    }
  }

//   errorResponse(res, error) {
//     switch (httpStatus) {
//       case status.CREATED:
//         res.status(status.CREATED).json({
//           message: message || 'success!',
//         });
//         break;

//       default:
//         break;
//     }
//   }

  /**
     * Validate input data
     * @param {object} data
     * @param {object} schema
     * @returns
     */
  async validateInput(data, schema) {
    const { validation, error } = await verifiJs.check(data, schema);
    if (!validation) {
      throw Error(error);
    }
  }
}

export default Controller;
