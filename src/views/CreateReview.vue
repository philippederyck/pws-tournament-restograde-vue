<script setup>
import ReviewForm from "@/components/ReviewForm.vue";
import DataService from "@/data/data.service.js";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const restaurants = DataService.getRestaurants();
const review = { restaurant_id: restaurants[0].id}

const handleSubmit = (data) => {
  const newReview = DataService.createReview(data);
  router.push(`/restaurants/${newReview.restaurant_id}/reviews`);
};
</script>

<template>
  <ReviewForm
      :review="review"
      :restaurants="restaurants"
      :onSubmit="handleSubmit"
  />
</template>
