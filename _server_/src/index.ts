import "reflect-metadata";
import { createKoaServer } from "routing-controllers";
import { Action, BadRequestError, useKoaServer } from "routing-controllers";
import Controller from "./controller";
import setupDb from "./db";
import { Server } from "http";
const server = new Server(app.callback());
const port = process.env.PORT || 4000;
const app = createKoaServer({
  controllers: [Controller]
});

useKoaServer(app, {
  cors: true,
  controllers: [
    // UserController,
  ],
  authorizationChecker: (action: Action) => {
    const header: string = action.request.headers.authorization;
    if (header && header.startsWith("Bearer ")) {
      const [, token] = header.split(" ");

      try {
        return !!(token && verify(token));
      } catch (e) {
        throw new BadRequestError(e);
      }
    }

    return false;
  },
  currentUserChecker: async (action: Action) => {
    const header: string = action.request.headers.authorization;
    if (header && header.startsWith("Bearer ")) {
      const [, token] = header.split(" ");

      if (token) {
        const { id } = verify(token);
        return User.findOne(id);
      }
    }
    return undefined;
  }
});

// app.listen(port, () => console.log(`Listening on port ${port}`));

setupDb()
  .then(_ => {
    server.listen(port);
    console.log(`Listening on port ${port}`);
  })
  .catch(err => console.error(err));
