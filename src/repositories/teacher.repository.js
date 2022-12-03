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

  get(params = {}) {
    return this.teacherModal.findAndCountAll(params);
  }

  update(data, params = {}) {
    return this.teacherModal.update(data, params);
  }
}

export default new TeacherRepository();
