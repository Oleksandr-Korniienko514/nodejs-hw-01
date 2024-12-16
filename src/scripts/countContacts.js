import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contacts = await readContacts();

        return contacts.length;
    } catch (err) {
        console.log('Помилка повернення файлу:', err);
    }
};

console.log(await countContacts());