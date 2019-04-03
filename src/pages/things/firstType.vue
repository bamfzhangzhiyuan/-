<template>
<div class="allWrap" ref="allWrapHeight">
  <ul class="leftWrap">
    <li class="content" v-for="(item,index) in judge.judgeTypeFirst?judge.judgeTypeFirst.slice(0,judge.judgeTypeFirst.length/2):[]">
      <img :src="item.bannerInfo.picUrl" :style="{height:item.bannerInfo.height*230/1000+'px'}">
      <p v-if="item.content&&item.content !== ' '">{{item.content}}</p>
      <div class="foot">
        <div class="left">
          <span class="iconfont icon-renwu"></span>
          <span>{{item.nickName}}</span>
        </div>
        <div class="right">
          <span>{{item.supportNum}}</span>
          <span class="iconfont icon-dianzan"></span>
        </div>
      </div>
    </li>
  </ul>
  <ul class="rightWrap">
    <li class="content" v-for="(item,index) in judge.judgeTypeFirst?judge.judgeTypeFirst.slice(judge.judgeTypeFirst.length/2+1):[]">
      <img v-lazy="item.bannerInfo.picUrl" :style="{height:item.bannerInfo.height*230/1000+'px'}">
      <p v-if="item.content&&item.content !== ' '">{{item.content}}</p>
      <div class="foot">
        <div class="left">
          <span class="iconfont icon-renwu"></span>
          <span>{{item.nickName}}</span>
        </div>
        <div class="right">
          <span>{{item.supportNum}}</span>
          <span class="iconfont icon-dianzan"></span>
        </div>
      </div>
    </li>
  </ul>
</div>

</template>


<script>
  import {mapState} from "vuex"
export default{
  beforeDestroy(){
    this.$store.dispatch("clearThings",1)
  },
  props:{
    judge:Object
  },
  mounted(){
    this.$store.dispatch('saveHeight',this.$refs.allWrapHeight.clientHeight)
  },

  watch:{
    judge:{
      deep:true,
      handler:function () {
        this.$nextTick(()=>{
          this.$store.dispatch('saveHeight',this.$refs.allWrapHeight.clientHeight)
        })
      }
    }
  }


}

</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  .allWrap
    overflow hidden
  .leftWrap
    float left
    box-sizing border-box
    width 350px
    padding 0 10px 0 10px
  .rightWrap
    width 350px
    margin-right 10px
    float right
    box-sizing border-box

  .content
    margin-top 20px
    margin-bottom 20px
    border 2px solid #ccc
    box-sizing border-box
    border-radius 20px
    img

      width 100%
    p
      font-size 24px
      height 80px
      flex-wrap: wrap
      overflow hidden
      text-overflow: ellipsis
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical;
      color #333
      letter-spacing 2px
      line-height 40px
      padding 10px 10px 0 10px
    .foot
      box-sizing border-box
      padding 12px 8px
      display flex
      justify-content space-between
      .right
        span:last-child
          color #ccc
      .left
        padding-left 10px
        display flex
        align-items center
        span:last-child
          color #ccc
          padding-left 10px
        span:first-child
          font-size 40px
          color #b0955f
    width 350px



</style>
