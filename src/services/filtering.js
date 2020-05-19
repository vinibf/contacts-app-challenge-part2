const filterContactsByName = (contactList, name) => {
    const filteredContacts = contactList.filter(contact => contact.name.includes(name));

    return filteredContacts;
};

export default filterContactsByName;