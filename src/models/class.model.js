import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize.js';

export default class ClassModal extends Model { }

ClassModal.init({
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  level: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  teacherEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // connection instance
  sequelize,
  modelName: 'class',
});
