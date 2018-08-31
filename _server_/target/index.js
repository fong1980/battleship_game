"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_2 = require("routing-controllers");
const controller_1 = require("./controller");
const db_1 = require("./db");
const http_1 = require("http");
const server = new http_1.Server(app.callback());
const port = process.env.PORT || 4000;
const app = routing_controllers_1.createKoaServer({
    controllers: [controller_1.default]
});
routing_controllers_2.useKoaServer(app, {
    cors: true,
    controllers: [],
    authorizationChecker: (action) => {
        const header = action.request.headers.authorization;
        if (header && header.startsWith("Bearer ")) {
            const [, token] = header.split(" ");
            try {
                return !!(token && verify(token));
            }
            catch (e) {
                throw new routing_controllers_2.BadRequestError(e);
            }
        }
        return false;
    },
    currentUserChecker: async (action) => {
        const header = action.request.headers.authorization;
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
db_1.default()
    .then(_ => {
    server.listen(port);
    console.log(`Listening on port ${port}`);
})
    .catch(err => console.error(err));
//# sourceMappingURL=index.js.map