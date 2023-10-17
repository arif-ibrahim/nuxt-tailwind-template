<script setup lang="ts">

const emit = defineEmits(['closeOverlay'])
</script>


<template>
    <div class="inset-0 fixed z-20">
        <div class="relative">
            <div @click="emit('closeOverlay')"
                class="absolute w-4/5 h-screen inset-y-0 left-0 bg-black opacity-60 cursor-pointer">
            </div>
            <div class="absolute w-1/5 h-screen inset-y-0 right-0 bg-white">
            </div>
        </div>
    </div>
</template>
