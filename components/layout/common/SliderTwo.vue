<template>
    <div
        class="grid grid-cols-1   sm:grid-cols-2 bg-cover bg-center bg-no-repeat h-[200px] sm:h-[400px] md:h-[492px] lg:h-[492px] xl:h-[531px] 2xl:h-[667px] w-full    bg-[url('/d1banner2_2000x.webp')]">
        <div></div>
        <div class="shopNow flex flex-col gap-0 sm:gap-2 justify-center items-center sm:items-start">
            <div class="text-sm">NEW COLLECTION</div>
            <div>
                <div class="text-2xl md:text-5xl font-bold">Luxery Brands</div>
                <div class="text-2xl md:text-5xl tracking-wider">Without Labels</div>
            </div>
            <div class="mt-1 sm:mt-2">
                <button class="bg-black hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer">
                    SHOP NOW
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.shopNow {
    transform: scale(1);
    animation-name: shopNow;
    animation-duration: 1s;
    animation-timing-function: ease-out;
}

@keyframes shopNow {
    0% {
        transform: scale(0);

    }

    100% {
        transform: scale(1);

    }
}
</style>