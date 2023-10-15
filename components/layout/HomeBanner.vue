<script setup>



</script>

<template>
    <div>

        <Swiper :modules="[SwiperAutoplay, SwiperEffectFade]" :effect="'fade'" :crossFade="true" :slides-per-view="1"
            :loop="true" :autoplay="{
                delay: 10000,
                disableOnInteraction: true,
            }">
            <SwiperSlide>
                <div
                    class="bg-cover bg-center bg-no-repeat h-[200px] sm:h-[400px] md:h-[492px] lg:h-[492px] xl:h-[531px] 2xl:h-[667px] w-full    bg-[url('/d1banner2_2000x.webp')]">
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    class="bg-cover bg-center bg-no-repeat h-[200px] sm:h-[400px] md:h-[492px] lg:h-[492px] xl:h-[531px] 2xl:h-[667px] w-full    bg-[url('/d1banner1_2000x.webp')]">
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