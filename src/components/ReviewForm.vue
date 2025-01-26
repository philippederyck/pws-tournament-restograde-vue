<script setup>
import {MDBInput, MDBBtn, MDBTextarea} from "mdb-vue-ui-kit";

const props = defineProps({
  review: Object,
  restaurants: Array,
  onSubmit: Function,
});

function handleSubmit() {
  props.onSubmit(props.review)
}
</script>

<template>
  <div class="row mt-5">
    <div class="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12 text-center">
      <form @submit.prevent="handleSubmit">
        <select
            class="browser-default custom-select"
            name="restaurant_id"
            v-model="props.review.restaurant_id"
        >
          <option
              v-for="restaurant in restaurants"
              :key="restaurant.id"
              :value="restaurant.id"
          >
            {{ restaurant.name }}
          </option>
        </select>

        <MDBInput
            class="m-2"
            type="number"
            label="Your rating"
            name="rating"
            v-model="props.review.rating"
        />

        <MDBInput
            class="m-2"
            type="text"
            label="Title"
            name="title"
            v-model="props.review.title"
        />

        <MDBTextarea
            label="How was your experience?"
            name="content"
            v-model="props.review.content"
        />

        <MDBBtn type="submit" color="primary" class="mt-3">
          Submit Review
        </MDBBtn>
      </form>
    </div>
  </div>
</template>
