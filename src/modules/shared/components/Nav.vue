<template>
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <router-link
          to="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <img
            class="bi me-2"
            src="../../../assets/logo.svg"
            alt=""
            width="40"
            height="30"
          />
          <use xlink:href="#bootstrap" />
        </router-link>

        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li>
            <router-link to="/" class="nav-link px-2 text-secondary"
              >Home</router-link
            >
          </li>
          <li>
            <router-link to="/Header" class="nav-link px-2 text-white"
              >Headers</router-link
            >
          </li>
          <li>
            <router-link to="/" class="nav-link px-2 text-white"
              >Details</router-link
            >
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            class="form-control form-control-dark text-bg-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div class="text-end">
          <router-link to="/login" class="btn btn-outline-light me-2">
            Login
          </router-link>
          <router-link to="/register" class="btn btn-warning me-2"
            >Register
          </router-link>
          <button @click="logout" class="btn btn-danger">Logout</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { useCookies } from "vue3-cookies";

export default {
  setup() {
    const { cookies } = useCookies();

    return {
      cookies,
    };
  },

  methods: {
    logout() {
      this.cookies.remove("token");
      location.reload();
    },
  },
};
</script>

<style scoped>
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
