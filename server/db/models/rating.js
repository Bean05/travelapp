const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { as: 'receiver', foreignKey: 'userId' });
      this.belongsTo(models.User, { as: 'authorId', foreignKey: 'author' });
    }
  }
  Rating.init({
    text: DataTypes.TEXT,
    author: DataTypes.INTEGER,
    photo: DataTypes.TEXT,
    stars: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};
