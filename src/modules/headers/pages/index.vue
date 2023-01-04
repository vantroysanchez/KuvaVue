<template>
  <div class="card m-5" v-if="items">
    <div class="card-header">Header</div>
    <div class="card-body">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.code">
            <th scope="row">{{ item.code }}</th>
            <td>{{ item.description }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.totalAmount }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderService from "../../headers/services/HeaderService";
import type { ListIHeaderOnely } from "../../headers/interfaces/HeaderOnly";
import type { ResponseData } from "../../shared/interfaces/ResponseData";
import { ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const items = ref([{}] as ListIHeaderOnely);

    return {
      items,
    };
  },

  methods: {
    GetAll() {
      HeaderService.getAll().then((result: ResponseData) => {
        this.items = result.data;
        //console.table(result.data);
      });
    },
  },
  mounted() {
    this.GetAll();
  },
});
</script>

<style></style>
