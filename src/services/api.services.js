
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

const updateUserAPI = () => {

}

const deleteUserAPI = () => {

}

const FetchAllUserAPI = () => {
    const URL_BACKEND = 'https://687e66a6efe65e5200869488.mockapi.io/testuser';
    return axios.get(URL_BACKEND);
}

export { createUserAPI, updateUserAPI, deleteUserAPI, FetchAllUserAPI }