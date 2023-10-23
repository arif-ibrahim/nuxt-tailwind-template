<script setup >
import { ref } from "vue";
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
</script>

<template>
    <div class="main-site-padding">
        <div class="flex mt-20">
            <div class="w-1/2 h-[700px]">
                <Swiper :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }" :modules="[SwiperFreeMode, SwiperNavigation, SwiperThumbs]" :loop="true" :navigation="true"
                    class="mySwiper2" :thumbs="{
                        swiper: thumbsSwiper,
                        autoScrollOffset: 0,
                        multipleActiveThumbs: true,

                    }">
                    <SwiperSlide>
                        <img class="" src="/bag.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="" src="/bag3.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="" src="/bag_3.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="" src="/bag_5.webp" />
                    </SwiperSlide>
                </Swiper>
                <Swiper @swiper="setThumbsSwiper" :modules="[SwiperFreeMode, SwiperNavigation, SwiperThumbs]" :loop="true"
                    :spaceBetween="10" :slidesPerView="5" :freeMode="true" :watchSlidesProgress="true" class="mySwiper">
                    <SwiperSlide>
                        <img class="" src="/bag.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="" src="/bag3.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="" src="/bag_3.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="" src="/bag_5.webp" />
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
.swiper {}

.swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

}

.mySwiper2 {
    height: 80%;
    width: 100%;
}

.mySwiper {
    height: 20%;
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
</style>