
<script setup lang="ts">
import { headerMenu } from '@/constant/header';
import { computed, onMounted, onUnmounted, ref } from 'vue';


const showNavbar = ref(false)
const scrollThreshold = ref(0)
const showMenu = ref('')
const isOpenCartDrawer = ref(false)


const navbarClass = computed(() => {
    return {
        'fixed': showNavbar.value,
        'top-0': showNavbar.value,
    }
})

const disableScroll = () => {
    document.body.style.overflow = "hidden";
}
const enableScroll = () => {
    document.body.style.overflow = "auto";
}

const openCartDrawer = () => {
    disableScroll()
    isOpenCartDrawer.value = true
}

const closeCartDrawer = () => {
    enableScroll()
    isOpenCartDrawer.value = false
}

const getInnerClass = () => {
    return showNavbar.value ? 'h-12' : 'h-20'
}

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
    <div class=" bg-indigo-100 border-b-2 main-site-padding mb-5  w-full" :class="navbarClass">
        <div class="flex justify-between items-center" :class="getInnerClass()">

            <div class="content-color ">abco</div>

            <div class="flex gap-3 relative h-full">

                <div class="h-full" @mouseover="showElement(headerMenu.HOME)" @mouseleave="hideElement()">
                    <div class=" flex items-center cursor-pointer  h-full">{{ headerMenu.HOME }}</div>
                    <CardMenuItem1 v-if="showMenu === headerMenu.HOME">
                    </CardMenuItem1>
                </div>

                <div class="h-full" @mouseover="showElement(headerMenu.ABOUT)" @mouseleave="hideElement()">
                    <div class=" flex items-center cursor-pointer   border-red-500 h-full">{{ headerMenu.ABOUT }}</div>
                    <CardMenuItem v-if="showMenu === headerMenu.ABOUT">
                    </CardMenuItem>
                </div>


            </div>

            <div class="flex">
                <div @click="openCartDrawer" class="cursor-pointer">icon1</div>
            </div>
        </div>
    </div>
    <Transition>
        <SideDrawer v-if="isOpenCartDrawer" @close-overlay="closeCartDrawer"></SideDrawer>
    </Transition>
</template>


<style  scoped>
.v-enter-active {
    transition: all .3s ease-out;
}

.v-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(500px);
}
</style>
 
