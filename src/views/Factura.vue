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
      v-on:click="ResetearTemp()"
      data-target="#crearModal"
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
            <th scope="col">Cliente</th>
            <th scope="col">Total</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(factura, i) in filteredRows" :key="i">
            <th scope="row">{{ i }}</th>
            <td>{{ factura.fecha_emision }}</td>
            <td>{{ factura.cliente }}</td>
            <td>{{ factura.total }}</td>
            <td>
              <button
                type="button"
                class="btn btn-success botoncito"
                v-on:click="VerDetalles(factura)"
                data-toggle="modal"
                data-target="#detallesModal"
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

    <!-- Modal Detalles -->
    <div
      class="modal fade"
      id="detallesModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="detallesModal"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-xl modal-dialog-scrollable "
        role="document"
      >
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
          <div class="modal-body">
            <div class="container">
              <table class="table text-center">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Servicio</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(detalle, i) in detalles" :key="i">
                    <th scope="row">{{ i }}</th>
                    <td>
                      <select
                        v-model="detalle.servicio"
                        class="form-control form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                        :disabled="true"
                      >
                        <option
                          v-for="(servicio, i) in servicios"
                          :key="i"
                          :value="servicio"
                          >{{ servicio.nombre }}</option
                        >
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="detalle.servicio.descripcion"
                        id="form3"
                        class="form-control validate"
                        readonly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="detalle.servicio.tipo"
                        id="form3"
                        class="form-control validate"
                        readonly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="detalle.servicio.precio"
                        id="form3"
                        class="form-control validate"
                        readonly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="detalle.cantidad"
                        id="form3"
                        class="form-control validate"
                        readonly
                      />
                    </td>
                  </tr>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </tbody>
              </table>
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
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Crear -->
    <div
      class="modal fade"
      id="crearModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="crearModal"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-xl modal-dialog-scrollable "
        role="document"
      >
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
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-3">
                  <label data-error="wrong" data-success="right" for="form3"
                    >Nombre:
                  </label>
                  <input type="text" id="form3" class="form-control validate" />
                </div>
                <div class="col-3">
                  <label data-error="wrong" data-success="right" for="form3"
                    >Dirección:
                  </label>
                  <input type="text" id="form3" class="form-control validate" />
                </div>
                <div class="col-3">
                  <label data-error="wrong" data-success="right" for="form3"
                    >Tipo de documento:
                  </label>
                  <select
                    v-model="temp.sexo"
                    class="form-control form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                  >
                    <option
                      v-for="(tipo, i) in ['C.C', 'T.I']"
                      :key="i"
                      :value="i + 1"
                      >{{ tipo }}</option
                    >
                  </select>
                </div>
                <div class="col-2">
                  <label data-error="wrong" data-success="right" for="form3"
                    >Documento:
                  </label>
                  <input type="text" id="form3" class="form-control validate" />
                </div>
              </div>
              <br />
              <table class="table text-center">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Servicio</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(nuevo, i) in nuevos" :key="i">
                    <th scope="row">{{ i }}</th>
                    <td>
                      <select
                        v-model="nuevo.servicio"
                        class="form-control form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                      >
                        <option
                          v-for="(servicio, i) in servicios"
                          :key="i"
                          :value="servicio"
                          >{{ servicio.nombre }}</option
                        >
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="nuevo.servicio.descripcion"
                        id="form3"
                        class="form-control validate"
                        readonly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="nuevo.servicio.tipo"
                        id="form3"
                        class="form-control validate"
                        readonly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="nuevo.servicio.precio"
                        id="form3"
                        class="form-control validate"
                        readonly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="nuevo.cantidad"
                        id="form3"
                        class="form-control validate"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        v-on:click="EliminarServicioTemporal(i)"
                        aria-label="Close"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </tbody>
              </table>
            </div>
          </div>

          <div class="modal-footer ">
            <table class="table text-center">
              <thead>
                <tr class="esconder">
                  <th scope="col">#</th>
                  <th scope="col">Servicio</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">-</th>
                  <td>
                    <select
                      v-model="temp.servicio"
                      class="form-control form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option
                        v-for="(servicio, i) in servicios"
                        :key="i"
                        :value="servicio"
                        >{{ servicio.nombre }}</option
                      >
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      v-model="temp.servicio.descripcion"
                      id="form3"
                      class="form-control validate"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      v-model="temp.servicio.tipo"
                      id="form3"
                      class="form-control validate"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      v-model="temp.servicio.precio"
                      id="form3"
                      class="form-control validate"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="form3"
                      v-model="cantidad"
                      class="form-control validate"
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      v-on:click="Agregar_a_Detalle()"
                      class="añadir btn btn-success float-right"
                    >
                      +
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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

export default {
  name: "Mascota",
  data() {
    return {
      tipos: ["Procedimiento", "Producto"],
      detalles_temporales: [],
      cantidad: "",
      temp: "",
      total : '',
      servicio: [],
      servicios: [],
      detalles: [],
      mostrar: false,
      raza_nueva: "",
      ids: [],
      temporal: "",
      filter: "",
      content: "",
      facturas: [],
      nuevos: "",
      selected: new Factura(),
    };
  },
  created() {
    this.ResetearTemp();
    this.facturas = [];
    FacturaService.getFacturas().then(
      (response) => {
        let info = response.data;
        for (var a in info) {
          this.facturas.push(info[a]);
        }
        //this.ActualizarTabla();
      },
      (error) => {
        console.log("Pues hubo error socio" + error);
      }
    );
  },
  methods: {
    EliminarServicioTemporal(i) {
      this.nuevos.splice(i, 1);
    },
    Agregar_a_Detalle() {
      let lista = {
        servicio: this.temp.servicio,
        cantidad: this.cantidad,
        precio: this.temp.servicio.precio * this.cantidad,
      };
      console.log(lista, "asjdlkasjdklasjdkl");
      this.nuevos.push(lista);
    },
    ResetearTemp() {
      this.nuevos = [
        {
          factura: "",
          servicio: {
            id: "",
            nombre: "",
            descripcion: "",
            tipo: "",
            precio: "",
          },
          cantidad: "",
          precio: "",
        },
      ];
      this.temp = {
        servicio: {
          id: "",
          nombre: "",
          descripcion: "",
          tipo: "",
          precio: "",
        },
      };
      this.GuardarServicios();
    },
    SetearSelected() {
      this.nuevos = [
        {
          factura: "",
          servicio: {
            id: "",
            nombre: "",
            descripcion: "",
            tipo: "",
            precio: "",
          },
          cantidad: "",
          precio: "",
        },
      ];
      this.GuardarServicios();
    },

    VerDetalles(factura) {
      localStorage.setItem("factura", JSON.stringify(factura));
      FacturaService.getDetalles(factura.id).then(
        (response) => {
          console.log(response);
          this.detalles = response.data;
          this.GuardarServicios();
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    GuardarServicios() {
      FacturaService.getServicios().then(
        (response) => {
          console.log(response);
          this.servicios = response.data;
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
      console.log(i, "oh");
      this.selected = Object.assign({}, this.mascotas[i]);
    },
  },
  watch: {
    selected: {
      handler: function(val) {
        console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaa");
        if (this.selected.numero_especie == undefined) {
          console.log("I'm in");
          this.mostrar = true;
          this.razas = [];
          this.ids = [];
        } else {
          console.log("I'm out");
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
      return this.facturas.filter((factura) => {
        const nombre = factura.fecha_emision.toString().toLowerCase();

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
  width: 70%;
  margin-top: 0%;
}
.distancia {
  margin: 1%;
}
.esconder {
  display: none;
}
</style>
