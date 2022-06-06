import { Router } from "express";
import { Article } from "./article.model";

const articlesRouter = Router();

articlesRouter.post("/", async (req, res) => {
  const newArticle = await Article.build(req.body);
  const article = await newArticle.save();
  return res.send(article);
});

articlesRouter.get("/", async (req, res) => {
  const articles = await Article.findAll();
  return res.send(articles);
});

export default articlesRouter;
