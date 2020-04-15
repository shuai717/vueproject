<template>
<div>
    {{seller}}
</div>
</template>

<script >
  import {mapActions} from 'vuex'
  const ACTSETSELLER='actSetSeller'
  export default {
    data () {
      return {

      }
    },
    components: {

    },
    methods:{
     ...mapActions([ACTSETSELLER])
    },
     async mounted(){
      let resulte=await this.$http.seller.getSeller()
      this[ACTSETSELLER](resulte.data);
    },
    computed:{
      seller:{
        get(){
          return this.$store.state.seller.name
        }
      }
    }
  }
</script>

<style >

</style>