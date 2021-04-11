<template>
  <div>
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
                v-on:click="EditarMascota(i)"
                data-toggle="modal"
                data-target="#exampleModal"
                class="btn btn-info botoncito"
              >
                Editar
              </button>
              <button
                type="button"
                class="btn btn-danger botoncito"
                v-on:click="EditarMascota(i)"
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
  },
};
</script>

<style scoped>
.botoncito {
  margin: 1%;
}
</style>
