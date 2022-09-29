const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasMany(models.Membership, { foreignKey: 'tripId' });
    }
  }
  Trip.init({
    tripName: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    cityStart: DataTypes.STRING,
    cityWhere: DataTypes.STRING,
    aboutMembers: DataTypes.TEXT,
    aboutTrip: DataTypes.TEXT,
    membersCount: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};
