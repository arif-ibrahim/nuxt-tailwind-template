
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
        'py-4': showNavbar.value,
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
    <div class="bg-slate-50 border-b-2  main-site-padding mb-5 w-full  " :class="navbarClass">
        <div class="flex justify-between py-10 " :class="navbarInnerClass">
            <div class="content-color">abco</div>
            <div class="flex gap-3">
                <div class="relative">
                    <div @mouseover="showElement(headerMenu.HOME)" @mouseleave="hideElement()" >
                        <div class=" cursor-pointer border-2   border-red-500"
                        >{{ headerMenu.HOME }}</div>
                    <CardMenuItem1 v-if="showMenu === headerMenu.HOME">
                    </CardMenuItem1>
                    </div>
                </div>
                <div class="relative">
                   <div @mouseover="showElement(headerMenu.ABOUT)" @mouseleave="hideElement()">
                    <div class=" cursor-pointer border-2   border-red-500"
                        >{{ headerMenu.ABOUT }}</div>
                    <CardMenuItem  v-if="showMenu === headerMenu.ABOUT">
                    </CardMenuItem>
                   </div>
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
