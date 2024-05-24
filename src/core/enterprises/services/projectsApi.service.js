import axios from "axios";

export class ProjectsApiService {
    baseUrl="http://localhost:3000"
    getEnterpriseProjects(id){
        return axios.get(`${this.baseUrl}/${id}/requests`)
    }
}