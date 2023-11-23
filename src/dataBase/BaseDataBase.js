import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export class BaseDataBase {

    constructor() {
        this._connection = null;
    }

    _getConnection() {
        const DB_PORT = Number(process.env.DB_PORT);
       
        if (!this._connection) {
            this._connection = knex({
                client: "mysql2",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE,
                    port: DB_PORT,
                }
            });
        }

        return this._connection;
    }
}
