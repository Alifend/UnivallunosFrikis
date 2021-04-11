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
    EditarHistoria(){
      HistoriaService.editarHistoria(this.selected.id,this.selected).then(
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
    ActualizarHistorias(){

    },
    EliminarHistoria(){

    }

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
