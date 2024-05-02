import axios from "axios";

const url = "htpp:localhost:3000"
const contactsUrl = "/usuarios/2"

export default class ContactsListService {
    getAllContacts() {
        return axios.get(`${url}${contactsUrl}`)
    }
}
