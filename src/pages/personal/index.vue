<template>
  <div class="wrap">
    <div class="login" v-if="!phone&&!email">
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
      <div class="loginBtton">
        <div class="phone" @click = "phone = true">
          <i class="iconfont icon-shoujihao"></i>
          <span>手机号码登录</span>
        </div>
        <div class="e-mail" @click = "email = true">
          <i class="iconfont icon-shoujianxiang"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="regin"><span>手机号快捷注册<i class="iconfont icon-jiantou"></i></span></div>
      </div>
      <ul class="weichat">
        <li>
          <span><i class="iconfont icon-weixin"></i></span>
          <span>微信</span>
        </li>
        <li>|</li>
        <li>
          <span><i class="iconfont icon-tengxun"></i></span>
          <span>QQ</span>
        </li>
        <li>|</li>
        <li>
          <span><i class="iconfont icon-weibo"></i></span>
          <span>微博</span>
        </li>
      </ul>
    </div>
    <Phone v-else-if="phone&&!email" :toggle="toggle"/>
    <Email v-else-if="!phone&&email" :toggle="toggle"/>
  </div>

</template>
<script>
  import Phone from "./phone.vue"
  import Email from "./Email.vue"
  export default {
    data(){
      return{
        phone:false,
        email:false
      }
    },
    components:{
      Phone,
      Email
    },
    methods:{
      toggle(flag){
        if(flag){
          this.phone = false
          this.email = true
        }else{
          this.phone = true
          this.email = false
        }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap
    position absolute
    top 0
    bottom 0
    width 100%

   .login
     width 100%
     height 100%
     background-color #F2F6F5

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


   .logo
      width 100%
      height 410px
      position relative
      img
        width 268px
        height 90px
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)

   .loginBtton
       width 100%
       height 600px
       .phone
          width 670px
          height 88px
          line-height 88px
          background-color #C71423
          border 1px solid #C71423
          border-radius 4px
          color #fff
          text-align center
          margin 0 auto
          margin-bottom 40px
          display flex
          align-items center
          justify-content center
         .iconfont
           margin-right 10px
           font-size 40px
       .e-mail
         width 670px
         height 88px
         text-align center
         color #C71423
         border 2px solid #C71423
         border-radius 4px
         display flex
         align-items center
         justify-content center
         margin 0 auto
         .iconfont
            margin-right 10px

       .regin
          margin-top 40px
          font-size 32px
          text-align center
          .icon-jiantou
             font-size 32px
   .weichat
      width 100%
      height 20px
      display flex
      justify-content center
      margin-top 60px
      color #7E7E7E
      li
        padding 0 15px


</style>
