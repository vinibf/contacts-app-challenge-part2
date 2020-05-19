const baseURL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/';

const get = async(route) => {
    const response = await fetch(`${baseURL}${route}`);
    const data = await response.json();

    return data;
};

export default {
    get
};
