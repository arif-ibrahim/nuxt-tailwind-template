<template>
    <div class="border rounded-sm text-gray-600 text-sm">
        <button :class="buttonClass" class="border-r align-text-bottom">
            <Icon name="icon-park-outline:plus" />
        </button>
        <input :class="buttonClass" class=" text-center align-text-bottom" type="text" value="2">
        <button :class="buttonClass" class="border-l  align-text-bottom">
            <Icon name="icon-park-outline:minus" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { buttonSize } from "@/constant/size";
import { computed } from "vue";


interface Props {
    size?: string
}

const props = withDefaults(defineProps<Props>(), {
    size: '',
})

const buttonClass = computed(() => {
    if (props.size === '') {
        return 'h-6 w-6'

    } else if (props.size === buttonSize.MEDIUM)
        return 'h-9 w-9'
})



</script>

<style scoped></style>