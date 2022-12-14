import TeacherRepository from '../repositories/teacher.repository.js';

class TeacherService {
  constructor() {
    this.createTeacher = this.createTeacher.bind(this);
    this.teacherRepository = TeacherRepository;
  }

  async createTeacher(data) {
    const response = await this.teacherRepository.create(data);
    return response;
  }

  async fetchTeachers(params) {
    const page = params?.page_number;
    // set default page size to avoid to get all data once.
    const limit = params?.page_size || process.env.DEFAULT_PAGE_DATA_RETURN_SIZE;

    const pageOffset = page ? (page - 1) * limit : null;
    const pageLimit = limit ? parseInt(limit, 10) : null;
    // implementation for pagination
    // eslint-disable-next-line no-unused-vars
    const fetchParams = {
      limit: pageLimit,
      offset: pageOffset,
    };
    const data = await this.teacherRepository.get();
    return data;
  }
}

export default new TeacherService();
