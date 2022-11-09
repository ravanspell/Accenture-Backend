import TeacherService from '../services/teacher.service.js';
import Controller from './controller.js';
import responseWithData from '../transformers/responseWithData.js';

class Teacher extends Controller {
  constructor() {
    super();
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.teacherService = TeacherService;
  }

  async create(req, res) {
    try {
      const reqBody = req.body;
      // set validation rules
      const validationSchema = {
        name: 'required|string|max:225|regExp:[a-zA-Z ]|alpha',
        email: 'required|string|email',
        subject: 'required|string',
        contactNumber: 'required|string',
      };
      // validate user inputs
      const { validation, error } = await this.validateInput(reqBody, validationSchema);
      if (!validation) {
        return this.errorResponse(res, error, true);
      }

      const response = await this.teacherService.createTeacher(reqBody);
      return this.jsonResponse(res, this.statusCode.CREATED, response);
    } catch (error) {
      return this.errorResponse(res, error);
    }
  }

  async get(req, res) {
    try {
      const { rows } = await this.teacherService.fetchTeachers();
      return this.jsonResponse(res, this.statusCode.OK, responseWithData(rows));
    } catch (error) {
      return this.errorResponse(res, error);
    }
  }
}

export default new Teacher();
