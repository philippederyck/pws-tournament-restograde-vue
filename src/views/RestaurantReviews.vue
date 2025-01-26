<script setup>
import DataService from "@/data/data.service";
import {useRoute} from "vue-router";
import Review from "@/components/Review.vue";

const route = useRoute();
const restaurant = DataService.getRestaurantById(route.params.id);
const reviews = DataService.getReviewsByRestaurantId(route.params.id);

</script>

<template>
  <div class="row justify-content-center mt-5">
    <div class="col-12 text-center">
      <h2>{{ restaurant.name }}</h2>
      <h6>{{ restaurant.description }}</h6>
    </div>
    <div
        v-for="review in reviews"
        :key="review.id"
        class="card w-75 mt-4 mb-2"
    >
      <Review :review="review"></Review>
    </div>
  </div>
</template>
