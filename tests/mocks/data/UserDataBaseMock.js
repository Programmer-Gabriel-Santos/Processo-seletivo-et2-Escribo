import { BaseDataBase } from "../../../src/dataBase/BaseDataBase";
import { users } from "./usersData";

export class UserDataBaseMock extends BaseDataBase {
    
    selectUserByEmail = async (email) => {

        const user = users.find(user => user.email === email) ;

        return user;
    };

    selectUserById = async (id) => {

        const user = users.find(user => user.id === id);

        return user;
    };

    insertUser = async () => { };

    updateUltimoLogin = async () => { };
}