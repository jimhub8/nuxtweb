<template>
<div class="site-wrapper ">
    <myPartialHeader :page="'About Us'" />
    <myAbout />
    <myValues />
</div>
</template>

<script>
import myPartialHeader from '../../components/inc/PartialHeader'
import myAbout from '../../components/about'
import myValues from '../../components/about/values'
export default {
    components: {
        myPartialHeader,
        myAbout,
        myValues
    },
    head() {
        return {
            title: 'About Us - Derricon Global',
            meta: [{
                hid: 'description',
                name: 'description',
                content: 'Derricon Global'
            }]
        }
    }

}
</script>

<style scoped>
</style>
