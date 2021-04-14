import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://khor.pythonanywhere.com/api/';

class FacturaService{

    getFacturas(){
        return axios.get(API_URL + 'facturas/', { headers: authHeader() });
    }

}

export default new FacturaService();