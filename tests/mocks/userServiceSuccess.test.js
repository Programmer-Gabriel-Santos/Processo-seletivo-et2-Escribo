import { AuthenticatorMock } from "./security/AuthenticatiorMock";
import { HashManagerMock } from "./security/HashManagerMock";
import { IdGeneratorMock } from "./security/IdGeneratorMock";
import { UserDataBaseMock } from "./data/UserDataBaseMock";
import { UserService } from "../../src/services/UserService";
import { users } from "./data/usersData";
import { DateTime } from "luxon";


describe("testando casos de sucesso para UserService", () => {
    const userService = new UserService(
        new UserDataBaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    );

    test("testando o método signup, deve obter sucesso retornando um objeto como resposta", async () => {
        expect.assertions(1);

        const input = {
            nome: "user1",
            email: "user@escribo.com",
            senha: "senha-mock",
            telefones: [{ numero: "123456789", ddd: "11" }],
        };
        const date = DateTime.now().setZone("America/Sao_Paulo").toFormat("yyyy-MM-dd");
        const expectedResponse = {
            id: "id-mock",
            data_criacao: date,
            data_atualizacao: date,
            ultimo_login: date,
            token: "token-mock",
        };

        const response = await userService.signup(input);
        expect(response).toStrictEqual(expectedResponse);
    });

    test("testando o método login, deve obter sucesso retornando um objeto como resposta", async () => {
        expect.assertions(1);

        const input = {
            email: "user1@escribo.com",
            senha: "senha-mock",
        };

        const date = DateTime.now().setZone("America/Sao_Paulo").toFormat("yyyy-MM-dd");


        const expectedResponse = {
            id: "id-mock",
            data_criacao: "2023-11-22",
            data_atualizacao: "2023-11-22",
            ultimo_login: date,
            token: "token-mock",
        };

        const response = await userService.login(input);
        expect(response).toStrictEqual(expectedResponse);
    });

    test("testando o método getInfoUser, deve obter sucesso retornando um objeto como resposta", async () => {
        expect.assertions(1);

        const token = "token-mock2";

        const expectedResponse = {
            id: users[1].id,
            nome: users[1].nome,
            email: users[1].email,
            telefones: users[1].telefones,
            data_criacao: users[1].data_criacao,
            data_atualizacao: users[1].data_atualizacao,
            ultimo_login: users[1].ultimo_login
        };

        const response = await userService.getInfoUser(token);
        expect(response).toStrictEqual(expectedResponse);
    });
});