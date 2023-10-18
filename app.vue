<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";


const isCartDrawerActive = ref(false)

provide('isCartDrawerActive', isCartDrawerActive);

</script>
