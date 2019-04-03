<template>

  <div class="phone" >
    <div class="loginHeader">
      <span @click="$router.replace('/home')"><i class="iconfont icon-home"></i></span>
      <img src="../../../static/images/logo/Logo.png" alt="">
      <div class="searchShop">
        <span><i class="iconfont icon-sousuo" @click="$router.push('/search')"></i></span>
        <span><i class="iconfont icon-qicheqianlian-"></i></span>
      </div>
    </div>
    <div class="logo">
      <img src="../../../static/images/logo/2.png" alt="">
    </div>
    <div class="content">
      <form>
        <div class="first">
          <input placeholder="输入手机号"v-model="phoneNum" >
        </div>
        <div class="first">
          <input placeholder="输入验证码">
          <div class="code">获取验证码</div>
        </div>
        <div class="question">
          <span>遇到问题？</span>
          <span @click="toggle(true)">使用密码验证登陆</span>
        </div>
        <div class="allLogin">
          <div class="login">
            登陆
          </div>
          <div class="otherLogin" @click="toggle(true)">
            其他登陆方式
          </div>
        </div>
      </form>
      <div class="register">
        注册账号>
      </div>
    </div>
  </div>
</template>


<script>
export default{
  props:{
    toggle:Function
  },
  data(){
    return{
      phoneNum
    }
  },

}

</script>


<style lang="stylus" rel="stylesheet/stylus">
  .phone
    width 100%
    height 100%
    background-color #fff
    .content
      padding 40px
      box-sizing border-box
      .register
        padding-top 40px
        font-size 28px
        text-align: center
      .allLogin
        .login
          margin-top 40px
          text-align: center
          line-height 90px
          font-size 28px
          border-radius 10px
          width 100%
          height 90px
          background #B4282D
          color #fff
        .otherLogin
          margin-top 40px
          text-align: center
          line-height 90px
          font-size 28px
          border-radius 10px
          width 100%
          height 90px
          background #fff
          color #B4282D
          border 1px solid #B4282D
      .question
        display flex
        justify-content space-between
        color #333
        font-size 30px
      .first
        height 70px
        margin-bottom 50px
        border-bottom 1px solid #ccc
        .code
          float right
          padding 15px 10px 15px 10px
          border-radius 4px
          font-size 28px
          color #333
          border 2px solid #ccc
        input
          margin 14px 0
          outline none
          color #666
          font-size 30px
    .logo
      width 100%
      height 410px
      position relative
      img
        width 184px
        height 64px
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
  .loginHeader
    width 100%
    height 87px
    background-color #FBFBFB
    display flex
    padding 0 20px
    justify-content space-between
    align-items center
    box-sizing border-box
    position relative
    .searchShop
      display flew
      align-items center
      span
        margin-left 20px
    .iconfont
      font-size 44px
    img
      height 54px
      width 172px
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)



</style>
