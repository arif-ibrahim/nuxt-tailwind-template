<script setup >
import { ref } from "vue";
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    console.log(swiper);
    thumbsSwiper.value = swiper;
};
</script>

<template>
    <div class="main-site-padding">
        <div class="flex mt-20">
            <div class="w-1/2 h-[500px]">
                <Swiper :modules="[SwiperFreeMode, SwiperNavigation, SwiperThumbs]" :loop="true" :navigation="true"
                    class="mySwiper2" :thumbs="{
                        swiper: thumbsSwiper,
                        autoScrollOffset: 0,
                        multipleActiveThumbs: true,

                    }">
                    <SwiperSlide>
                        <img src="/bag.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/bag3.webp" />
                    </SwiperSlide>
                </Swiper>
                <Swiper @swiper="setThumbsSwiper" :modules="[SwiperFreeMode, SwiperNavigation, SwiperThumbs]" :loop="true"
                    :spaceBetween="10" :slidesPerView="5" :freeMode="true" :watchSlidesProgress="true" class="mySwiper">
                    <SwiperSlide>
                        <img src="/bag.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/bag3.webp" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="w-1/2">details</div>
        </div>
        <div class="mt-20">
            specification
        </div>
    </div>
</template>



<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}



.swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper2 {
    height: 90%;
    width: 100%;
}

.mySwiper {
    height: 10%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>