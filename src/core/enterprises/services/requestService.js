//import axios from 'axios';
import axiosInstance from "../../../shared/services/shared.service.js";
const API_URL2 = 'http://localhost:3000/requests';
const API_URL="http://localhost:5134/api/v1/requests"

class requestService {
    async getRequestsByCompanyIdv2(companyId) {
        try {
            const response = await axios.get(API_URL2 + `?empresa_id=${companyId}`);

            // Devolver los datos de las solicitudes
            return response.data;
        } catch (error) {
            console.error('Error al obtener las solicitudes:', error);
            return [];
        }
    }
    async getRequestsByCompanyId(companyId,status) {
        try {
            const response = await axiosInstance.get(`/requests/enterprise/${companyId}/filter`,{params:status});

            // Devolver los datos de las solicitudes
            return response.data;
        } catch (error) {
            console.error('Error al obtener las solicitudes:', error);
            return [];
        }
    }
    getAllRequests()
    {
        return axios.get(API_URL2);
    }
    postRequest(request){
        return axiosInstance.post(`/requests`,request);
    }
}

export default new requestService();
