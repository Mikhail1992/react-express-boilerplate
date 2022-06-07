import { Sequelize, DataTypes, Model } from "sequelize";

export class Article extends Model {}

export const initArticleModel = (sequelize: Sequelize) =>
  Article.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Article",
    }
  );
