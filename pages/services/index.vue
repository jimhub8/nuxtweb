<template>
<div class="site-wrapper ">
    <myPartialHeader :page="'Services'" />
    <myServices />
</div>
</template>

<script>
import myPartialHeader from '../../components/inc/PartialHeader'
import myServices from '../../components/services'
// import myValues from '../../components/services/values'
export default {
    components: {
        myPartialHeader,
        myServices
    },
    head() {
        return {
            title: 'Our Services',
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
