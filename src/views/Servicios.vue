<template>
  <div>
    <!-- Header -->
    <header class="jumbotron">
      <h1>Servicios</h1>
    </header>

    <!-- Añadir -->
    <button
      type="button"
      data-toggle="modal"
      data-target="#modalAñadir"
      class="añadir btn btn-success float-right"
    >
      + Añadir Servicio
    </button>

    <!-- Filter -->
    <div>
      <input
        class="form-control"
        id="myInput"
        type="text"
        placeholder="Buscar.."
        v-model="filter"
      />
    </div>

    <!-- Table -->
    <div class="container align-middle ">
      <table class="table table-light text-center ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres</th>
            <th scope="col">Descripción</th>
            <th scope="col">Tipo</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(servicio, i) in filteredRows" :key="i">
            <th class="align-middle" scope="row">{{ i+1 }}</th>
            <td class="align-middle">{{ servicio.nombre }}</td>
            <td class="align-middle">{{ servicio.descripcion }}</td>
            <td class="align-middle">
              {{ dict_tipo[servicio.tipo] }}
            </td>
            <td class="align-middle">{{ servicio.precio }}</td>
            <td>
              <button
                type="button"
                v-on:click="EditarServicio(i)"
                data-toggle="modal"
                data-target="#exampleModal"
                class="btn btn-info botoncito"
              >
                Editar
              </button>
              <button
                type="button"
                class="btn btn-danger botoncito"
                data-toggle="modal"
                v-on:click="EditarServicio(i)"
                data-target="#eliminarModal"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Eliminar -->
    <div
      class="modal fade"
      id="eliminarModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="eliminarModalExample"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered  " role="document">
        <div class="modal-content ">
          <div class="modal-header ">
            <h5 class="modal-title centrado" id="exampleModalLabel">
              ¿Está seguro de borrar el servicio?
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
          <div class="modal-body d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-danger botoncito"
              v-on:click="EliminarServicio(selected)"
              data-dismiss="modal"
              aria-label="Close"
            >
              Eliminar
            </button>
            <button
              type="button"
              class="btn btn-secondary botoncito"
              data-dismiss="modal"
              aria-label="Close"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Editar -->
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
              Editar Servicio
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
                >Descripción</label
              >
              <input
                type="text"
                v-model="selected.descripcion"
                id="form3"
                class="form-control validate"
              />
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Tipo</label
              >

              <select
                v-model="selected.tipo"
                class="form-control form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
              <option v-for="(tipo, i) in ['Procedimiento','Producto']" :key="i" :value="i+1" >{{
                  tipo
                }}</option>
              </select>
            </div>
            <div class="md-form ">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Precio</label
              >
              <input
                type="text"
                v-model="selected.precio"
                id="form3"
                class="form-control validate"
              />
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

    <!-- Modal Crear -->
    <div
      class="modal fade"
      id="modalAñadir"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalAñadir"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Añadir Servicio
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
                v-model="nuevo.nombre"
                id="form3"
                class="form-control validate"
              />
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >descripcion</label
              >
              <input
                type="text"
                v-model="nuevo.descripcion"
                id="form3"
                class="form-control validate"
              />
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Tipo</label
              >

              <select
                v-model="nuevo.tipo"
                class="form-control form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
              <option v-for="(tipo, i) in ['Procedimiento','Producto']" :key="i" :value="i+1" >{{
                  tipo
                }}</option>
              </select>
            </div>
            <div class="md-form ">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Precio</label
              >
              <input
                type="text"
                v-model="nuevo.precio"
                id="form3"
                class="form-control validate"
              />
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
              v-on:click="AñadirServicio(nuevo)"
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
import ServicioService from "../services/servicio.service";
import Servicio from "../models/servicio";
export default {
  name: "User",
  data() {
    return {
      nuevo: new Servicio(),
      go: false,
      filter: "",
      content: "",
      servicios: [],
      selected: new Servicio(),
      dict_tipo : ['Procedimiento','Producto'],
    };
  },
  created() {
    if (this.showAdminBoard == false) {
      this.goProfile();
    }
    ServicioService.getServicios().then(
      (response) => {
        let info = response.data;
        for (var a in info) {
          this.servicios.push(info[a]);
        }
      },
      (error) => {
        console.log("Pues hubo error socio" + error);
      }
    );
  },
  mounted() {
  
  },
  methods: {
    goProfile() {
      this.$router.push("/profile");
    },
    AñadirServicio(servicio) {
      ServicioService.AñadirServicio(servicio).then(
        (response) => {
          console.log("Exito añadiendo" + response);
          this.ActualizarTabla();
          this.nuevo = new Servicio();
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    PeticionPut() {
      ServicioService.editarServices(this.selected).then(
        (response) => {
          console.log("Exito editando" + response.data);

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
      ServicioService.getServicios().then(
        (response) => {
          this.servicios = response.data;
          console.log(response.data)
        },
        (error) => {
          console.log("Pues hubo error socio" + error);
        }
      );
    },
    EliminarServicio(servicio) {
      ServicioService.deleteServicio(servicio.id).then(
        (response) => {
          console.log(response);
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
    EditarServicio(i) {
      //this.selected = this.propietarios[i];
      // asignación sin bindear
      this.selected = Object.assign({}, this.servicios[i]);
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.perfil) {
        return this.currentUser.perfil == 1;
      }
      return false;
    },
    filteredRows() {
      return this.servicios.filter((servicio) => {
        const nombre = servicio.nombre.toString().toLowerCase();
        const searchTerm = this.filter.toString().toLowerCase();

        return (
          nombre.includes(searchTerm)
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
.añadir {
  margin: 1%;
}

.centrado {
  margin: auto;
  margin-right: 0.5%;
}

.centrardiv {
  margin: auto;
}
</style>
