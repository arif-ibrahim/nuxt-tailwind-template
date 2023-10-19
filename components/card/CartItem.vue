<template>
    <div class="flex gap-2 min-h-fit">
        <div class="w-1/4">
            <img class="h-full object-cover object-center" src="/bag3.webp" alt="picture">
        </div>
        <div class="w-3/4">
            <div class="text-xs">Crossedbody Bag with Chain Strap </div>
            <div class="text-gray-500 text-xs mt-1">
                <div class="-mb-0.5">Color: Blue</div>
                <div>Size: M</div>
            </div>
            <div class="text-xs mt-1">$280</div>
            <div class="flex gap-5 text-gray-600 text-sm mt-1">
                <div class="border rounded-sm">
                    <button class="border-r h-6 w-6 align-text-bottom">
                        <Icon name="icon-park-outline:plus" />
                    </button>
                    <input class="w-6 h-6 text-center align-text-bottom" type="text" value="2">
                    <button class="border-l w-6 h-6 align-text-bottom">
                        <Icon name="icon-park-outline:minus" />
                    </button>
                </div>
                <div class="cursor-pointer">
                    <Icon name="icon-park-outline:delete" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>