import axios from "axios";

const API_URL = "http://localhost:5134/api/v1/profiles";

export default class ProfilesService{
    getProfileByUserId(id){
        return axios.get(`${API_URL}/user/${id}`)
    }
}