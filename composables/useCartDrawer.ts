import { ref } from "vue";

export default function () {
const isCartDrawerActive = ref(false)

const disableScroll = () => {
    document.body.style.overflow = "hidden";
}
const enableScroll = () => {
    document.body.style.overflow = "auto";
}

const openCartDrawer = () => {
    disableScroll()
    isCartDrawerActive.value = true
}

const closeCartDrawer = () => {
    enableScroll()
    isCartDrawerActive.value = false
}

    return{
        isCartDrawerActive,
        openCartDrawer,
        closeCartDrawer,
    }
}