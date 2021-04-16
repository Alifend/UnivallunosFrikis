<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        Perfil de <strong>{{ currentUser.nombre}} {{ currentUser.apellido }}</strong>
      </h3>
    </header>
     <p>
      <strong>Email:</strong>
      {{ currentUser.correo }}
    </p>
    <p>
      <strong>Telefono:</strong>
      {{ currentUser.telefono }}
    </p>
   <p>
      <strong>direccion:</strong>
      {{ currentUser.direccion }}
    </p>
    <p>
      <strong>Fecha de Nacimiento:</strong>
      {{ currentUser.fecha_nacimiento }}
    </p>
    <p>
      <strong>Perfil:</strong>
      {{ rol[currentUser.perfil-1] }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      rol: ["Administrador", "Veterinario", "Cajero"],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
.jumbotron {
  /* background-image: url('../assets/banner_2.jpg');
  background-size: cover;
  border-style:solid;
  border-color : #ffffff
  */
  /*background: url('../assets/profile.jpg') no-repeat center center; 
    -webkit-background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -o-background-size: 100% 100%;
    background-size: 100% 100%;*/
}
</style>
