import axios from "axios";

const API_URL = 'http://localhost:3000';

export default class ContactsListApiService {
    getContactsListIdByUserId(id) {
        return axios.get(`${API_URL}/usuarios/${id}`)
    }

    getContactsList(contactsListId){
        return axios.get(`${API_URL}/contactsList/${contactsListId}`)
    }

    getAllChats(){
        return axios.get(`${API_URL}/chats`)
    }

    getMessageById(messageId){
        return axios.get(`${API_URL}/messages/${messageId}`)
    }

    getAllMessages(){
        return axios.get(`${API_URL}/messages`)
    }

    postMessage(data){
        return axios.post(`${API_URL}/messages`,data)
    }

    postMessageInChat(data,id,currentContactId,chat){
        //SERÍA UN PUT o PATCH
        return axios.post(`${API_URL}/chats/${chatId}`,data.id )
    }

    getChat(enterpriseId,clientId){

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
