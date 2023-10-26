<script setup lang="ts">

const emit = defineEmits(['closeOverlay'])
</script>


<template>
    <div class="inset-0 fixed z-20">
        <div class="relative">
            <div @click="emit('closeOverlay')"
                class="absolute w-1/6 sm:w-3/6 md:w-3/5 lg:w-2/3 xl:w-9/12 2xl:w-4/5 h-screen inset-y-0 left-0 bg-black opacity-60 cursor-pointer">
            </div>
            <div
                class="absolute w-5/6 sm:w-3/6 md:w-2/5 lg:w-1/3 xl:w-3/12 2xl:w-1/5 h-screen inset-y-0 right-0 bg-white p-3">
                <div class="flex flex-col h-full justify-between">
                    <div>
                        <div class="flex justify-between">
                            <div class="text-base">Your Cart(5)</div>
                            <div @click="emit('closeOverlay')" class="text-xl cursor-pointer">
                                <Icon name="bx:x" />
                            </div>
                        </div>
                        <div class="bg-gray-100 p-3 my-3 text-center">
                            <Icon name="icon-park-outline:transporter" /><span class="text-xs ml-1">YOUR ORDER IS ELIGIBLE
                                FOR
                                <span class="font-medium">FREE
                                    DELIVERY.</span></span>
                        </div>
                        <div>
                            <ul role="list" class="divide-y divide-gray-200">
                                <li v-for="i in 3" class=" mt-2 pt-2 first:pt-0">
                                    <CardCartItem></CardCartItem>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="mt-5">
                            <div class="flex justify-between text-center gap-2 text-gray-700 text-lg">
                                <div class="bg-gray-100 w-full py-2 cursor-pointer ">
                                    <Icon name="icon-park-outline:notes" />
                                </div>
                                <div class="bg-gray-100 w-full py-2 cursor-pointer">
                                    <Icon name="icon-park-outline:tag-one" />
                                </div>
                                <div class="bg-gray-100 w-full py-2 cursor-pointer">
                                    <Icon name="icon-park-outline:gift" />
                                </div>
                            </div>
                        </div>
                        <div class="my-2">
                            <hr />
                        </div>
                        <div class="flex flex-col gap-3">
                            <div class="flex justify-between font-bold">
                                <div>Total</div>
                                <div>900.00 Taka</div>
                            </div>
                            <div class="text-xs">Taxes and shipping calculated at checkout</div>
                            <div>
                                <button class="bg-black hover:bg-fuchsia-600 text-white text-sm p-2 w-full rounded">PROCEED
                                    TO
                                    CHECKOUT</button>
                            </div>
                            <div>
                                <NuxtLink to="/cart">
                                    <button @click="emit('closeOverlay')"
                                        class="bg-white hover:bg-black hover:text-white text-sm p-2 w-full border border-black border-1 rounded">VIEW
                                        CART</button>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
