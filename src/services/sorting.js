const sortContactsByName = contactList => {
    const sortedContacts = contactList.sort((c1, c2) => {
        return (c1.name > c2.name) ? 1 : ((c2.name > c1.name) ? -1 : 0);
    });

    return sortedContacts;
};

const sortContactsByCountry = contactList => {
    const sortedContacts = contactList.sort((c1, c2) => {
        return (c1.country > c2.country) ? 1 : ((c2.country > c1.country) ? -1 : 0);
    });

    return sortedContacts;
};

const sortContactsByCompany = contactList => {
    const sortedContacts = contactList.sort((c1, c2) => {
        return (c1.company > c2.company) ? 1 : ((c2.company > c1.company) ? -1 : 0);
    });

    return sortedContacts;
};

const sortContactsByDepartment = contactList => {
    const sortedContacts = contactList.sort((c1, c2) => {
        return (c1.department > c2.department) ? 1 : ((c2.department > c1.department) ? -1 : 0);
    });

    return sortedContacts;
};

const sortContactsByAdmissionDate = contactList => {
    const sortedContacts = contactList.sort((c1, c2) => {
        return (c1.admissionDate > c2.admissionDate) ? 1 : ((c2.admissionDate > c1.admissionDate) ? -1 : 0);
    });

    return sortedContacts;
};

export default {
    sortContactsByName,
    sortContactsByCountry,
    sortContactsByCompany,
    sortContactsByDepartment,
    sortContactsByAdmissionDate
};