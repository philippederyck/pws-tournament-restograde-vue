<script setup>
import DataService from "@/data/data.service";
const restaurants = DataService.getRestaurants();
</script>

<template>
  <div class="row mt-5">
    <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        class="col-lg-4 col-md-12 card-group"
    >
      <div class="card card-cascade mt-2 mb-2">
        <div class="view view-cascade overlay">
          <img
              class="card-img-top"
              :alt="restaurant.name"
              :src="`https://raw.githubusercontent.com/philippederyck/pws-tournament-restograde-vue/master/src/assets/${restaurant.image}`"
          />
          <router-link :to="`/restaurants/${restaurant.id}/reviews`">
            <div class="mask rgba-white-slight"></div>
          </router-link>
        </div>

        <div class="card-body card-body-cascade text-center">
          <h5 class="card-title">{{ restaurant.name }}</h5>
          <h6 class="text-gray">{{ restaurant.city }}</h6>
          <p class="card-text">{{ restaurant.description }}</p>

          <router-link :to="`/restaurants/${restaurant.id}/reviews`">
            <button class="btn btn-primary">Reviews</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>