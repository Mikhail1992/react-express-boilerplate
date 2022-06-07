import express, { Express } from "express";
import { Sequelize } from "sequelize";
import cors from "cors";
import bodyParser from "body-parser";
import { initArticleModel } from "./article/article.model";
import articlesRouter from "./article/article.routes";
import path from "path";
import fs from "fs";

export default class App {
  app: Express;

  port: number;

  sequelize: Sequelize;

  server: unknown;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.sequelize = new Sequelize(
      process.env.POSTGRES_DB as string,
      process.env.POSTGRES_USER as string,
      process.env.POSTGRES_PASSWORD as string,
      {
        host: process.env.HOST,
        dialect: "postgres",
      }
    );
  }

  useRoutes() {
    this.app.use("/articles", articlesRouter);
  }

  async checkDBConnection() {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  async initSchemas() {
    await initArticleModel(this.sequelize);

    await this.sequelize.sync();
  }

  async init() {
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());

    await this.checkDBConnection();
    await this.initSchemas();

    this.useRoutes();

    this.server = this.app.listen(this.port);
    console.log(`Server is working on port ${this.port}`);
  }
}
