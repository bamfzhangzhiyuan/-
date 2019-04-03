<template>
  <div class="shop-wrap">
    <header class="header">
      <p>购物车</p>
      <p>领劵</p>
    </header>

    <div class="content">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      <button class="btn" @click="$router.push('/login')">登录</button>
    </div>

  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shop-wrap
    height 100%
    background-color #eee
    .header
      padding 0 30px
      display flex
      height 100px
      justify-content space-between
      line-height 100px
      font-size 30px
      background-color white
      p
        &:last-child
          color red


    .content
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      .btn
        width 100%
        height 70px
        background-color #b4282d
        border none
        font-size 30px
        color white


</style>
