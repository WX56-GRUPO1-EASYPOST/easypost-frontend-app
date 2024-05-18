import axios from "axios";

export class ProjectsApiService {
    baseUrl="http://localhost:8080"
    getEnterpriseProjects(id){
        return axios.get(`${this.baseUrl}/${id}/projects`)
    }
}