import axios from "axios";

const API_URL = 'http://localhost:3000/usuarios';

export default class ContactsListService {
    getAllContacts(id) {
        return axios.get(`${url}/${id}/contacts`)
    }
    getUserById(userId) {
        const url = `${API_URL}/${userId}`;
        return axios.get(url);
    }
    getContactsByIds(ids) {
        // Crear una cadena de consulta con los IDs
        const query = ids.map(id => `id=${id}`).join('&');
        return axios.get(`${API_URL}?${query}`);
    }
}
