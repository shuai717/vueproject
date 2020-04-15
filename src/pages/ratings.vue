<template>
<div>
    ratings
</div>
</template>

<script >
import {mapActions} from 'vuex'
const ACTSETRATINGS='actSetRatings'
  export default {
    data () {
      return {

      }
    },
    components: {

    },
    methods:{
     ...mapActions([ACTSETRATINGS])
    },
     async mounted(){
      let resulte=await this.$http.seller.getRatings()
      this[ACTSETRATINGS](resulte.data);
    }
  }
</script>

<style >

</style>