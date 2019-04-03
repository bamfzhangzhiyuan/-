<template>
  <header class="headerSearch">
    <div class="headerGuide">
      <span class="logo"><img src="../../../static/images/logo/Logo.png" alt=""></span>
      <div class="search" @click="$router.push('/search')">
        <i class="iconfont icon-sousuo"></i>
        <span class="searchStore">搜索商品, 共22172款好物</span>
      </div>
      <div class="login" @click="$router.push('/personInfo')">登录</div>
    </div>
    <div class="headerBottom">
      <ul class="ulList" v-show="!show">
        <li :class="{recommended:nowIndex === -1}" @click="nowIndex = -1">推荐</li>
        <li :class="{recommended:index === nowIndex}" v-for="(item,index) in homeData.kingKongModule?homeData.kingKongModule.kingKongList:''" @click="nowIndex = index">{{item.text}}</li>
      </ul>
      <div class="arrow"  @click="isshow">
        <span class="iconfont icon-arrow-down" :style="{display:'block',transform:show?'rotate(180deg)':'rotate(0deg)',transition:'all .5s'}"></span>
      </div>
    </div>
    <div class="category" v-show="show">
      <div class="categoryTop">
        <span>全部频道</span>
      </div>
      <ul class="categoryBottom">
        <li>推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个护清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>全球特色</li>
      </ul>
    </div>
  </header>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      mask:Function,
      homeData:Object
    },
    data(){
      return{
        show:false,
        nowIndex:-1
      }
    },
    mounted(){
      new BScroll('.headerBottom', {
        scrollX: true,

      })
    },
    methods:{
      isshow(){
        this.show = !this.show
        this.mask(this.show)

      }
    }
  }
</script>
<style  lang="stylus" rel="stylesheet/stylus">
  .headerSearch
    width 100%
    height 148px
    position fixed
    left 0
    top 0
    z-index 300
    background-color white
    .mask
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      width 100%
      height 100%
      background rgba(0,0,0,0.5)
    .headerGuide
      width 100%
      height 88px
      position relative
      .logo
        position absolute
        left 0
        top 50%
        transform translateY(-50%)
        img
          width 138px
          height 40px
          margin-left 20px
      .search
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        width 59%
        height 56px
        line-height 56px
        text-align center
        color #666
        background-color #EEEEEE
        margin-left 35px
        font-size 30px

      .login
        position absolute
        right 0
        top 50%
        border 1px solid #b4282d
        border-radius 5px
        color #b4282d
        font-size 30px
        padding 5px
        transform translateY(-50%)
        margin-right 20px
    .headerBottom
      width 100%
      height 60px
      display flex
      z-index 300
      position relative
      .ulList
        display flex
        height 100%
        margin-left 10px
        box-sizing border-box
        padding-left 20px
        z-index 0
        padding-right 90px
        li
          height 100%
          line-height 60px
          text-align center
          font-size 33px
          white-space nowrap
          padding 0 15px
          box-sizing border-box
        .recommended
          color #b4282d
          border-bottom 2px solid #b4282d
      .arrow
        position absolute
        right -8px
        top 50%
        z-index 200
        background-color white
        width 100px
        height 100%
        line-height 60px
        text-align center
        transform translateY(-50%)
        transition all 0.5s
        &:hover
          transform rotate(180deg)
    .category
      width 100%
      height 372px
      background-color #fff
      position absolute
      left 0
      top 88px
      z-index 100
      .categoryTop
        width 100%
        height 60px
        line-height 60px
        font-size 33px
        font-weight bold
        padding-left 15px
      .categoryBottom
        width 100%
        li
          float left
          width 150px
          height 56px
          line-height 56px
          text-align center
          background-color #FBFBFB
          border 1px solid #eee
          border-radius 5px
          font-size 30px
          margin-left 30px
          margin-top 30px

</style>
