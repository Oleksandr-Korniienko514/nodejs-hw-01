import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    try {
        const contacts = await readContacts();

        const newContacts = Array.from({ length: 1 }, createFakeContact);

        const updatedContacts = [...contacts, ...newContacts];

        await writeContacts(updatedContacts);
    } catch (err) {
        console.error('Помилка генерації контактів:', err);
    }
};

addOneContact();