import { TeacherModal } from '../models/index.js';

class TeacherRepository {
  constructor() {
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.teacherModal = TeacherModal;
  }

  create(data) {
    return this.teacherModal.create(data);
  }

  get() {
    return this.teacherModal.findAndCountAll();
  }
}

export default new TeacherRepository();
