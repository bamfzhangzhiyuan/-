<template>
  <div class="thingUlwrap">
    <ul  ref = "thingUl" class="thingsUl">
      <div class="gray"></div>
      <li :class="item.type ===0 ? 'firstType':''" v-for="(item,index) in data">
        <div  v-if="item.type === 0" >
          <div v-if="!item.lookList">
            <div class="nick">
              <img v-lazy="item.avatar" class="nickImg">
              <span>{{item.nickname}}</span>
            </div>
            <h2 class="title">{{item.title}}</h2>
            <div class="detail">
              <img v-lazy="item.picUrl" class="radioImg">
            </div>
            <div class="foot">
              <span class="iconfont icon-yanjing"></span>
              <span>{{item.readCount}}人看过</span>
            </div>
            <a class="hasradio" v-if="item.hasVideo" :href="'http://m.you.163.com'+item.schemeUrl">
              <span class="iconfont icon-sanjiaoxing"></span>
            </a>
          </div>
          <div class="swiper" v-else>
            <a href="javascript:;">
              <div class="swiperTitle">{{item.title}}</div>
            </a>
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(now,index) in item.lookList">
                  <img v-lazy="now.picUrl">
                </div>
              </div>
            </div>
            <div class="foot">
              <span class="iconfont icon-yanjing"></span>
              <span>25.4.w人看过</span>
            </div>
          </div>
        </div>
        <div class="secondType" v-else >
          <div class="left">
            <div class="header">
              <img v-lazy="item.avatar">
              <span>{{item.nickname}}</span>
            </div>
            <div class="content">
              <div class="first">{{item.title}}</div>
              <div class="ellipsis second">
                {{item.subTitle}}
              </div>
            </div>
            <div class="foot">
              <span class="iconfont icon-yanjing"></span>
              <span>{{item.readCount}}人看过</span>
            </div>
          </div>
          <div class="right">
            <img v-lazy="item.picUrl">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.min.css"
  import BScroll from 'better-scroll'
  import {mapState} from "vuex"
  export default{
    props:{
      ulHeight:Number,
      headHeight:Number,
    },
    data(){
      return{
        liList:["推荐","好货内部价","美食榜单","回购榜","晒单","达人","上新","home"],
        liIndex:0,
        liClass:["firstType","secondType",],
        first:true,
        ulHeighte:0,
        updata:true
      }
    },
    mounted(){
      this.$store.dispatch("reqThings",1)
    },
    computed:{
      ...mapState({
        data: state=> state.things.data,
        mainpage: state => state.things.mainpage
      }),
      ...mapState(["height"])
    },
    beforeDestroy(){
      this.$store.dispatch("clearData")
    },
    watch:{
      data:{
        deep:true,

        handler:function () {
          console.log("ss");
          this.updata = true
            const allHeight = this.ulHeight +this.headHeight + this.height



            this.$nextTick(()=>{

              this.ulHeighte = this.$refs.thingUl.clientHeight

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
            if(this.first){
              this.first = false

              this.$nextTick(()=>{



                this.scrollUl = new BScroll('.thingUlwrap',{
                  click:true,
                  probeType: 1,
                })

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
                this.scrollUl.on('scrollEnd', ({x, y}) => {

                  if(this.ulHeighte-allHeight+y < 420){

                    if(this.updata){
                      this.$store.dispatch("reqThings",this.mainpage)
                      this.updata = false
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
  .gray
    height 20px
    background #eee
  .thingUlwrap
    position absolute
    top 200px
    bottom 100px
    width 100%
  .thingsUl
    width 100%
    .thirdType
    .firstType
      padding 36px 30px
      box-sizing border-box
      width 100%
      position relative
      border-bottom 20px solid #eee
      .swiper
        a
          display block
          padding-bottom 34px
          .swiperTitle
            font-size 36px
        .swiper-container
          height 280px
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
      .hasradio
        position absolute
        width 88px
        height 88px
        border 4px solid #fff
        border-radius 50%
        top 55%
        left 45%
        text-align: center
        line-height 88px
        .iconfont
          color #fff
          font-size 50px
      .foot
        height 40px
        line-height 40px
        margin-top 10px
        color #999
        font-size 22px
      .detail
        .detailImg
          width 690px
          height 390px
        .radioImg
          width 690px
          height 390px
      .title
        color #333
        line-height 50px
        letter-spacing 2px
        font-size 36px
        padding-bottom 20px
      .nick
        height 50px
        margin-bottom 24px
        font-size 28px
        .nickImg
          width 60px
          height 60px
          border-radius 50%
          vertical-align middle



    .secondType
      width 100%
      height 400px
      padding 36px 30px
      display flex
      box-sizing border-box
      align-items center
      justify-content space-between
      border-bottom 20px solid #eee
      .right
        img
          width 272px
          height 272px
      .left
        width 400px
        .foot
          padding-top 30px
          font-size 22px
          color #999
        .content
          padding 32px 0 0 0
          .first
            font-size 36px
            text-overflow: ellipsis
            height 80px
            display: -webkit-box
            white-space: normal
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
            color #333
            line-height 40px
            overflow hidden
          .second
            height 40px
            line-height 40px
            font-size 28px
            padding 20px 0 0 0
            overflow hidden
            text-overflow: ellipsis
            white-space: nowrap
            color #7f7f7f
        .header
          font-size 28px
          img
            width 60px
            height 60px
            border-radius 50%
            vertical-align middle


</style>
