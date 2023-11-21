import express from "express";
import cors from "cors";
import { UserRouter } from "./routes/UserRouter.js";

class Server {
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors());
        this._setupRoutes();
    }

    _setupRoutes() {
        this.app.use("/user", UserRouter);
    }

    _start(port = process.env.APP_PORT || 3003) {
        this.server = this.app.listen(port, () => {
            const address = this.server.address();
            console.log(`Server is running in http://localhost:${address.port}`);
        });
    }

    _stop() {
        if (this.server) {
            this.server.close(() => {
                console.log("Server stopped");
            });
        }
    }
}

const server = new Server();
server._start();

