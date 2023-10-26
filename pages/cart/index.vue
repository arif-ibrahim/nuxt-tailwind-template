<template>
    <div class="main-site-padding mt-16">
        <div class="text-center text-2xl font-medium">Yout Cart</div>
        <div class="flex flex-col lg:flex-row gap-7 mt-10">
            <div class="lg:w-9/12">
                <table class="w-full table-auto text-left ">
                    <thead class="bg-gray-100">
                        <tr class="text-gray-500 font-mono text-lg tracking-wider ">
                            <th colspan="2">Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="w-28">
                                <img class="h-32" src="/bag_5.webp" alt="">
                            </td>
                            <td>
                                <div>
                                    <div>leather bag with chain</div>
                                    <div>2000Taka</div>
                                    <div>Size: M </div>
                                </div>
                            </td>
                            <td>
                                <div class="flex">
                                    <Quantity></Quantity>
                                </div>
                            </td>
                            <td>5000Taka</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div class="lg:w-3/12 bg-gray-100">
                add special instruction for your order
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
th,
td {
    padding: 5px 10px;
}
</style>