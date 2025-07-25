
import axios from 'axios';

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = 'https://687e66a6efe65e5200869488.mockapi.io/testuser';
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data);
}

const updateUserAPI = (id, fullName, email, password, phone) => {

    const URL_BACKEND = 'https://687e66a6efe65e5200869488.mockapi.io/testuser/' + id;
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    console.log(URL_BACKEND)
    return axios.put(URL_BACKEND, data);
}

const showUserAPI = (id) => {
    const URL_BACKEND = 'https://687e66a6efe65e5200869488.mockapi.io/testuser/' + id;
    return axios.get(URL_BACKEND);
}

const deleteUserAPI = (id) => {
    const URL_BACKEND = 'https://687e66a6efe65e5200869488.mockapi.io/testuser/' + id;
    return axios.delete(URL_BACKEND);
}

const FetchAllUserAPI = () => {
    const URL_BACKEND = 'https://687e66a6efe65e5200869488.mockapi.io/testuser';
    return axios.get(URL_BACKEND);
}

export { createUserAPI, updateUserAPI, deleteUserAPI, FetchAllUserAPI, showUserAPI }