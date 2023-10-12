<script setup>



</script>

<template>
    <div>

        <Swiper :modules="[SwiperAutoplay, SwiperEffectFade]" :effect="'fade'" :crossFade="true" :slides-per-view="1"
            :loop="true" :autoplay="{
                delay: 30000,
                disableOnInteraction: true,
            }">
            <SwiperSlide>
                <div
                    class="bg-contain bg-no-repeat h-[400px] sm:h-[200px] md:h-[492px] lg:h-[492px] xl:h-[531px] 2xl:h-[667px] w-full    bg-[url('/d1banner2_2000x.webp')]">
                </div>
            </SwiperSlide>

        </Swiper>


    </div>
</template>

<style>
.swiper-slide {
    font-size: 18px;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}

.swiper-wrapper {}

.swiper {
    z-index: -1;
}
</style>