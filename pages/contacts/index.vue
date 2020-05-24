<template>
<div class="site-wrapper ">
    <myPartialHeader :page="'Contact Us'" />
    <myContact />
</div>
</template>

<script>
import myPartialHeader from '../../components/inc/PartialHeader'
import myContact from '../../components/contacts'
// import myValues from '../../components/services/values'
export default {
    components: {
        myPartialHeader,
        myContact
    },
    head() {
        return {
            title: 'Contact Us',
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
