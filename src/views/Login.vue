<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label class="text-center">Email</label>
          <input
            type="email"
            v-model="user.correo"
            class="form-control"
          /><br />
          <span
            v-if="
              (!$v.user.correo.required || !$v.user.correo.email) &&
                $v.user.correo.$dirty
            "
            class="text-danger alert alert-danger"
            role="alert"
          >
            Email requerido</span
          >
        </div>
        <div class="form-group">
          <label class="text-center">Password</label>
          <input
            type="password"
            v-model="user.password"
            class="form-control"
          /><br />
          <span
            v-if="!$v.user.password.required && $v.user.password.$dirty"
            class="text-danger alert alert-danger"
            role="alert"
          >
            Password requerido</span
          >
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import User from "../models/user.js";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
    };
  },
  validations: {
    user: {
      correo: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.loading = false;
        return;
      }
      if (this.user.correo && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push("/profile");
          },
          (error) => {
            this.loading = false;
            if (error.response.data.non_field_errors[0] == undefined) {
              this.message =
                (error.response && error.response.data.field) ||
                error.message ||
                error.toString();
            } else {
              this.message =
                (error.response && error.response.data.non_field_errors[0]) ||
                error.message ||
                error.toString();
            }
          }
        );
      }
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
