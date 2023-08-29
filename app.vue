<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';


const showNavbar = ref(false)
const scrollThreshold = ref(0)


const navbarClass = computed(() => {
  return {
    'fixed': showNavbar.value,
    'top-0': showNavbar.value,
    'transition': showNavbar.value,
    'duration-1000': showNavbar.value,
  }
})

const navbarInnerClass = computed(() => {
  return {
    'py-4': showNavbar.value,
  }
})


const toggleNavbar = () => {
  if (window.scrollY < scrollThreshold.value && window.scrollY > 40) {
    showNavbar.value = true;
  } else {
    showNavbar.value = false
  }
  scrollThreshold.value = window.scrollY

}


onMounted(() => {
  toggleNavbar()
  window.addEventListener('scroll', toggleNavbar);
})

onUnmounted(() => {
  window.removeEventListener('scroll', toggleNavbar)
})

</script>


<template>
  <div class="bg-black text-slate-50 main-site-padding">
    <div class="py-2 flex flex-row justify-between">
      <div>MESSAGE PRIMARY</div>
      <div>MESSAGE SECONDARY</div>
      <div>DROPDOWN</div>
    </div>
  </div>
  <div class="bg-slate-50 border-b-2  main-site-padding mb-5 w-full  " :class="navbarClass">
    <div class="flex justify-between py-10 " :class="navbarInnerClass">
      <div class="content-color">abco</div>
      <div class="flex gap-3">
        <div>
          menu one
        </div>
        <div>
          menu two
        </div>
        <div>
          menu three
        </div>
        <div>
          menu four
        </div>
        <div>
          menu five
        </div>
        <div>
          menu six
        </div>
        <div>
          menu seven
        </div>

      </div>
      <div class="flex">
        <div>icon1</div>
        <div>icon2</div>
        <div>icon3</div>
      </div>
    </div>
  </div>
  <div class="main-site-padding">
    <div class=" grid grid-cols-4 gap-4 ">
      <div v-for="i in 50" class="bg-slate-50 h-96"></div>
    </div>
  </div>
</template>
