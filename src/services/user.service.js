import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://khor.pythonanywhere.com/api/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + '', { headers: authHeader() });
  }

  getPropietarios(){
    return axios.get(API_URL + 'propietario/' , {headers:authHeader()});
  }

  getAnimales(cedula){
    return axios.get(API_URL + 'animales/'+cedula, {headers:authHeader()});
  }

  deleteUsuario(cedula){
    return axios.delete(API_URL+ 'propietario/'+cedula , {headers:authHeader()});
  }

  editarUsuario(usuario){
    return axios.put(API_URL+ 'propietario/' + usuario, {headers:authHeader()});
  }
  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();