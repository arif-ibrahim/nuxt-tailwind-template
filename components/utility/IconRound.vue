<template>
    <div>
        <button class="rounded-full bg-white hover:bg-black hover:text-white h-9 w-9">
            <Icon :name="iconLocal" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['icon']);
const iconLocal = ref(props.icon)

</script>

<style scoped></style>