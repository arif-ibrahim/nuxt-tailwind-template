<script setup lang="ts">
import { headerMenu } from '@/constant/header';
import { computed, inject, onMounted, onUnmounted, ref } from 'vue';


const isCartDrawerActive: any = inject('isCartDrawerActive')
const openCartDrawer: any = inject('openCartDrawer')
const closeCartDrawer: any = inject('closeCartDrawer')

const showNavbar = ref(false)
const scrollThreshold = ref(0)
const initialThreshold = ref(40)
const showMenu = ref('')
const initialNavState = ref(true)


const navbarClass = computed(() => {
    return {
        'fixed': showNavbar.value,
        'relative': !showNavbar.value,
        'top-0': showNavbar.value,
        'bg-gray-50/80': showNavbar.value,
        'opacity-100': initialNavState.value || showNavbar.value,
        'translate-y-0': initialNavState.value || showNavbar.value,
    }
})



const getInnerClass = () => {
    return showNavbar.value ? 'h-12' : 'h-16'
}

const showElement = (menu: string) => {
    showMenu.value = menu
}

const hideElement = () => {
    showMenu.value = ''
}


const toggleNavbar = () => {
    initialNavState.value = window.scrollY <= initialThreshold.value
    showNavbar.value = window.scrollY < scrollThreshold.value && window.scrollY > initialThreshold.value
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
    <div class="transition-all duration-1000 opacity-0  -translate-y-11 bg-gray-50 border-b-2 main-site-padding  w-full z-10"
        :class="navbarClass">
        <div class="flex justify-between items-center text-sm font-medium" :class="getInnerClass()">

            <div class="content-color ">
                <NuxtLink to="/">abc</NuxtLink>
            </div>

            <div class="flex gap-3 relative h-full">

                <div class="h-full" @mouseover="showElement(headerMenu.HOME)" @mouseleave="hideElement()">
                    <div class=" flex items-center cursor-pointer  h-full">{{ headerMenu.HOME }}</div>
                    <Transition name="menuItem">
                        <CardMenuItem1 v-show="showMenu === headerMenu.HOME">
                        </CardMenuItem1>
                    </Transition>
                </div>


                <div class="h-full" @mouseover="showElement(headerMenu.ABOUT)" @mouseleave="hideElement()">
                    <div class=" flex items-center cursor-pointer   border-red-500 h-full">{{ headerMenu.ABOUT }}</div>
                    <Transition name="menuItem">
                        <CardMenuItem v-show="showMenu === headerMenu.ABOUT">
                        </CardMenuItem>
                    </Transition>
                </div>


                <div class="h-full">
                    <div class=" flex items-center cursor-pointer   border-red-500 h-full">CONTACT</div>
                </div>

            </div>

            <div class="flex">
                <div @click="openCartDrawer" class="cursor-pointer text-lg font-medium">
                    <Icon name="clarity:shopping-cart-line" />

                </div>
            </div>
        </div>
    </div>
    <Transition>
        <SideDrawer v-if="isCartDrawerActive" @close-overlay="closeCartDrawer"></SideDrawer>
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


.menuItem-enter-active {
    transition: all .3s ease-out;
}

.menuItem-leave-active {
    transition: all .2s cubic-bezier(1, 0.5, 0.8, 1);
}

.menuItem-enter-from,
.menuItem-leave-to {
    opacity: 0;
    transform: translateY(50px);
}
</style>
 
