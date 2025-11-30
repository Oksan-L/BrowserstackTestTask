export function randomText(length = 8) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }

    return result;
}

export const RandomGenerator = {
    generateString(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },

    generateEmail(min = 8, max = 50) {
        const nameLength = Math.floor(Math.random() * (max - min + 1)) + min;
        const name = this.generateString(nameLength);
        return `${name}@gmail.com`;
    },

    generatePassword(min = 8, max = 50) {
        const passLength = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.generateString(passLength);
    }
};
