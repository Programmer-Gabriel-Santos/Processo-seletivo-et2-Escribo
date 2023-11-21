import bcrypt from "bcryptjs";

export class HashManager {
    hash = async (plaintext) => {
        const rounds = Number(process.env.BCRYPT_SALT_ROUNDS);
        const salt = await bcrypt.genSalt(rounds);
        const hash = await bcrypt.hash(plaintext, salt);

        return hash;
    };

    compare = async (plaintext, hash) => {
        return bcrypt.compare(plaintext, hash);
    };
}