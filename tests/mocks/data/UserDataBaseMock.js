import { BaseDataBase } from "../../../src/dataBase/BaseDataBase";
import { users } from "./usersData";

export class UserDataBaseMock extends BaseDataBase {
    
    TABLE_USERS = "Escribo_users";

    findByEmail = async (email) => {

        const user = users.find(user => user.email === email) ;

        return user;
    };

    insertUser = async () => { };
}