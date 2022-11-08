import Controller from './controller.js';
import TeacherModel from '../models/teacher.model.js';

class Teacher extends Controller {
  constructor() {
    super();
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
  }

  async create(req, res) {
    try {
      const validationSchema = {
        firstName: 'required|string|max:10|regExp:[a-zA-Z ]|alpha',
        address: 'required|string',
      };

      await this.validateInput(req.body, validationSchema);
      const response = await TeacherModel.create(req.body);
      this.jsonResponse(res, this.statusCode.CREATED, response);
    } catch (error) {
      this.jsonResponse(res, this.statusCode.CREATED, error.message);
    }
  }

  async get(req, res) {
    try {
      const response = await TeacherModel.findAll();
      this.jsonResponse(res, this.statusCode.CREATED, response);
    } catch (error) {
      this.jsonResponse(res, this.statusCode.CREATED, error.message);
    }
  }
}

export default new Teacher();
