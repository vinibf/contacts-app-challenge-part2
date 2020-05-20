const sortContactsBy = (contactList, category, direction="ASC") => {
    let mod = direction === "DESC" ? -1 : 1;

    const sortedContacts = contactList.sort((c1, c2) => {
        return (c1[category] > c2[category]) ? (1 * mod) : ((c2[category] > c1[category]) ? (-1 * mod) : 0);
    });

    return sortedContacts;
};

export default sortContactsBy;