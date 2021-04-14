<template>
  <div>
    <!-- Header -->
    <header class="jumbotron">
      <h1>Facturas</h1>
    </header>

    <!-- Añadir -->
    <button
      type="button"
      data-toggle="modal"
      v-on:click="SetearSelected()"
      data-target="#modalAñadir"
      class="añadir btn btn-success float-right"
    >
      + Añadir Factura
    </button>

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
      <table class="table text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fecha de emisión</th>
            <th scope="col">Total</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(factura, i) in filteredRows" :key="i">
            <th scope="row">{{ i }}</th>
            <td>{{ factura.fecha_emision }}</td>
            <td>{{ factura.total }}</td>
            <td>
              <button
                type="button"
                class="btn btn-success botoncito"
                v-on:click="verDetalles(factura)"
              >
                Detalles
              </button>
              <button
                type="button"
                v-on:click="EditarDetalles(factura)"
                data-toggle="modal"
                data-target="#exampleModal"
                class="btn btn-info botoncito"
              >
                Editar
              </button>
              <button
                type="button"
                class="btn btn-danger botoncito"
                v-on:click="EditarDetalles(factura)"
                data-toggle="modal"
                data-target="#eliminarModal"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
              Crear Factura
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
                >Género</label
              >
              <select
                v-model="selected.sexo"
                class="form-control form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option v-for="(gen, i) in generos" :key="i" :value="i + 1">{{
                  gen
                }}</option>
              </select>
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Fecha de Nacimiento</label
              >
              <input
                type="date"
                v-model="selected.fecha_nacimiento"
                id="form3"
                class="form-control validate"
              />
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Especie</label
              >
              <select
                v-model="selected.numero_especie"
                class="form-control form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option
                  v-for="(especie, i) in especies"
                  :key="i"
                  :value="i + 1"
                  >{{ especie }}</option
                >
              </select>
            </div>
            <label data-error="wrong" data-success="right" for="form3"
              >Raza</label
            >
            <div class="md-form cuadrado">
              <i class="fas fa-user prefix grey-text"></i>

              <select
                v-model="selected.raza"
                class="form-control form-select-lg mb-3 col-sm-6  "
                aria-label=".form-select-lg example"
                :disabled="mostrar"
              >
                <option v-for="(raz, i) in razas" :key="i" :value="ids[i]">{{
                  raz
                }}</option>
              </select>

              <button
                type="button"
                data-toggle="modal"
                data-target="#razaModal"
                class="añadir btn btn-success botoncito col-sm-3 pequeño"
              >
                Añadir
              </button>

              <button
                type="button"
                class="btn btn-danger botoncito pequeño col-sm-3"
                data-toggle="modal"
                data-target="#eliminarrazaModal"
                data-dismiss="modal"
                aria-label="Close"
                :disabled="mostrar"
              >
                Eliminar
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              v-on:click="AñadirMascota()"
              data-dismiss="modal"
              class="btn btn-primary"
            >
              Save changes
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Editar-->
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
              Editar Mascota
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
                >Género</label
              >
              <select
                v-model="selected.sexo"
                class="form-control form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option v-for="(gen, i) in generos" :key="i" :value="i + 1">{{
                  gen
                }}</option>
              </select>
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Fecha de Nacimiento</label
              >
              <input
                type="date"
                v-model="selected.fecha_nacimiento"
                id="form3"
                class="form-control validate"
              />
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Especie</label
              >
              <select
                v-model="selected.numero_especie"
                class="form-control form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option
                  v-for="(especie, i) in especies"
                  :key="i"
                  :value="i + 1"
                  >{{ especie }}</option
                >
              </select>
            </div>
            <label data-error="wrong" data-success="right" for="form3"
              >Raza</label
            >
            <div class="md-form cuadrado">
              <i class="fas fa-user prefix grey-text"></i>

              <select
                v-model="selected.raza"
                class="form-control form-select-lg mb-3 col-sm-6  "
                aria-label=".form-select-lg example"
              >
                <option v-for="(raz, i) in razas" :key="i" :value="ids[i]">{{
                  raz
                }}</option>
              </select>

              <button
                type="button"
                data-toggle="modal"
                data-target="#razaModal"
                class="añadir btn btn-success botoncito col-sm-3 pequeño"
              >
                Añadir
              </button>

              <button
                type="button"
                class="btn btn-danger botoncito pequeño col-sm-3"
                data-toggle="modal"
                data-target="#eliminarrazaModal"
                data-dismiss="modal"
                aria-label="Close"
              >
                Eliminar
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              v-on:click="PeticionPut()"
              data-dismiss="modal"
              class="btn btn-primary"
            >
              Save changes
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
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
              ¿Está seguro de borrar la mascota?
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
              v-on:click="EliminarMascota(selected)"
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

    <!-- Modal Eliminar Raza -->
    <div
      class="modal fade"
      id="eliminarrazaModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="eliminarModalExample"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered  " role="document">
        <div class="modal-content ">
          <div class="modal-header ">
            <h5 class="modal-title centrado" id="exampleModalLabel">
              ¿Está seguro de borrar la raza?
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
              v-on:click="EliminarRaza()"
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

    <!-- Modal Raza -->
    <div
      class="modal fade"
      id="razaModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="eliminarModalExample"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered  " role="document">
        <div class="modal-content ">
          <div class="modal-header ">
            <h5 class="modal-title centrado" id="exampleModalLabel">
              Añadir Raza
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              v-on:click="AñadirRaza()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex justify-content-center">
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Nombre:
              </label>
              <input
                type="text"
                v-model="raza_nueva"
                id="form3"
                class="form-control validate"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary botoncito"
              v-on:click="CrearRaza(raza_nueva, especie)"
              data-dismiss="modal"
              aria-label="Close"
            >
              Crear
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

  
  </div>
