<script setup>
// Load advertisement data from our ad program
import advertisement from "@/data/ad.js";

function makeSafe(url) {
  // Remove whitespace
  url = url.trim();

  // Replace dangerous URL pattern
  url = url.replace("javascript:", "unsafe:");

  return url;
}
</script>
<template>
  <footer class="page-footer mt-auto font-small bg-light pt-2 mt-4">
    <div class="container-fluid text-center text-md-left">
      <div class="advertisement-row row m-3">
        <div id="advertisement-container" class="advertisement-col col-lg-8 offset-lg-2 text-center">
          <a :href="makeSafe(advertisement.url)">
            {{advertisement.text}}
          </a>
        </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3">
      Restograde is a training application provided by
      <a
          href="https://pragmaticwebsecurity.com/"
          target="_blank"
          rel="noopener noreferrer"
      >
        Pragmatic Web Security
      </a>
      . All data in this application is fictional. Photos from
      <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
        Unsplash
      </a>
      .
    </div>
  </footer>
</template>
