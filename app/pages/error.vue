<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || 'Something Went Wrong';
</script>

<template>
  <div class="container h-screen flex items-center justify-center">
    <div class="-mt-20 bg-base-400 w-96 flex items-center justify-between gap-8 flex-col">
      <h2 class="text-9xl font-black font-serif">
        Oops!
      </h2>
      <p class="">
        {{ error }}
      </p>
      <div class="card-actions justify-center">
        <NuxtLink to="/" class="btn btn-primary">
          GO TO HOMEPAGE
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
