<template>
    <LayoutHomeBanner v-if="loaded"></LayoutHomeBanner>
    <div class="main-site-padding mt-5">
        <div class="grid grid-cols-4 gap-4 ">
            <div v-for="i in 10" class="bg-slate-100 h-96"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const loaded = ref(false)
onMounted(() => {
    loaded.value = true
})
</script>