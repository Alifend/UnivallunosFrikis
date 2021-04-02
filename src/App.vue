<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href class="navbar-brand" @click.prevent></a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/vet" class="nav-link">
            <font-awesome-icon icon="home" /> Clientes
          </router-link>
        </li>

        
        <li class="nav-item">
          <router-link v-if="currentUser" to="/profile" class="nav-link"
            >Perfil</router-link
          >
        </li>
      </div>


      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
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
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.perfil) {
        return this.currentUser.perfil == 2;
      }

      return false;
    }
  },
  watch:{
    showModeratorBoard: function (val){
      if (val == 2){
        this.goVet()
      }
    }
    
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    }
  },
};
</script>
