import axios from 'axios';

const API_URL = 'http://localhost:3000/usuarios';

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
        return axios.get(API_URL);
    }
}

export default new AuthService();
