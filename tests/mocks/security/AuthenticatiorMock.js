import { UserRole } from "../../../src/model/User";

export class AuthenticatorMock {
    generateToken = () => {
        return "token-mock";
    };

    getTokenPayload = (token) => {

        switch (token) {
        case "token-mock": {
            const userPayload = {
                id: "id-mock",
                role: UserRole.NORMAL
            };

            return userPayload;
        }

        case "token-mock2": {
            const payload2 = {
                id: "id-mock2",
                role: UserRole.NORMAL
            };

            return payload2;
        }

        default:
            return null;
        }
    };
}