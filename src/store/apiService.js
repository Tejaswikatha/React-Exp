import axios from "axios";

class ApiService {
    static fetchDataFromServer(path) {
        const BASE_URL = 'https://dummyjson.com/';
        return axios.get(`${BASE_URL}${path}`)
        .then((response) => response.data)
        .catch((err) => {
            throw new Error('Failed to fetch data from the server')
        })
    }
}

export default ApiService;