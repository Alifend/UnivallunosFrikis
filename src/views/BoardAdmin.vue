<template>
  <div>
    <!-- Header -->
    <header class="jumbotron">
      <h1>Usuarios</h1>
    </header>

    <!-- Añadir -->
    <button
      type="button"
      data-toggle="modal"
      data-target="#modalAñadir"
      v-on:click="SetearNuevo()"
      class="añadir btn btn-success float-right"
    >
      + Añadir Usuario
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
      <table class="table text-center ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Correo</th>
            <th scope="col">Perfil</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, i) in filteredRows" :key="i">
            <th class="align-middle" scope="row">{{ i + 1 }}</th>
            <td class="align-middle">{{ usuario.correo }}</td>
            <td class="align-middle">{{ perfiles[usuario.perfil - 1] }}</td>
            <td class="align-middle">{{ usuario.nombre }}</td>
            <td class="align-middle">{{ usuario.apellido }}</td>
            <td class="align-middle">{{ usuario.fecha_nacimiento }}</td>
            <td class="align-middle">{{ usuario.direccion }}</td>
            <td class="align-middle">{{ usuario.telefono }}</td>
            <td>
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
                data-toggle="modal"
                v-on:click="EditarUsuario(i)"
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
              ¿Está seguro de borrar el usuario?
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
              v-on:click="EliminarUsuario(selected)"
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
              Editar Usuario
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
                >Correo:
              </label>
              <input
                type="text"
                v-model="selected.correo"
                id="form3"
                class="form-control validate"
              />
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Perfil</label
              >
              <select
                v-model="selected.perfil"
                class="form-control form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option v-for="(perf, i) in perfiles" :key="i" :value="i + 1">{{
                  perf
                }}</option>
              </select>
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Nombre</label
              >
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
                >Fecha de nacimiento</label
              >
              <input
                type="text"
                v-model="selected.fecha_nacimiento"
                id="form3"
                class="form-control validate"
              />
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Dirección</label
              >
              <input
                type="text"
                v-model="selected.direccion"
                id="form3"
                class="form-control validate"
              />
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Teléfono</label
              >
              <input
                type="text"
                v-model="selected.telefono"
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
              Registrar Usuario
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
            <form name="form" @submit.prevent="handleRegister">
              <div v-if="!successful">
                <div class="form-group">
                  <label for="nombre">Nombre</label>
                  <input
                    v-model="nuevo.nombre"
                    type="text"
                    class="form-control"
                    name="nombre"
                  />
                  <div
                    v-if="submitted && errors.has('nombre')"
                    class="alert-danger"
                  >
                    {{ errors.first("nombre") }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="apellido">Apellido</label>
                  <input
                    v-model="nuevo.apellido"
                    type="text"
                    class="form-control"
                    name="apellido"
                  />
                  <div
                    v-if="submitted && errors.has('apellido')"
                    class="alert-danger"
                  >
                    {{ errors.first("apellido") }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="correo">Correo</label>
                  <input
                    v-model="nuevo.correo"
                    type="email"
                    class="form-control"
                    name="correo"
                  />
                  <div
                    v-if="submitted && errors.has('correo')"
                    class="alert-danger"
                  >
                    {{ errors.first("correo") }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    v-model="nuevo.password"
                    type="password"
                    class="form-control"
                    name="password"
                  />
                  <div
                    v-if="submitted && errors.has('password')"
                    class="alert-danger"
                  >
                    {{ errors.first("password") }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="fecha_nacimiento">Fecha de nacimiento</label>
                  <input
                    v-model="nuevo.fecha_nacimiento"
                    type="date"
                    class="form-control"
                    name="fecha_nacimiento"
                  />
                  <div
                    v-if="submitted && errors.has('fecha_nacimiento')"
                    class="alert-danger"
                  >
                    {{ errors.first("fecha_nacimiento") }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="direccion">Dirección</label>
                  <input
                    v-model="nuevo.direccion"
                    type="text"
                    class="form-control"
                    name="direccion"
                  />
                  <div
                    v-if="submitted && errors.has('direccion')"
                    class="alert-danger"
                  >
                    {{ errors.first("direccion") }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="telefono">Telefono</label>
                  <input
                    v-model="nuevo.telefono"
                    type="text"
                    class="form-control"
                    name="telefono"
                  />
                  <div
                    v-if="submitted && errors.has('telefono')"
                    class="alert-danger"
                  >
                    {{ errors.first("telefono") }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="Tipo">Perfil</label>
                  <select
                    v-model="nuevo.perfil"
                    class="form-control form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                  >
                    <option
                      v-for="(perf, i) in perfiles"
                      :key="i"
                      :value="i + 1"
                      >{{ perf }}</option
                    >
                  </select>

                  <div
                    v-if="submitted && errors.has('perfil')"
                    class="alert-danger"
                  >
                    {{ errors.first("perfil") }}
                  </div>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary btn-block">Registrar</button>
                </div>
              </div>
            </form>
            <div
              v-if="message"
              class="alert"
              :class="successful ? 'alert-success' : 'alert-danger'"
            >
              {{ message }}
            </div>
          </div>

          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsuarioService from "../services/usuario.service";
import Usuario from "../models/usuario";
export default {
  data() {
    return {
      nuevo: new Usuario(),
      go: false,
      filter: "",
      content: "",
      usuarios: [],
      selected: new Usuario(),
      submitted: false,
      successful: false,
      message: "",
      perfiles: ["Admin", "Veterinario", "Cajero"],
    };
  },
  created() {
    if (this.showAdminBoard == false){
      this.goProfile()
    }
    UsuarioService.getUsuarios().then(
      (response) => {
        let info = response.data;
        for (var a in info) {
          this.usuarios.push(info[a]);
        }
      },
      (error) => {
        console.log("Pues hubo error socio" + error);
      }
    );
  },
  methods: {
    SetearNuevo() {
      this.nuevo = new Usuario();
    },
    handleRegister() {
      this.message = "";
      this.submitted = true;
      console.log(this.nuevo, "kajsdlkajsdklja");
      this.$store.dispatch("auth/register", this.nuevo).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
        },
        (error) => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
    },
    AñadirUsuario(usuario) {
      console.log(usuario);
      UsuarioService.postUsuario(usuario).then(
        (response) => {
          console.log("Exito añadiendo" + response);
          this.ActualizarTabla();
          this.nuevo = "";
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
      UsuarioService.editarUsuario(this.selected).then(
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
      UsuarioService.getUsuarios().then(
        (response) => {
          this.usuarios = response.data;
          console.log(response.data);
        },
        (error) => {
          console.log("Pues hubo error socio" + error);
        }
      );
    },
    EliminarUsuario(usuario) {
      UsuarioService.deleteUsuario(usuario.id).then(
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
    EditarUsuario(i) {
      //this.selected = this.propietarios[i];
      // asignación sin bindear
      this.selected = Object.assign({}, this.usuarios[i]);
    },

    goProfile() {
      this.$router.push("/profile");
    },
  },

  watch: {
    showAdminBoard: function(val) {
      if (val == false) {
        this.goProfile();
      }
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
      return this.usuarios.filter((usuario) => {
        const nombre = usuario.nombre.toString().toLowerCase();
        const apellido = usuario.correo.toString().toLowerCase();
        const numerodocumento = usuario.apellido.toString().toLowerCase();
        const searchTerm = this.filter.toString().toLowerCase();

        return (
          nombre.includes(searchTerm) ||
          apellido.includes(searchTerm) ||
          numerodocumento.includes(searchTerm)
        );
      });
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
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
