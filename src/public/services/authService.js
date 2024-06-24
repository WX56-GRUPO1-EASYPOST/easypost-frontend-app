import axios from 'axios';

const API_URL2 = 'http://localhost:3000/usuarios';
const API_URL="http://localhost:5134/api/v1/authentication"

class AuthService {
    /*async login(email, password) {
        try {
            const response = await axios.get(API_URL);
            console.log(response.data)
            const users = response.data;

            const user = users.find(u => u.email === email && u.password === password);
            if (!user) {
                throw new Error('Correo electrónico o contraseña no válidos.');
            }
            return user;
        } catch (error) {
            throw error;
        }
    }*/
    getAllUsers() {
        return axios.get(API_URL2);
    }

    getUserById(userId) {
        const url = `${API_URL2}/${userId}`;
        return axios.get(url);

    }
    loginUser(user){
        return axios.post(`${API_URL}/sign-in`,user);
    }
    registerUser2(user) {
        return axios.post(API_URL, user);

    }
    registerUser(user){
        return axios.post(`${API_URL}/sign-up`,user);
    }
}

export default new AuthService();
