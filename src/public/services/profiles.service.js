import axiosInstance from "../../shared/services/shared.service.js";

const API_URL = "http://localhost:5134/api/v1/profiles";

class ProfilesService{
    GetProfileByUserId(id){
        return axiosInstance.get(`/profiles/${id}`)
    }
    getEnterpriseProfiles(){
        return axiosInstance.get(`/enterprises`)
    }
}

export default new ProfilesService();