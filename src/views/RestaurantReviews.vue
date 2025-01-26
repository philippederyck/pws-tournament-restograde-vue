<script setup>
import DataService from "@/data/data.service";
import {useRoute} from "vue-router";

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
      <div class="card-body">
        <h4 class="card-title">
          <span class="font-weight-bold">{{ review.rating }}/10</span>
          <span class="font-weight-light ml-3">{{ review.title }}</span>
          <span class="float-end">
            <router-link
                class="p-2 small btn btn-primary align-self-end"
                :to="`/reviews/${review.id}/edit`"
            >
              Edit
            </router-link>
          </span>
        </h4>
        <p
            class="card-text pt-2"
            v-html="review.content"
        />
      </div>
    </div>
  </div>
</template>
