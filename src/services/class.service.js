import ClassRepository from '../repositories/class.repository.js';

class ClassService {
  constructor() {
    this.createClass = this.createClass.bind(this);
    this.classRepository = ClassRepository;
  }

  async createClass(data) {
    const response = await this.classRepository.create(data);
    return response;
  }

  // eslint-disable-next-line no-unused-vars
  async fetchClasses(params) {
    // const page = params?.page_number;
    // set default page size to avoid to get all data once.
    // const limit = params?.page_size || process.env.DEFAULT_PAGE_DATA_RETURN_SIZE;

    // const pageOffset = page ? (page - 1) * limit : null;
    // const pageLimit = limit ? parseInt(limit, 10) : null;
    // implementation for pagination
    // eslint-disable-next-line no-unused-vars
    const fetchParams = {
      attributes: ['name', 'level'],
      order: [
        ['createdAt', 'DESC'],
      ],
    };
    const data = await this.classRepository.getWithTeacher(fetchParams);
    return data;
  }
}

export default new ClassService();
