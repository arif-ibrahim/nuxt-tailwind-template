<template>
    <div
        class="flex flex-col justify-between bg-cover bg-center bg-no-repeat w-full h-[420px] bg-[url('/bag3.webp')] hover:bg-[url('/bag.webp')] hover:cursor-pointer">
        <div>
            <!-- <div class="text-xs m-1">
                <span class="bg-emerald-400 text-white p-0.5">Best Selling!</span>
            </div> -->
        </div>
        <div class="flex gap-5 justify-center mb-3">
            <UtilityIconRound icon="clarity:shopping-cart-line" @click="openCartDrawer" />
            <UtilityIconRound icon="mdi:magnify" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from "vue";


const openCartDrawer: any = inject('openCartDrawer')

</script>

<style scoped></style>