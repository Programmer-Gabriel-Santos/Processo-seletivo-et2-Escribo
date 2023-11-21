import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export class Authenticator {
    generateToken = (payload) => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        return token;
    };

    getTokenPayload = (token) => {
        try {
            const payload = jwt.verify(
                token,
                process.env.JWT_KEY
            );

            return payload;
        } catch (error) {
            return null;
        }
    };
}