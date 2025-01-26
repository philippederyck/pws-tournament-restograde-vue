<script setup>
import ReviewForm from "@/components/ReviewForm.vue";
import DataService from "@/data/data.service.js";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();
const review = DataService.getReviewById(route.params.id);
const restaurants = DataService.getRestaurants();
const handleSubmit = (data) => {
  const updatedReview = DataService.updateReview(data);
  router.push(`/restaurants/${updatedReview.restaurant_id}/reviews`);
};
</script>

<template>
  <ReviewForm
      :review="review"
      :restaurants="restaurants"
      :onSubmit="handleSubmit"
  />
</template>