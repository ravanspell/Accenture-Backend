/**
 * Model relationships
 */
import ClassModal from './class.model.js';
import TeacherModal from './teacher.model.js';

ClassModal.belongsTo(TeacherModal, { foreignKey: 'teacherEmail', target: 'email', as: 'formTeacher' });

export { ClassModal, TeacherModal };
