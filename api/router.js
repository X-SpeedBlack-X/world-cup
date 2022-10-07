import Router from "@koa/router";
import * as games from "./app/games/index.js";
import * as hunches from "./app/hunches/index.js";
import * as users from "./app/users/index.js";

export const router = new Router();

router.get("/login", users.login);
router.post("/users", users.create);

/* router.get("/hunches", hunches.list); */
router.post("/hunches", hunches.create);

router.get("/games", games.list);