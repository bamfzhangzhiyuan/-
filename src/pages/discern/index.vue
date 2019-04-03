<template>
<div>
  <div class="headerGuide">
    <div class="search" @click="$router.push('/search')">
      <i class="iconfont icon-sousuo"></i>
      <span class="searchStore">搜索商品, 共22172款好物</span>
    </div>
  </div>
  <div class="bottom">
    <div class="leftWrap">
      <ul class="left">
        <li @click="change(index)" :class="{first:index === 0,active:nowIndex === index}" v-for="(item,index) in discernData">{{item.name}}</li>
      </ul>
    </div>
    <div class="rightWrap">
      <div class="right">
        <img :src="discernData[nowIndex]?discernData[nowIndex].wapBannerUrl?discernData[nowIndex].wapBannerUrl:discernData[nowIndex].imgUrl:''" class="headImg">
        <ul class="bottomUl">
          <li v-for="(item,index) in discernData[nowIndex]?discernData[nowIndex].subCateList:''">
            <img :src="item.wapBannerUrl">
            <h2>{{item.name}}</h2>
          </li>
        </ul>
      </div>
    </div>
  </div>

</div>

</template>


<script>
  import BScroll from "better-scroll"
import {mapState} from "vuex"
export default{
  data(){
    return{
      nowIndex:0
    }
  },
  props:{

  },
  mounted(){
    this.$store.dispatch("reqData")
  },
  computed:{
    ...mapState({
      discernData:state=>state.discern.discernData
    })
  },
  methods:{
    change(index){
      this.nowIndex = index
    }
  },
  watch:{
    discernData(){
      this.$nextTick(()=>{
        new BScroll(".leftWrap",{
          click:true
        })
        new BScroll(".rightWrap")
      })

    }
  }
}

</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  .headerGuide
    width 100%
    border-bottom 1px solid #ccc
    height 88px
    position relative
    box-sizing border-box
    padding 0 30px 0 30px
    z-index 100
    background #fff
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
      width 80%
      top 50%
      transform translate(-50%,-50%)

      height 56px
      line-height 56px
      text-align center
      color #666
      background-color #EEEEEE
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

  .bottom
    display flex
    position absolute
    top 90px
    bottom 90px
    .rightWrap
      width 100%
      height 100%
    .leftWrap
      width 100%
      height 100%
    .right
      flex 1
      box-sizing border-box
      padding 30px 35px 20px
      .bottomUl
        overflow hidden
        flex-wrap wrap
        display flex
        li
          margin-right 30px
          width 144px
          display flex
          flex-direction column
          align-items center
          justify-content center
          img
            width 100%
          h2
            text-align: center
      .headImg
        margin-bottom 32px
        width 528px
  .left
    padding 40px 0 40px 0
    li
      display flex
      align-items center
      font-size 28px
      height 50px
      width 100%
      justify-content center
      position relative
      padding-left 10px
      &:not(.first)
       margin-top 80px
      &.active
        color #ab2b2b
      &.active::before
        position absolute
        top 0
        left 0
        bottom 0
        content ""
        width 10px
        background #ab2b2b
</style>
