import axios from "axios";
const API_URL = "http://localhost:5134/api/v1/location";
export default class LocationService {
    getLocationById(locationId){
        return axios.get(`${API_URL}/${locationId}`);
    }
}