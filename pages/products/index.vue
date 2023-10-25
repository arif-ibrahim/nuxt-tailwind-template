<script setup lang="ts">
import { buttonSize } from "@/constant/size";
import { ref } from "vue";


const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
};
</script>

<template>
    <div class="main-site-padding">
        <div class="flex flex-col md:flex-row mt-20 gap-3 lg:gap-5 2xl:gap-10 ">
            <div class="w-full md:w-1/2 h-[700px]">
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
            <div class="w-full md:w-1/2 flex flex-col gap-3">
                <div class="text-2xl font-semibold text-gray-700">Crossbody Bag with Chain Strap</div>
                <div class="text-2xl font-semibold">1200 TAKA</div>
                <div class="text-sm font-medium">In stock - ready to ship</div>
                <div>
                    <div class="text-sm text-gray-600 font-semibold mb-1">Size: M</div>
                    <div class="flex gap-4 text-sm">
                        <div class="border bg-black text-white border-black w-9 py-2 text-center">S</div>
                        <div class=" border border-black w-9 py-2 text-center">M</div>
                        <div class="border border-black w-9 py-2 text-center">L</div>
                    </div>
                </div>
                <div class="flex">
                    <Quantity :size="buttonSize.MEDIUM" />
                </div>
                <div class="mt-1 sm:mt-2 md:mt-3">
                    <ButtonAddtocart />
                </div>
                <div>
                    <Icon name="icon-park-outline:transporter" /><span class="text-xs ml-1">YOUR ORDER IS ELIGIBLE
                        FOR
                        <span class="font-medium">FREE
                            DELIVERY.</span></span>
                </div>
                <div>
                    <Icon name="ic:outline-calendar-month" /><span class="text-xs ml-1">Estimated delivery between
                        <span class="font-medium"> 30 October - 05 November.</span></span>
                </div>
            </div>
        </div>
        <div class="my-20">
            <div class="flex gap-7 border-b font-medium text-gray-600">
                <div class=" pt-1 pb-2 cursor-pointer border-b-2 border-black">Product Description</div>
                <div class="pt-1 pb-2 cursor-pointer">Shipping & Returns</div>
            </div>
            <div class="mt-5">
                <div class="text-xs">
                    Sneakers are a perfect blend of utility and comfort, and they can uplift the wearer’s ensemble
                    instantly. Regardless of the outfit you choose to wear, the classy pair of cleats are a must-have in any
                    fashion lover’s closet. You can team up the eye-catching footwear with a printed T shirt and mid-rise
                    jeans for a laidback appearance.
                </div>
                <div class="mt-3">
                    <div class="text-xl">Features</div>
                    <ul class="text-xs list-disc mt-3 space-y-1 ms-4">
                        <li>100% Original Products</li>
                        <li>Wipe with a clean, dry cloth to remove the dust</li>
                        <li>Shoe Width: Medium</li>
                        <li>Anti-slip TPU Rubber Sole</li>
                        <li>70% cotton, 30% polyester.</li>
                        <li>Easy to wear and versatile as Casual.</li>
                    </ul>
                </div>
            </div>
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