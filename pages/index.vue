<template>
 <div>
   <myLanding />
 </div>
</template>

<script>
import myLanding from '../components/home/landing'
export default {

  components: {
    myLanding
  },
    head() {
        return {
            title: 'Derricon Global',
            meta: [{
                hid: 'description',
                name: 'description',
                content: 'Drive innovative business processes, deep data analytics, ecommerce connectivity and people development.'
            }]
        }
    }
}
</script>
