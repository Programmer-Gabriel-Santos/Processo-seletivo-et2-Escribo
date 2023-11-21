export class AuthenticatorMock {
    generateToken = (payload) => {
        switch (payload.role) {
            case USER_ROLES.ADMIN:
                return "token-mock-admin"
            default:
                return "token-mock-normal"
        }
    }

    getTokenPayload = (token) => {
        switch (token) {
            case "token-mock-admin":
                const adminPayload = {
                    id: "id-mock",
                    role: USER_ROLES.ADMIN
                }

                return adminPayload

            case "token-mock-normal":
                const normalPayload = {
                    id: "id-mock",
                    role: USER_ROLES.NORMAL
                }

                return normalPayload
               
            default:
                return null
        }
    }

}