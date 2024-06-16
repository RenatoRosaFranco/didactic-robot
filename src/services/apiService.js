import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

const apiService = axios.create({
    baseURL: API_BASE_URL || 'http://localhost:3000',
});

export const sendEmail = async (values) => {
    return apiService.post('/sendEmail', values);
}

export default apiService;