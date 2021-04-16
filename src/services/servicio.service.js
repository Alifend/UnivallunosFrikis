import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://khor.pythonanywhere.com/api/';

class ServicioService {
  
  getServicios(){
    return axios.get(API_URL + 'servicios/', {headers:authHeader()});
  }

  deleteServicio(id){
    return axios.delete(API_URL+ 'servicio/'+id, {headers:authHeader()});
  }

  editarServices( servicio ){
    return axios.put(API_URL+ 'servicio/'+servicio.id, servicio, {headers:authHeader()});
  }

  AñadirServicio(servicio){
    return axios.post(API_URL+ 'servicios/', servicio,{headers:authHeader()});
  }
}
export default new ServicioService();