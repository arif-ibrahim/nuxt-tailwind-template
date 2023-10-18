<template>
    <div class="main-site-padding mt-14">
        <div class="mb-10 text-center">
            <div class="mb-1 text-2xl font-medium">New Arrivals</div>
            <div class="text-sm">We have your occassion covered</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
            <div v-for="i in 10">
                <CardProduct></CardProduct>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>