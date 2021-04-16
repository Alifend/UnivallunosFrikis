import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://khor.pythonanywhere.com/api/';

class ServicioService {
  
  getServicios(){
    return axios.get(API_URL + 'servicios/', {headers:authHeader()});
  }

  deleteMascota(id){
    return axios.delete(API_URL+ 'servicio/'+id, {headers:authHeader()});
  }

  editarMascota( mascota ){
    return axios.put(API_URL+ 'servicio/'+mascota.id, mascota, {headers:authHeader()});
  }

  createMascota(servicio){
    return axios.post(API_URL+ 'servicios/', servicio,{headers:authHeader()});
  }
}
export default new ServicioService();