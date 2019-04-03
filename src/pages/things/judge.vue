<template>
<div class="judgeWrap">
  <div ref="thingUl">
    <img src="https://yanxuan.nosdn.127.net/0d2b1667aec92cb6b552e4316b602ca3.jpg" class="logoImg">
    <div class="gray"></div>
    <div class="titleContent">
      <h2 class="title">让生活更好的N种方法</h2>
      <div class="eatingTitle">
        <span class="iconfont icon-shuangyinhao1"></span>
        <h3 class="eating">今天也要好好吃饭！</h3>
        <span class="iconfont icon-shuangyinhao"></span>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in judgeCollection">
            <img v-lazy="item.banner.picUrl">
          </div>
        </div>
      </div>
      <div class="gray"></div>
    </div>
    <div class="detail">
      <p class="detailTitle">TA们的严选生活</p>
      <div class="select">
        <div :class="{on:$route.path === '/things/judge/first'}" @click="$router.push('/things/judge/first')">最新</div>
        <div :class="{on:$route.path === '/things/judge/second'}"@click="$router.push('/things/judge/second')">本月最热</div>
        <div :class="{on:$route.path === '/things/judge/third'}"@click="$router.push('/things/judge/third')">晒单合辑</div>
      </div>
        <div class="loading" v-if="isshow">
          正在加载
        </div>
        <router-view v-else :judge="judge"/>
    </div>
  </div>
</div>

</template>


<script>
  import {mapState} from "vuex"
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
export default{
  beforeDestroy(){
    this.$store.dispatch("clearThings")
  },
  mounted(){
    this.$store.dispatch("reqJudge",{page:1,type:this.type})

  },
  props:{
    ulHeight:Number,
    headHeight:Number,
  },
  data(){
    return{
      first:true,
      isfirst:true,
      isshow:true,
      firstUpdate:true,
      pagefirst:true
    }
  },
  computed:{
    ...mapState({
      judgeCollection:state=>state.things.judgeCollection,
      judge:state=>state.things.judge,
      page:state=>state.things.page,
      allheight:state=>state.things.allheight,

      loadingTop:state => state.things.loadingTop
    }),
    ...mapState(["height"]),
    type(){
      return this.$route.path === "/things/judge/first"? 1 :this.$route.path === "/things/judge/second" ? 2:3
    }
  },
  watch:{
    type(){
      this.first = true
      this.firstUpdate = true
      this.pagefirst = false
      this.isshow = true
      this.$store.dispatch("reqJudge",{page:1,type:this.type})
    },

    judgeCollection(){
      this.$nextTick(()=>{

        let swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween : -40,
          centeredSlides : true,
          speed:300,
          slideToClickedSlide: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        })

      })
    },
    judge:{
      deep:true,
      handler:function () {
        this.isfirst = true

        if(this.page === 2){
          this.first = true
        }



        if(this.first){

          this.first = false

          this.$nextTick(()=>{

            if(!this.firstUpdate||this.pagefirst){

              this.isshow = false

            }
            this.firstUpdate = false


            const allHeight = this.ulHeight +this.headHeight + this.height

            this.scrollUl = new BScroll('.judgeWrap',{
              click:true,
              probeType: 1,
            })
            this.scrollUl.on('scrollEnd', ({x, y}) => {
              /*console.log(this.allheight,allHeight,y)*/

              if(this.allheight+allHeight+y < 100 && this.page > 1){


                if(this.isfirst){
                  this.isfirst = false
                  this.$store.dispatch("reqJudge",{page:this.page,type:this.type})
                }
              }
            })

          })
        }

      }
    },

  }
}

</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
.judgeWrap
  position absolute
  top 200px
  bottom 100px
  width 100%
  .titleContent
    box-sizing border-box
    padding-top 40px
    .swiper-container
      height 280px
      padding-bottom 20px
      .swiper-slide
        text-align: center
        font-size: 18px
        background: #fff
        display: -webkit-box
        display: -ms-flexbox
        display: -webkit-flex
        display: flex
        justify-content space-around
        transform scale(0.7) translate3d(0px, 0px, -1200px) rotateX(0deg) rotateY(0deg)
        -webkit-box-pack: center
        -webkit-align-items: center
        align-items: center
        opacity 0.5

        transition all .5s
        z-index -10
        &.swiper-slide-active
          z-index 20
          opacity 1
          transform scale(1)
        img
          width 100%
          height 280px
    .eatingTitle
      width 50%
      margin 0 auto
      display flex
      justify-content space-between
      padding-top 40px
      padding-bottom 40px
      span
        color #ccc
        font-size 20px
      h3
        font-size 32px
        box-sizing border-box
        padding-left 10px
        color #333
    .title
      color #7f7f7f
      font-size 28px
      text-align: center
  .gray
    height 20px
    background #eee
  .logoImg
    display block
    height 400px
    width 100%

  .detail
    padding-top 40px
    .loading
      text-align: center
      height 150px
      line-height 100px
      background tan
      padding 40px
      width 100%
      box-sizing border-box
      font-size 30px
      color #000
    .select
      height 120px
      display flex
      justify-content space-around
      padding-top 40px
      div
        border-radius 10px
        color #333
        font-size 28px
        width 170px
        height 54px
        text-align: center
        line-height 54px
        background #f4f4f4
        &.on
          color #b0955f
          background #ffe4af
    .detailTitle
      text-align: center
      font-size 32px
      color #333
</style>
