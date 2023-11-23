import { UserRole } from "../../../src/model/User";

export const users = [
    {
        id: "id-mock",
        nome: "user test 1",
        email: "user1@escribo.com",
        senha: "hash-senha-mock",
        telefones: [{"numero":"123456789","ddd":"11"}],
        role: UserRole.NORMAL,
        data_criacao: "2023-11-22",
        data_atualizacao: "2023-11-22",
        ultimo_login: "2023-11-22",
    },
    {
        id: "id-mock2",
        nome: "user test 2",
        email: "user2@escribo.com",
        senha: "hash-senha-mock",
        telefones: [{"numero":"123456788","ddd":"81"}],
        role: UserRole.NORMAL,
        data_criacao: "2023-11-22",
        data_atualizacao: "2023-11-22",
        ultimo_login: "2023-11-22",
    },
    {
        id: "id-mock",
        nome: "user test 3",
        email: "user3@escribo.com",
        senha: "hash-senha-mock",
        telefones: [{"numero":"123456799","ddd":"21"}],
        role: UserRole.NORMAL,
        data_criacao: "2023-11-22",
        data_atualizacao: "2023-11-22",
        ultimo_login: "2023-11-22",
    }
];
