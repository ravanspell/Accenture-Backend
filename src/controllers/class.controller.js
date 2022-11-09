import Controller from './controller.js';
import classService from '../services/class.service.js';
import responseWithData from '../transformers/responseWithData.js';

class Class extends Controller {
  constructor() {
    super();
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.classService = classService;
  }

  async create(req, res) {
    try {
      const reqBody = req.body;
      // set validation rules
      const validationSchema = {
        level: 'required|string|max:10|regExp:[a-zA-Z ]|alpha',
        name: 'required|string',
        teacherEmail: 'required|string|email',
      };
      // validate user inputs
      const { validation, error } = await this.validateInput(reqBody, validationSchema);
      if (!validation) {
        return this.errorResponse(res, error, true);
      }

      const response = await this.classService.createClass(reqBody);
      return this.jsonResponse(res, this.statusCode.CREATED, response);
    } catch (error) {
      return this.errorResponse(res, error);
    }
  }

  async get(req, res) {
    try {
      const { rows } = await this.classService.fetchClasses();
      return this.jsonResponse(res, this.statusCode.OK, responseWithData(rows));
    } catch (error) {
      return this.errorResponse(res, error);
    }
  }
}

export default new Class();
