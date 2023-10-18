<script setup>

</script>

<template>
    <div>
        <Swiper :modules="[SwiperAutoplay, SwiperEffectFade]" :effect="'fade'" :crossFade="true" :slides-per-view="1"
            :grabCursor="true" :loop="true" :autoplay="{
                delay: 6000,
                disableOnInteraction: false,
            }">
            <SwiperSlide>
                <LayoutCommonSliderOne />
            </SwiperSlide>
            <SwiperSlide>
                <LayoutCommonSliderTwo />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style>
.swiper-slide {
    font-family: 'Roboto', sans-serif;
}

.swiper-wrapper {}

.swiper {}
</style>