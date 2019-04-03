<template>
<div class="footer" ref="footer">
  <li @click="$router.replace('/home')" :class="{on:$route.path.indexOf('/home') === 0}">
    <span class="iconfont icon-home"></span>
    <span class="desc">首页</span>
  </li>
  <li @click="$router.replace('/discern')" :class="{on:$route.path.indexOf('/discern') === 0}">
    <span class="iconfont icon-icon"></span>
    <span class="desc">分类</span>
  </li>
  <li @click="$router.replace('/things')" :class="{on:$route.path.indexOf('/things') === 0}">
    <span class="iconfont icon-shiwu"></span>
    <span class="desc">识物</span>
  </li>
  <li @click="$router.replace('/shopcar')" :class="{on:$route.path.indexOf('/shopcar') === 0}">
    <span class="iconfont icon-qicheqianlian-"></span>
    <span class="desc">购物车</span>
  </li>
  <li @click="$router.replace('/personal')" :class="{on:$route.path.indexOf('/personal') === 0}">
    <span class="iconfont icon-renwu"></span>
    <span class="desc">个人</span>
  </li>

</div>

</template>


<script>
 export default{
   mounted(){
     const heg = this.$refs.footer.clientHeight
     this.$store.dispatch("getHeight",heg)

   }
 }

</script>


<style scoped rel="stylesheet/stylus" lang="stylus">
  @import "../../common/stylus/mixins.styl"
.footer
  top-border-1px(#ccc)
  position fixed
  padding 10px 0px 0 0px
  box-sizing border-box
  bottom 0
  height 100px
  width 100%
  display flex
  z-index 200
  left 0
  background #fff
  justify-content space-between
  li
    width 20%
    align-items center
    display flex
    flex-direction column
    &.on
      color #AB2B2B
  .desc
    margin-top 10px
    font-size 24px
  .iconfont
    font-size 40px

</style>
