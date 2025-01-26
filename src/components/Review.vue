<script setup>

import {onMounted, useTemplateRef} from "vue";

const props = defineProps({
  review: Object
});


// Add the review content to the page
const content = useTemplateRef('content')
onMounted(() => {
  content.value.innerHTML = props.review.content;
})

</script>

<template>
  <div class="card-body">
    <h4 class="card-title">
      <span class="font-weight-bold">{{ props.review.rating }}/10</span>
      <span class="font-weight-light ml-3">{{ props.review.title }}</span>
      <span class="float-end">
            <router-link
                class="p-2 small btn btn-primary align-self-end"
                :to="`/reviews/${props.review.id}/edit`"
            >
              Edit
            </router-link>
          </span>
    </h4>
    <p
        ref="content"
        class="card-text pt-2"
    />
  </div>
</template>
