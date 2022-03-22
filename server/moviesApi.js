import { Router } from "express";

const movies = [
  {
    title: "movie 1",
  },
  {
    title: "movie 2",
  },
];

export function MoviesApi() {
  const router = new Router();

  router.get("/", (req, res) => {
    res.json(movies);
  });

  router.post("/new", (req, res) => {
    res.sendStatus(500);
  });

  return router;
}
