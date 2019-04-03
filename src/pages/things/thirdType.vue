<template>
  <div class="allWrap" ref="allWrapHeight">
    <ul class="leftWrap">
      <li class="content" v-for="(item,index) in oddArr">
        <img :src="item.bannerInfo.picUrl" :style="{height:item.bannerInfo.height*230/1000>600?item.bannerInfo.height*230/2000:item.bannerInfo.height*230/1000+'px'}">
        <p >{{item.collection.title}}</p>
        <h2>
          {{item.collection.subtitle}}
        </h2>
      </li>
    </ul>
    <ul class="rightWrap">
      <li class="content" v-for="(item,index) in evelArr">
        <img :src="item.bannerInfo.picUrl" :style="{height:item.bannerInfo.height*230/1000>600?item.bannerInfo.height*230/2000:item.bannerInfo.height*230/1000+'px'}">
        <p >{{item.collection.title}}</p>
        <h2>
          {{item.collection.subtitle}}
        </h2>
      </li>
    </ul>
  </div>

</template>


<script>
  import {mapState} from "vuex"
  export default{
    beforeDestroy(){
      this.$store.dispatch("clearThings",3)
    },
    props:{
      judge:Object
    },
    data(){
      return{
        oddArr:[],
        evelArr:[]
      }
    },
    mounted(){
      this.oddArr = this.judge.judgeTypeThird.filter((item,index)=>{
        return index%2===0
      })
      this.evelArr = this.judge.judgeTypeThird.filter((item,index)=>{
        return index%2!==0
      })
      this.$store.dispatch('saveHeight',this.$refs.allWrapHeight.clientHeight)
    },
    watch:{
      judge:{
        deep:true,
        handler:function () {
          this.oddArr = this.judge.judgeTypeThird.filter((item,index)=>{
            return index%2===0
          })
          this.evelArr = this.judge.judgeTypeThird.filter((item,index)=>{
            return index%2!==0
          })
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
    background #f4f4f4;
    margin-top 20px
    margin-bottom 20px
    border 2px solid #ccc
    box-sizing border-box
    border-radius 20px
    img
      width 100%
    h2

      font-size 24px
      color #333
      line-height 30px
      text-align: center
      margin 20px auto 30px
      width 300px
    p
      text-align: center
      font-size 32px
      height 44px
      overflow hidden
      white-space: nowrap
      width 300px
      text-overflow: ellipsis
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical;
      color #000
      letter-spacing 2px
      line-height 44px
      margin 20px auto 0
    width 350px



</style>
