import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://khor.pythonanywhere.com/api/';

class HistoriaService{


    getHistorias(id){
        return axios.get(API_URL + 'mascota/'+id+'/historia_clinica/', { headers: authHeader() });
    }
}

export default new HistoriaService();