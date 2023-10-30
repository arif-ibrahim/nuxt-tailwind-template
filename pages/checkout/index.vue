<template>
    <div class="main-site-padding">
        <div class="grid grid-cols-1 md:grid-cols-2 ">
            <div class=" flex flex-col gap-5 justify-start py-12 pe-10">
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
            <div class="bg-gray-100 flex justify-end pt-12 ps-10">total</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>