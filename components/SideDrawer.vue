<script setup lang="ts">

const emit = defineEmits(['closeOverlay'])
</script>


<template>
    <div class="inset-0 fixed z-20">
        <div class="relative">
            <div @click="emit('closeOverlay')"
                class="absolute w-4/5 h-screen inset-y-0 left-0 bg-black opacity-60 cursor-pointer">
            </div>
            <div class="absolute w-1/5 h-screen inset-y-0 right-0 bg-white p-3">
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
                </div>
            </div>
        </div>
    </div>
</template>
