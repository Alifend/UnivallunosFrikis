<template>
  <div>
    <!-- Header -->
    <header class="jumbotron">
      <h1>Mascotas</h1>
    </header>

    <!-- Añadir -->
    <button
      type="button"
      data-toggle="modal"
      data-target="#modalAñadir"
      class="añadir btn btn-success float-right"
    >
      + Añadir Mascota
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
            <th scope="col">Nombre</th>
            <th scope="col">Sexo</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Raza</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(mascota, i) in filteredRows" :key="i">
            <th scope="row">{{ mascota.id }}</th>
            <td>{{ mascota.nombre }}</td>
            <td>{{ mascota.sexo }}</td>
            <td>{{ mascota.fecha_nacimiento }}</td>
            <td>{{ mascota.raza }}</td>
            <td>
              <button
                type="button"
                class="btn btn-success botoncito"
                v-on:click="VerMascota(i)"
              >
                Historia Clínica
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
               <option v-for="(gen, i) in generos" :key="i" :value=i+1 >{{
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
                v-model="especie"
                class="form-control form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
              <option v-for="(especie, i) in dict_especies" :key="i" :value=dict_especies[i] >{{
                  dict_especie[i]
                }}</option>
              </select>
            </div>
            <label data-error="wrong" data-success="right" for="form3"
              >Raza</label
            >
            <div class="md-form cuadrado">
              <i class="fas fa-user prefix grey-text"></i>

              <select
                v-model="raza"
                class="form-control form-select-lg mb-3 col-sm-8"
                aria-label=".form-select-lg example"
              >
                <option v-for="(raz, i) in razas" :key="i" :value=i+1 >{{
                  raz
                }}</option>
              </select>

              <button
                type="button"
                data-toggle="modal"
                data-target="#razaModal"
                class="añadir btn btn-success col-sm-4 pequeño"
              >
                + Añadir Raza
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
              v-on:click="CrearRaza(raza_nueva,especie)"
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

    

    <button type="button" v-on:click="Test()" class="btn btn-primary">
      Save changes
    </button>
  </div>
</template>

<script>
import MascotaService from "../services/mascota.service";
import Mascota from "../models/mascota";
export default {
  name: "Mascota",
  data() {
    return {
      raza_nueva: "",
      ids:[],
      raza: "",
      razas: [],
      especie: "",
      especies: ["Canino","Felino","Equino","Bovino","Porcino"],
      dict_especies: {
        "Canino" : 1, 1: "Canino", "Felino": 2, 2 :"Felino",
        "Equino" : 3, 3 : "Equino", "Bovino" : 6, 4 :"Bovino",
        "Porcino" : 5, 5 : "Porcino"
      },
      filter: "",
      content: "",
      mascotas: [],
      generos: ["F","M"],    
      animales: "",
      propietario: "",
      selected: new Mascota(),
    };
  },
  created() {
    this.mascotas = [];
    let prop = JSON.parse(localStorage.getItem("propietario"));
    MascotaService.getMascotas(prop.id).then(
      (response) => {
        let info = response.data;
        for (var a in info) {
          this.mascotas.push(info[a]);
        }
      },
      (error) => {
        console.log("Pues hubo error socio" + error);
      }
    );
  },
  methods: {
    ActualizarRazas(){
      MascotaService.getRazas(this.especie).then(
        (response) => {
          this.razas= [];
          this.ids=[];
          for (let i = 0; i<response.data.length;i++){
            this.razas.push(response.data[i].nombre)
            this.ids.push(response.data[i].id)
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
    CrearRaza(raza,especie){
      this.raza_nueva=""
      MascotaService.crearRaza(raza,especie).then(
        (response) => {
          console.log("Exito creando raza" + response);
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );

      this.ActualizarRazas()
    
    },
    Test() {
      console.log(this.mascotas);
    },
    PeticionPut() {
      this.selected.raza=this.ids[this.raza]
      this.selected.especie=this.especie
      MascotaService.editarMascota(this.selected).then(
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
      let id = JSON.parse(localStorage.getItem("propietario")).id;
      MascotaService.getMascotas(id).then(
        (response) => {
          this.mascotas = response.data;
        },
        (error) => {
          console.log("Pues hubo error socio" + error);
        }
      );
    },
    VerMascota(i) {
      //Pendiente para ver historia clínica
      MascotaService.getMascotas(this.mascotas[i].id).then(
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
    EliminarMascota(i) {
      MascotaService.deleteMascota(this.mascotas[i].id).then(
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
    EditarMascota(i) {
      // asignación sin bindear
      this.selected = Object.assign({}, this.mascotas[i]);
    },
  },
  watch: {
    especie: function (val) {

      MascotaService.getRazas(this.dict_especies[val]).then(
        (response) => {
          this.razas= [];
          this.ids=[];
          for (let i = 0; i<response.data.length;i++){
            this.razas.push(response.data[i].nombre)
            this.ids.push(response.data[i].id)
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
