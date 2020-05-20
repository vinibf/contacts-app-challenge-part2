const sortContactsBy = (contactList, category) => {
    const sortedContacts = contactList.sort((c1, c2) => {
        return (c1[category] > c2[category]) ? 1 : ((c2[category] > c1[category]) ? -1 : 0);
    });

    return sortedContacts;
};

export default sortContactsBy;