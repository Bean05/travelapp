const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Trip, { foreignKey: 'userId' });
      this.belongsTo(models.Rating, { foreignKey: 'userId' });
      this.hasMany(models.Membership, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    phone: DataTypes.STRING,
    social: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    about: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    pets: DataTypes.TEXT,
    habits: DataTypes.TEXT,
    drivLic: DataTypes.STRING,
    city: DataTypes.STRING,
    transport: DataTypes.STRING,
    telegram: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
