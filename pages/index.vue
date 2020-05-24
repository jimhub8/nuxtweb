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
                content: 'Derricon Global'
            }]
        }
    }
}
</script>
