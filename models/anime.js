'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Reviews, {
        foreignKey : {
          name : 'animeId'
        }
      })
    }
  }
  Anime.init({
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    episodeCount: DataTypes.INTEGER,
    studio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Anime',
  });
  return Anime;
};