import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize.js'
import ClassModal from './class.model copy.js';

class TeacherModel extends Model { }

TeacherModel.init({
    email: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    // connection instance
    sequelize,
    modelName: 'teacher'
});

// ClassModal.hasOne(TeacherModel)

export default TeacherModel;