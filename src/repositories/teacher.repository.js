import TeacherModel from '../models/teacher.model.js';

class TeacherRepository {
  constructor() {
    this.getTeachers = this.getTeachers.bind(this);
  }

  create(data) {
    return TeacherModel.create(data);
  }

  get() {
    return TeacherModel.findAll();
  }
}

export default TeacherRepository;
