import { ClassModal, TeacherModal } from '../models/index.js';

class ClassRepository {
  constructor() {
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.getWithTeacher = this.getWithTeacher.bind(this);
    this.classModel = ClassModal;
    this.teacherModel = TeacherModal;
  }

  create(data) {
    return this.classModel.create(data);
  }

  get(params) {
    return this.classModel.findAndCountAll(params);
  }

  getWithTeacher(params) {
    return this.classModel.findAndCountAll(
      {
        ...params,
        include: {
          model: this.teacherModel,
          attributes: ['name'],
          as: 'formTeacher',
        },
      },
    );
  }
}

export default new ClassRepository();
