import axios from "axios";

export class EnterpriseProfileApiService {
    baseUrl="http://localhost:8080";
    getProfileById(id){
        return axios.get(`${this.baseUrl}/profiles/${id}`)
    }
}