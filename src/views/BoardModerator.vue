<template>
  <div class="container">
    <header class="jumbotron">
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
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(propietario, i) in propietarios" :key="i">
          <th scope="row">{{ propietario.id }}</th>
          <td>{{ propietario.nombre }}</td>
          <td>{{ propietario.apellido }}</td>
          <td>{{ dict_doc[propietario.tipo_documento] }}</td>
          <td>{{ propietario.numero_documento }}</td>
          <td>{{ dict_genero[propietario.sexo] }}</td>
          <td>
            <button
              type="button"
              class="btn btn-success botoncito"
              v-on:click="VerUsuario(i)"
            >
              Ver
            </button>
            <button
              type="button"
              class="btn btn-danger botoncito"
              v-on:click="EliminarUsuario(i)"
            >
              Eliminar
            </button>
            <button
              type="button"
              class="btn btn-secondary botoncito"
              v-on:click="EditarUsuario(i)"
            >
              Editar
            </button>
          </td>
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
      propietarios: "",
      dict_genero: { 1: "F", 2: "M", 3: "P" },
      dict_doc: {
        1: "Cédula de ciudadanía",
        2: "Cédula extranjería",
        3: "Tarjeta de Identidad",
      },
      animales : "",
    };
  },
  created() {
    UserService.getPropietarios().then(
      (response) => {
        this.propietarios = response.data;
      },
      (error) => {
        console.log("Pues hubo error socio" + error);
      }
    );
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
  methods: {
    VerUsuario(i) {
      UserService.getAnimales(i).then(
        (response) => {
          this.animales = response.data;
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    EliminarUsuario(i) {
      UserService.getAnimales(i).then(
        (response) => {
          this.animales = response.data;
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    EditarUsuario(i) {
      UserService.editarUsuario(this.propietarios[i]).then(
        (response) => {
        console.log(response)
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style scoped>
.botoncito {
  margin: 1%;
}
</style>
