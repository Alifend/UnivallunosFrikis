<template>
  <div>


        <!-- Añadir -->
    <button
      type="button"
      data-toggle="modal"
      v-on:click="SetearSelected()"
      data-target="#modalAñadir"
      class="botoncito btn btn-success float-right"
    >
      + Añadir Historia Clinica
    </button>

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
              Crear Mascota
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


    <!-- Table -->
    <div class="container">
      <table class="table text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fecha de emisión</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hist, i) in historias" :key="i">
            <th scope="row">{{ hist.id }}</th>
            <td>{{ hist.fecha_emision }}</td>
            <td>
              <button
                type="button"
                class="btn btn-success botoncito"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
                v-on:click="VerDetalle(i)"
              >
                Detalle
              </button>
              <button
                type="button"
                class="btn btn-danger botoncito"
                v-on:click="SetearSelected(i)"
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

    <!-- Modal Detalle -->
    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Detalle
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
                >Motivo de Consulta:
              </label>
              <textarea
                type="text"
                v-model="selected.motivo_consulta"
                id="form3"
                class="form-control validate"
                rows="7"
              ></textarea>
            </div>
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <label data-error="wrong" data-success="right" for="form3"
                >Diagnóstico:
              </label>

              <textarea
                class="form-control"
                type="text"
                v-model="selected.diagnostico"
                id="exampleFormControlTextarea1"
                rows="7"
              ></textarea>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              data-toggle="modal"
              data-target="#confirmarModal"
              class="btn btn-primary"
            >
              Guardar cambios
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Confirmación -->
    <div
      class="modal fade"
      id="confirmarModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="confirmarExample"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered  " role="document">
        <div class="modal-content ">
          <div class="modal-header ">
            <h5 class="modal-title centrado" id="exampleModalLabel">
              ¿Está seguro de guardar el cambio?
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
              class="btn btn-primary botoncito"
              v-on:click="EditarHistoria(selected)"
              data-dismiss="modal"
              aria-label="Close"
            >
              Guardar cambios
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

    <!-- Modal Eliminar -->
    <div
      class="modal fade"
      id="eliminarModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="eliminarExample"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered  " role="document">
        <div class="modal-content ">
          <div class="modal-header ">
            <h5 class="modal-title centrado" id="exampleModalLabel">
              ¿Está seguro de eliminar la historia?
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
              v-on:click="EliminarHistoria(selected)"
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
  </div>
</template>

<script>
import HistoriaService from "../services/historia.service";
export default {
  data() {
    return {
      historias: [],
      selected: "",
    };
  },

  created() {
    this.historias = [];
    let masc = JSON.parse(localStorage.getItem("mascota"));
    HistoriaService.getHistorias(masc.id).then(
      (response) => {
        let info = response.data;
        for (var a in info) {
          this.historias.push(info[a]);
        }
      },
      (error) => {
        console.log("Pues hubo error socio" + error);
      }
    );
  },

  methods: {
    VerDetalle(i) {
      this.selected = Object.assign({}, this.historias[i]);
    },
    EditarHistoria() {
      HistoriaService.editarHistoria(this.selected.id, this.selected).then(
        (response) => {
          console.log(response);
          this.ActualizarHistorias();
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    ActualizarHistorias() {
      this.historias = [];
      let masc = JSON.parse(localStorage.getItem("mascota"));
      HistoriaService.getHistorias(masc.id).then(
        (response) => {
          let info = response.data;
          for (var a in info) {
            this.historias.push(info[a]);
          }
        },
        (error) => {
          console.log("Pues hubo error socio" + error);
        }
      );
    },
    EliminarHistoria(selected) {
      HistoriaService.eliminarHistoria(selected.id).then(
        (response) => {
          console.log(response);
          this.ActualizarHistorias();
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    SetearSelected(i) {
      this.selected = Object.assign({}, this.historias[i]);
    },
  },
};
</script>

<style scoped>
.botoncito {
  margin: 1%;
}

.centrado {
  margin: auto;
  margin-right: 0.5%;
}
</style>
