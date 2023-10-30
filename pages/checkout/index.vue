<template>
    <div class="main-site-padding">
        <div class="grid grid-cols-1 lg:grid-cols-12 ">
            <div class=" col-span-8 flex flex-col gap-5 lg:justify-start py-5 lg:py-12 lg:pe-10">
                <div class="w-full">
                    <div class="text-xl font-semibold">Contact</div>
                    <input class="mt-2 p-2 w-full placeholder:text-xs border" type="text" placeholder="Mobile phone number">
                </div>
                <div class="w-full">
                    <div class="text-xl font-semibold">Address</div>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="col-span-2">
                            <input class="mt-2 p-2 w-full placeholder:text-xs border" type="text" placeholder="Full Adress">

                        </div>
                        <div>
                            <input class="mt-2 p-2 w-full placeholder:text-xs border" type="text" placeholder="First name">

                        </div>
                        <div>
                            <input class="mt-2 p-2 w-full placeholder:text-xs border" type="text" placeholder="Last name">

                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:border-s lg:h-screen pt-3 lg:pt-12 lg:ps-10 lg:col-span-4 flex flex-col gap-5">
                <div class="flex justify-between">
                    <div class="flex gap-2">
                        <div>
                            <img class="h-16 lg:h-24 object-cover object-center" src="/bag3.webp" alt="picture">
                        </div>
                        <div>
                            <div class="text-sm sm:text-sm">Leather bag with chain</div>
                            <div class="text-xs sm:text-sm text-gray-500">Color: Orange </div>
                            <div class="text-xs sm:text-sm text-gray-500">Size: M </div>
                        </div>
                    </div>
                    <div class="font-medium text-sm">12300 Taka </div>
                </div>
                <div class="flex flex-col gap-1">
                    <div class="flex justify-between text-sm text-gray-500">
                        <div class="">Subtotal</div>
                        <div class="font-bold">600 Taka</div>
                    </div>
                    <div class="flex justify-between text-sm text-gray-500">
                        <div>Shipping</div>
                        <div class="font-semibold">60 Taka</div>
                    </div>
                    <div class="flex justify-between text-sm text-gray-500">
                        <div>Coupon</div>
                        <div class="font-semibold">60 Taka</div>
                    </div>
                    <div class="flex justify-between font-bold ">
                        <div>Total</div>
                        <div>720 Taka</div>
                    </div>
                </div>
                <div>
                    <button class="bg-green-500 hover:bg-green-600 text-white text-sm p-2 w-full rounded">PLACE
                        ORDER</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>