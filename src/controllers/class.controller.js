import Controller from './controller.js';
import ClassModel from '../models/class.model.js';
import TeacherModel from '../models/teacher.model.js';

class Class extends Controller {
  constructor() {
    super();
    this.create = this.create.bind(this);
  }

  async create(req, res) {
    try {
      // const validationSchema = {
      //     firstName: "required|string|max:10|regExp:[a-zA-Z ]|alpha",
      //     address: "required|string",
      // };

      // const result = await this.validateInput(req.body, validationSchema)
      const response = await ClassModel.create(req.body);
      this.jsonResponse(res, this.statusCode.CREATED, response);
    } catch (error) {
      this.jsonResponse(res, this.statusCode.CREATED, error.message);
    }
  }

  async get(req, res) {
    const response = await ClassModel.findAll({ include: TeacherModel });
    return this.jsonResponse(res, this.statusCode.OK, response);
  }
}

export default new Class();
