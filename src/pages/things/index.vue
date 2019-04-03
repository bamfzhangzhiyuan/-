<template>
<div class="thingsWrap">
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
  <div ref = "liWrap" class="liWrap">
    <ul class="bannerList">
      <li :class="{on:index === liIndex}" v-for="(item,index) in liList" @click="goto(index)">
        <a href="javascript:;">{{item}}</a>
      </li>
    </ul>
  </div>

    <router-view :headHeight = "headHeight" :ulHeight = "ulHeight"/>

</div>

</template>


<script>
  import Main from "./main.vue"
  import BScroll from "better-scroll"
  export default{
    components:{
      Main
    },
    data(){
      return{
        liList:["推荐","好货内部价","美食榜单","回购榜","晒单","达人","上新","home"],
        liIndex:0,
        liClass:["firstType","secondType",],
        first:true,
        headHeight:0,
        ulHeight:0
      }
    },
    mounted(){
      this.headHeight =  this.$refs.head.clientHeight
      this.ulHeight =  this.$refs.liWrap.clientHeight
      this.scrollUl = new BScroll('.liWrap',{
        click:true,
        scrollX:true
      })
      this.liIndex = this.$route.path === "/things/main" ? 0 : 1
    },
    methods:{
      goto(index){
        this.liIndex = index
        if(index !== 0){
          this.$router.push("/things/judge")
        }else{
          this.$router.push("/things/main")
        }

      }
    },


  }

</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
@import "../../common/stylus/mixins.styl"
.thingsWrap
  width 100%
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


  .liWrap
    background #fff
    position fixed
    top 100px
    z-index 200
    width 100%
    display flex
    .bannerList
      padding-left 30px
      display flex
      height 84px
      white-space: nowrap;
      bottom-border-1px(#ccc)
      li
        display flex
        align-items center
        font-size 30px
        margin-right 30px
        padding-right 5px
        padding-left 5px
        &.on
          border-bottom 2px solid red
</style>
