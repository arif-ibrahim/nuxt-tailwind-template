<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">

const { isCartDrawerActive, openCartDrawer, closeCartDrawer } = useCartDrawer()
provide('isCartDrawerActive', isCartDrawerActive)
provide('openCartDrawer', openCartDrawer)
provide('closeCartDrawer', closeCartDrawer)

</script>
