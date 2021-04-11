<template>
  <div class="container">
    <header class="jumbotron"></header>

    <div>
      <div v-if="showAdminBoard" class="nav-item">
        <Register>
        </Register>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "User",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
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
  },
};
</script>
