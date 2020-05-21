<template>
<!-- <div class="site-wrapper "> -->
<div >
    <Vueheader />
    <nuxt />
    <vueFooter />
    
</div>
</template>

<script>
import Vueheader from "../components/inc/Vuenavbar";
import vueFooter from "../components/inc/Vuefooter";
export default {
    components: {
        Vueheader, vueFooter
    },
}
</script>
