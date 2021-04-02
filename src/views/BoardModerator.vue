<template>
  <div>
    <!-- Header -->
    <header class="jumbotron">
      <h1>Clientes</h1>
    </header>

    <!-- Filter -->
    <div>
      <input
        class="form-control"
        id="myInput"
        type="text"
        placeholder="Search.."
        v-model="filter"
      />
      <br />
    </div>

    <!-- Table -->
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Tipo de documento</th>
            <th scope="col">Número de documento</th>
            <th scope="col">Genero</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(propietario, i) in filteredRows" :key="i">
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
                v-on:click="EditarUsuario(i)"
                data-toggle="modal"
                data-target="#exampleModal"
                class="btn btn-info botoncito"
              >
                Editar
              </button>
              <button
                type="button"
                class="btn btn-danger botoncito"
                v-on:click="EliminarUsuario(i)"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Editar Propietario
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body ">
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Nombre:
              </label>
              <input
                type="text"
                v-model="selected.nombre"
                id="form3"
                class="form-control validate"
              />
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Apellido</label
              >
              <input
                type="text"
                v-model="selected.apellido"
                id="form3"
                class="form-control validate"
              />
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Tipo de documento</label
              >

              <select
                v-model="selected.tipo_documento"
                class="form-control form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected value="selected.tipo_documento">{{
                  dict_doc[selected.tipo_documento]
                }}</option>
                <option value="selected.tipo_documento">{{
                  dict_doc[selected.tipo_documento + 1]
                }}</option>
              </select>
            </div>
            <div class="md-form ">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Numero de documento</label
              >
              <input
                type="text"
                v-model="selected.numero_documento"
                id="form3"
                class="form-control validate"
              />
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Género</label
              >
              <select
                v-bind="selected.sexo"
                class="form-control form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>{{ dict_genero[selected.sexo] }}</option>
                <option value="1">{{ dict_genero[selected.sexo + 1] }}</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              v-on:click="PeticionPut()"
              data-dismiss="modal"
              class="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import Propietario from "../models/propietario";
export default {
  name: "User",
  data() {
    return {
      filter: "",
      content: "",
      propietarios: [],
      dict_genero: { 1: "F", 2: "M", 3: "F" },
      dict_doc: {
        1: "Cédula de ciudadanía",
        2: "Tarjeta de Identidad",
        3: "Cédula de ciudadanía",
      },
      animales: "",
      selected: new Propietario(),
    };
  },
  created() {
    UserService.getPropietarios().then(
      (response) => {
        let info = response.data;
        for (var a in info) {
          this.propietarios.push(info[a]);
        }
        console.log(this.propietarios);
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
    Test() {
      console.log(this.propietarios);
    },
    PeticionPut() {
      UserService.editarUsuario(this.selected).then(
        (response) => {
          console.log("Exito editando" + response);

          this.ActualizarTabla();
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    ActualizarTabla() {
      UserService.getPropietarios().then(
        (response) => {
          this.propietarios = response.data;
        },
        (error) => {
          console.log("Pues hubo error socio" + error);
        }
      );
    },
    VerUsuario(i) {
      UserService.getAnimales(this.propietarios[i].id).then(
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
      UserService.deleteUsuario(this.propietarios[i].id).then(
        (response) => {
          console.log(response);
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
      //this.selected = this.propietarios[i];
      // asignación sin bindear
      this.selected = Object.assign({}, this.propietarios[i]);
    },
  },
  computed: {
    filteredRows() {
      return this.propietarios.filter((propietario) => {
        const nombre = propietario.nombre.toString().toLowerCase();
        const apellido = propietario.apellido.toString().toLowerCase();
        const tipodocumento = propietario.tipo_documento
          .toString()
          .toLowerCase();
        const numerodocumento = propietario.numero_documento
          .toString()
          .toLowerCase();
        const genero = propietario.sexo.toString().toLowerCase();
        const searchTerm = this.filter.toString().toLowerCase();

        return (
          nombre.includes(searchTerm) ||
          apellido.includes(searchTerm) ||
          tipodocumento.includes(searchTerm) ||
          numerodocumento.includes(searchTerm) ||
          genero.includes(searchTerm)
        );
      });
    },
  },
};
</script>

<style scoped>
.botoncito {
  margin: 1%;
}
label {
  display: inline-block;
  text-align: right;
}
</style>
