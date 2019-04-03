<template>
<div>
  <div ref = "head" class="headThing">
    <span class="iconfont icon-home" @click="$router.push('/home')"></span>
    <div class="content">
      <span class="right" :class="{left:$route.path === '/things/main'}" @click="$router.push('/things/main'),liIndex=0">发现</span>
      <span class="right" :class="{left:$route.path.indexOf('/things/judge') === 0}" @click="$router.push('/things/judge',liIndex=1)">甄选家</span>
    </div>
    <div class="rightIcon">
      <span class="iconfont icon-sousuo1" @click="$router.push('/search')"></span>
      <span class="iconfont icon-qicheqianlian-"></span>
    </div>
  </div>
</div>

</template>


<script>


</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  .headThing
    position fixed !important
    top 0
    left 0
    background #fff
    height 100px
    display flex
    justify-content space-between
    bottom-border-1px(#ccc)
    width 100%
    align-items center
    box-sizing border-box
    padding 0 20px 0 20px
    z-index 200
    .rightIcon
      width 125px
      display flex
      justify-content space-between
    .content
      width 250px
      position absolute
      left 50%
      margin-left -125px
      display flex
      justify-content space-between
      align-items center
      .right
        color #ccc
        font-size 32px
        &.left
          font-weight bold
          font-size 44px
          color #B4282D
      height 100px
    .iconfont
      font-size 50px

</style>
