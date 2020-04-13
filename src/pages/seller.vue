<template>
<div>
    {{seller}}
</div>
</template>

<script >
  export default {
    data () {
      return {

      }
    },
    components: {

    },
    computed:{
      seller:{
        get(){
          return this.$store.state.seller;
        }
      }
    },
    async mounted(){
      let resulte =await this.$http.seller.getSeller();
      this.$store.dispatch('actSetSeller',resulte.data.seller.name)
    }
  }
</script>

<style >

</style>