<script setup lang="ts">

const emit = defineEmits(['closeOverlay'])
</script>


<template>
    <div class="inset-0 fixed">
        <div class="relative">
            <div @click="emit('closeOverlay')"
                class="absolute w-3/4 h-screen inset-y-0 left-0 bg-black opacity-60 cursor-pointer">
            </div>
            <div class="absolute w-1/4 h-screen inset-y-0 right-0 bg-red-100">
            </div>
        </div>
    </div>
</template>