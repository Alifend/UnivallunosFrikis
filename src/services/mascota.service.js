import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://khor.pythonanywhere.com/api/';

class MascotaService {
  
  getMascotas(id){
    return axios.get(API_URL + 'propietario/'+id+'/mascota/', {headers:authHeader()});
  }

  getRazas(id){
    return axios.get(API_URL + 'especie/'+id+'/raza/', {headers:authHeader()});
  }
  deleteMascota(id){
    return axios.delete(API_URL+ 'mascota/'+id, {headers:authHeader()});
  }

  crearRaza(raza,especie){
    return axios.post(API_URL+ 'especie/'+especie+"/raza/",{
      'especie' : especie ,
      'nombre' : raza
    } ,{headers:authHeader()});
  }

  deleteRaza(id){
    return axios.delete(API_URL+ 'raza/'+id+'/', {headers:authHeader()});
  }

  getRacitas(){
    return axios.get(API_URL+ 'raza/', {headers:authHeader()});
  }

  createMascota(mascota){
    return axios.post(API_URL+ 'mascota/',mascota ,{headers:authHeader()});
  }

  editarMascota( mascota ){
    return axios.put(API_URL+ 'mascota/'+mascota.id+'/',mascota,{headers:authHeader()});
  }

  getHistoriasClinicas(id){
    return axios.get(API_URL+ 'mascota/'+id+'/historia_clinica/',{headers:authHeader()});
  }
}
export default new MascotaService();