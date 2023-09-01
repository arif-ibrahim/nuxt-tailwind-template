
<script setup lang="ts">
import { headerMenu } from '@/constant/header';
import { computed, onMounted, onUnmounted, ref } from 'vue';


const showNavbar = ref(false)
const scrollThreshold = ref(0)
const showMenu = ref('')


const navbarClass = computed(() => {
    return {
        'fixed': showNavbar.value,
        'top-0': showNavbar.value,
    }
})

const navbarInnerClass = computed(() => {
    return {
        'h-12': showNavbar.value,
    }
})

const showElement = (menu: string) => {
    showMenu.value = menu
}

const hideElement = () => {
    showMenu.value = ''
}


const toggleNavbar = () => {
    showNavbar.value = window.scrollY < scrollThreshold.value && window.scrollY > 40
    scrollThreshold.value = window.scrollY
}


onMounted(() => {
    window.addEventListener('scroll', toggleNavbar);
})


onUnmounted(() => {
    window.removeEventListener('scroll', toggleNavbar)
})
</script>
<template>
    <div class="bg-indigo-300 border-b-2 main-site-padding mb-5  w-full" :class="navbarClass">
        <div class="flex justify-between h-20 items-center" :class="navbarInnerClass">

            <div class="content-color ">abco</div>

            <div class="flex gap-3 relative h-full">
              
                    <div class="h-full" @mouseover="showElement(headerMenu.HOME)" @mouseleave="hideElement()" >
                        <div class=" flex items-center cursor-pointer  h-full"
                        >{{ headerMenu.HOME }}</div>
                        <CardMenuItem1 v-if="showMenu === headerMenu.HOME">
                        </CardMenuItem1>
                    </div>

                    <div class="h-full" @mouseover="showElement(headerMenu.ABOUT)" @mouseleave="hideElement()" >
                        <div class=" flex items-center cursor-pointer   border-red-500 h-full"
                        >{{ headerMenu.ABOUT }}</div>
                        <CardMenuItem v-if="showMenu === headerMenu.ABOUT">
                        </CardMenuItem>
                    </div>

            </div>

            <div class="flex">
                <div>icon1</div>
                <div>icon2</div>
                <div>icon3</div>
            </div>

        </div>
    </div>
</template>
