<template>
<!-- <div class="site-wrapper "> -->
<div class="app">
    <Vueheader />
    <transition name="fade">
        <nuxt />
    </transition>
    <vueFooter />

</div>
</template>

<script>
import Vueheader from "../components/inc/Vuenavbar";
import vueFooter from "../components/inc/Vuefooter";
export default {
    components: {
        Vueheader,
        vueFooter
    },
}
</script>

<style>
.app {
    font-family: 'Montserrat', sans-serif;
}

.fade-enter-active {
    transition: opacity 2s, transform 2s;
}

.fade-enter {
    opacity: 0;
    transform: translate(20px);
}
</style>
