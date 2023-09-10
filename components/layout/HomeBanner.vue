<script setup>
const slides = ref(Array.from({ length: 10 }, () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    // Figure out contrast color for font
    const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

    return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
}))
</script>

<template>
    <div>

        <Swiper :height="500" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
            :effect="'creative'" :autoplay="{
                delay: 5000,
                disableOnInteraction: true
            }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1]
    },
    next: {
        translate: ['100%', 0, 0]
    }
}">
            <SwiperSlide v-for="(slide, idx) in slides" :key="idx"
                :style="`background-color: ${slide.bg}; color: ${slide.color}`">
                jsdlkjflksdjlf;jsdlfjdlsjf
            </SwiperSlide>

            <!-- useSwiper() within a swiper instance -->
            <SwiperControls />
        </Swiper>


    </div>
</template>

<style>
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 20vh;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}

.swiper-wrapper {
    min-width: 100vh;
    width: 100vh;
}

.swiper {
    z-index: -1;
}
</style>