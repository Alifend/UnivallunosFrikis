import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://khor.pythonanywhere.com/api/';

class FacturaService{

    getFacturas(){
        return axios.get(API_URL + 'facturas/', { headers: authHeader() });
    }
    
    getDetalles(id){
        return axios.get(API_URL + 'factura/'+id+'/detalles', { headers: authHeader() });
    }

    getServicios(){
        return axios.get(API_URL + 'servicios/', { headers: authHeader() });
    }

    addFactura(factura){
        return axios.post(API_URL + 'facturas/',factura ,{ headers: authHeader() });
    }

    addDetalles(detalle){
        return axios.post(API_URL + 'detalle/',detalle ,{ headers: authHeader() }); 
    }
    
    eliminarFactura(id){
        return axios.delete(API_URL + 'factura'+'/'+id+'/',{ headers: authHeader() });
    }
}

export default new FacturaService();