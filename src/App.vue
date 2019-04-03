<template>
<div id="app">
  <router-view/>
  <Footerguider v-show="$route.meta.isshow"/>
</div>

</template>


<script>
 import Footerguider from "./components/footerGuider/footer.vue"
 export default{
   components:{
     Footerguider
   }
 }


</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
 p
  width 750px
  height 200px
  background red

</style>
