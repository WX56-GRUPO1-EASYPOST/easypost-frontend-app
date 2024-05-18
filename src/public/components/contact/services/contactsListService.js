import axios from "axios";

const url = "htpp:localhost:8080"

export default class ContactsListService {
    getAllContacts(id) {
        return axios.get(`${url}/${id}/contacts`)
    }
}
