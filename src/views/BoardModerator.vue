<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{  }}</h3>
      <h1>Veterinario</h1>
    </header>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Tipo de documento</th>
          <th scope="col">Número de documento</th>
          <th scope="col">Genero</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(propietario,i) in propietarios" :key=i>
          <th scope="row">{{propietario.id}}</th>
          <td>{{propietario.nombre}}</td>
          <td>{{propietario.apellido}}</td>
          <td>{{propietario.tipo_documento}}</td>
          <td>{{propietario.numero_documento}}</td>
          <td>{{propietario.sexo}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "User",
  data() {
    return {
      content: "",
      propietarios : ""
    };
  },
  created(){
     UserService.getPropietarios().then(
         (response) =>{
             this.propietarios = response.data;
         },
         (error) =>{
             console.log("Pues hubo error socio"+error);
         }
     )
  },
  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
