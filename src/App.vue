<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Navigation />
    <main class="container-fluid mt-auto mb-auto">
      <RouterView />
    </main>
    <Footer />
</template>

