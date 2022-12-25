<template>
  <div id="rootLogin" class="text-center">
    <main class="form-signin w-100 m-auto">
      <form @submit.prevent="submit">
        <img
          class="mb-4"
          src="../assets/logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="data.userName"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="data.password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
    </main>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import http from "../http-common";
import { useCookies } from "vue3-cookies";

export default {
  setup() {
    const { cookies } = useCookies();
    const router = useRouter();
    const data = reactive({
      userName: "",
      password: "",
    });

    const submit = async () => {
      await http
        .post("/Account/Login", data)
        .then((res) => {
          cookies.set("token", res.data.token);
          router.push("/");
        })
        .catch((err) => {
          console.log("Cookies error");
        });
    };

    return {
      data,
      submit,
      cookies,
    };
  },
};
</script>

<style scoped>
@import "../assets/css/login/signin.css";
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>
