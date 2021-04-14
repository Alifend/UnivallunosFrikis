import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://khor.pythonanywhere.com/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'iniciar_sesion/', {
        correo: user.correo,
        password: user.password
      })
      .then(response => {

        if (response.data.token) {
      
          localStorage.setItem('user', JSON.stringify(response.data));
          
        }
        return response.data
      });
  }

  retrieve(id){
    return axios.get(API_URL + 'usuario/'+id+"/")
  }

  logout() {
    localStorage.removeItem('user');
    return axios.get(API_URL + 'cerrar_sesion/');  
    }

  register(user) {
    return axios.post(API_URL + 'usuario/crear/', user,{ headers: authHeader() });
  }
}

export default new AuthService();