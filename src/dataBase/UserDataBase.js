import { BaseDataBase } from "./BaseDataBase.js";


export class UserDataBase extends BaseDataBase {

    TABLE_USERS = "escribo_users";

    selectUserByEmail = async (email) => {
        const user = await this._getConnection()(this.TABLE_USERS)
            .select()
            .where({ email });

        return user[0];
    };

    selectUserById = async (id) => {

        const user = await this._getConnection()(this.TABLE_USERS)
            .select()
            .where({ id });

        return user[0];
    };

    insertUser = async (user) => {
        await this._getConnection()(this.TABLE_USERS)
            .insert(user);
    };

    updateUltimoLogin = async (date, id) => {
        await this._getConnection()(this.TABLE_USERS)
            .update({ ultimo_login: date })
            .where({ id });
    };
}