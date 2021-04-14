import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://khor.pythonanywhere.com/api/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  postPropietario(propietario){
    console.log("entre a post")
    return axios.post(API_URL + 'propietario/',
      propietario
    , { headers: authHeader() });
  }

  getUserBoard() {
    return axios.get(API_URL + '', { headers: authHeader() });
  }

  getPropietarios(){
    let a = axios.get(API_URL + 'propietario/' , {headers:authHeader()});
    return a
  }

  getAnimales(id){
    return axios.get(API_URL + 'propietario/'+id+'/mascota/', {headers:authHeader()});
  }

  deleteUsuario(id){
    return axios.delete(API_URL+ 'propietario/'+id , {headers:authHeader()});
  }

  editarUsuario( usuario ){
    return axios.put(API_URL+ 'propietario/'+usuario.id+'/',usuario,{headers:authHeader()});
  }
  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();