</template>

<script>
import FacturaService from "../services/factura.service";
import Factura from "../models/factura";
import Detalle from "../models/detalle";

export default {
  name: "Mascota",
  data() {
    return {
      servicio:[],
      mostrar: false,
      nuevo: "",
      raza_nueva: "",
      ids: [],
      temporal: "",
      filter: "",
      content: "",
      facturas: [],
      dasd: new Detalle(),
      selected: new Factura(),
    };
  },
  created() {
    this.facturas = [];
    FacturaService.getFacturas().then(
      (response) => {
        let info = response.data;
        for (var a in info) {
          this.facturas.push(info[a]);
        }
        this.ActualizarTabla();
      },
      (error) => {
        console.log("Pues hubo error socio" + error);
      }
    );
  },
  methods: {
    AñadirMascota() {
      FacturaService.createMascota(this.selected).then(
        (response) => {
          this.ActualizarTabla();
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
    SetearSelected() {
        //Cambio
      this.EditarMascota()
      this.selected.nombre = "";
      this.selected.sexo = "";
      this.selected.fecha_nacimiento = "";
      this.selected.raza = "";
      let id = JSON.parse(localStorage.getItem("propietario")).id;
      this.selected.propietario = id;
    },
    EliminarRaza() {
      console.log("klasjdklsajdkasj");
      FacturaService.deleteRaza(this.selected.raza).then(
        (response) => {
          console.log(response);
          this.ActualizarRazas();
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
      this.ActualizarRazas();
      this.raza = "";
    },
    ActualizarRazas() {
      FacturaService.getRazas(this.selected.numero_especie).then(
        (response) => {
          this.razas = [];
          this.ids = [];
          for (let i = 0; i < response.data.length; i++) {
            this.razas.push(response.data[i].nombre);
            this.ids.push(response.data[i].id);
          }
          console.log(this.razas);
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    CrearRaza(raza) {
      this.raza_nueva = "";
      FacturaService.crearRaza(raza, this.selected.numero_especie).then(
        (response) => {
          console.log("Exito creando raza" + response);
          //let temp = this.selected
          //this.selected = 0
          //this.selected = temp
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );

      this.ActualizarRazas();
    },
    Test() {
      console.log(this.mascotas);
    },
    PeticionPut() {
      console.log();

      this.selected.especie = this.especie;
      FacturaService.editarMascota(this.selected).then(
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
      let todo = [];
      FacturaService.getFacturas().then(
        (response) => {
          //this.mascotas
          todo = response.data;

          FacturaService.getRacitas().then(
            (response) => {
              console.log(response.data);

              for (var j = 0; j < todo.length; j++) {
                for (var i = 0; i < response.data.length; i++) {
                  if (todo[j].raza == response.data[i].id) {
                    todo[j].nombre_raza = response.data[i].nombre;
                    todo[j].nombre_especie = this.especies[
                      response.data[i].especie - 1
                    ];
                    todo[j].numero_especie = response.data[i].especie;
                  }
                }
              }
              this.mascotas = todo;
              //mascota.numero_especie= raza.especie
            },
            (error) => {
              console.log("Pues hubo error socio" + error);
            }
          );
        },
        (error) => {
          console.log("Pues hubo error socio" + error);
        }
      );

      //todo.mascota.nombre_raza =raza.nombre
      //mascota.nombre_especie= this.especies[raza.especie+1]
      //mascota.numero_especie= raza.especie

      console.log(this.mascotas);
    },

    VerMascota(i) {
      //Pendiente para ver historia clínica
      FacturaService.getHistoriasClinicas(this.mascotas[i].id).then(
        (response) => {
          console.log(response);
          localStorage.setItem("mascota", JSON.stringify(this.mascotas[i]));
          this.$router.push("/historias_clinicas");
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    EliminarMascota(i) {
      FacturaService.deleteMascota(i.id).then(
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
    EditarMascota(i) {
      // asignación sin bindear
      console.log(i, "oh");
      this.selected = Object.assign({}, this.mascotas[i]);
    },
  },
  watch: {
    selected: {
      handler: function(val) {
        console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaa");
        if (this.selected.numero_especie == undefined) {
          console.log("I'm in")
          this.mostrar = true;
          this.razas = [];
          this.ids = [];
        } else {
          console.log("I'm out")
          this.mostrar = false;

          FacturaService.getRazas(val.numero_especie).then(
            (response) => {
              this.razas = [];
              this.ids = [];
              for (let i = 0; i < response.data.length; i++) {
                this.razas.push(response.data[i].nombre);
                this.ids.push(response.data[i].id);
              }
              console.log(this.razas);
            },
            (error) => {
              this.content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      },
      deep: true,
    },
  },
  computed: {
    filteredRows() {
      return this.mascotas.filter((mascota) => {
        const nombre = mascota.nombre.toString().toLowerCase();

        const searchTerm = this.filter.toString().toLowerCase();

        return nombre.includes(searchTerm);
      });
    },

  },
};
</script>

<style scoped>
.botoncito {
  margin: 1%;
}

.añadir {
  margin: 1%;
}

label {
  display: inline-block;
  text-align: right;
}

.cuadrado {
  display: flex;
}

.pequeño {
  height: 77%;
  width: 100%;
  margin-top: 0%;
}
</style>
