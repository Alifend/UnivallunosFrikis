<template>
  <div>


    <!-- Table -->
    <div class="container">
      <table class="table text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fecha de emisión</th>
            <th scope="col">Motivo de Consulta </th>
            <th scope="col">Diagnóstico</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hist, i) in historias" :key="i">
            <th scope="row">{{ hist.id }}</th>
            <td>{{ hist.fecha_emision }}</td>            
            <td>{{ hist.motivo_consulta }}</td>
            <td>{{ hist.diagnostico }}</td>
            <td>
              <button
                type="button"
                class="btn btn-success botoncito"
                v-on:click="VerMascota(i)"
              >
                Ver
              </button>
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>

     <button type="button" v-on:click="Test()" class="btn btn-primary">
      Save changes
    </button>
  </div>
</template>

<script>
import HistoriaService from '../services/historia.service'
export default {
    data() {
    return {
      historias: [],
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
     


 },
};

</script>

<style scoped>



</style>
