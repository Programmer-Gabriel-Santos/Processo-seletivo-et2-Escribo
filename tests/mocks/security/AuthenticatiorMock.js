export class AuthenticatorMock {
    generateToken = () => {
        return "token-mock";
    };

    getTokenPayload = (token) => {

        if (token === "token-mock") {
            const normalPayload = {
                id: "id-mock",
                role: "user"
            };
            return normalPayload;
        }

    };
}