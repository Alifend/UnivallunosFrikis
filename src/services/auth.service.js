import axios from 'axios';

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
    return axios.post(API_URL + 'usuario/crear/', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();