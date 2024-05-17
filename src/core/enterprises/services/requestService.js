import axios from 'axios';

const API_URL = 'http://localhost:3000/requests';

class requestService {
    async getRequestsByCompanyId(companyId) {
        try {
            const response = await axios.get(API_URL + `?empresa_id=${companyId}`);

            // Devolver los datos de las solicitudes
            return response.data;
        } catch (error) {
            console.error('Error al obtener las solicitudes:', error);
            return [];
        }
    }
    getAllRequests()
    {
        return axios.get(API_URL);
    }
}

export default new requestService();
