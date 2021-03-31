import axios from 'axios';

const API_URL = 'https://khor.pythonanywhere.com/api/';

class AuthService {
  login(user) {
      console.log("pasé");
      console.log(user)
    return axios
      .post(API_URL + 'iniciar_sesion/', {
        correo: user.correo,
        password: user.password
      })
      .then(response => {
        const  id = response.data.id
        axios.defaults.headers.common['Authorization'] = `Token ${response.data.token}`
        const datos = axios.get(API_URL + 'usuario/'+id)
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(datos));

        }
        return datos;
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