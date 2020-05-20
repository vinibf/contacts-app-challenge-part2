const filterContactsByName = (contactList, name) => {
    const searchName = name.toLowerCase();
    const filteredContacts = contactList.filter(contact => contact.name.toLowerCase().includes(searchName));

    return filteredContacts;
};

export default filterContactsByName;