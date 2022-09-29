const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Trip, { foreignKey: 'tripId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Membership.init({
    tripId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    request: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};
