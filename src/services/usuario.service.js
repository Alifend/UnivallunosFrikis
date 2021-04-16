import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://khor.pythonanywhere.com/api/';

class UsuarioService {
  

  postUsuario(usuario){
    console.log(usuario)
    return axios.post(API_URL + 'usuario/crear/', usuario, { headers: authHeader() });
  }


  getUsuarios(){
    let a = axios.get(API_URL + 'usuarios/' , {headers:authHeader()});
    return a
  }

  deleteUsuario(id){
    return axios.delete(API_URL+ 'usuario/'+id+"/eliminar/" , {headers:authHeader()});
  }

  editarUsuario( usuario ){
    return axios.put(API_URL+ 'usuario/'+usuario.id+'/actualizar/',usuario,{headers:authHeader()});
  }


}

export default new UsuarioService();