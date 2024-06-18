const { Router } = require("express");

const movieRouter = require("./movieRouter");

const indexRouter = Router();

indexRouter.use("/movies", movieRouter);

module.exports = indexRouter;