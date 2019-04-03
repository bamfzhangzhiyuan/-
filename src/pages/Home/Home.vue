<template>
    <div class="home">
      <div class="hometainer" >
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in homeData?homeData.focusList:''">
              <img v-lazy="item.picUrl" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination">
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
          </div>

        </div>
        <ul class="promise">
          <li v-for="(item,index) in homeData?homeData.policyDescList:''">
            <span>{{item.desc}}</span>
          </li>
        </ul>
        <ul class="storeCategory">
          <li v-for="(item,index) in homeData.kingKongModule?homeData.kingKongModule.kingKongList:''" @click="goWeb(item.schemeUrl)">
            <img v-lazy="item.picUrl" alt="" >
            <span>{{item.text}}</span>
          </li>
        </ul>
        <div class="newGift">
          <div class="title">—&nbsp;新人专享礼&nbsp;—</div>
          <div class="gift">
            <div class="leftGift">
              <div class="titleOne">新人专享礼包</div>
              <div class="imgOne">
                <img src="../../../static/images/new/3.png" alt="">
              </div>
            </div>
            <div class="rightGift">
               <div class="topGift">
                  <div class="word">
                    <p class="fulis">{{homeData.indexActivityModule?homeData.indexActivityModule[0].title:''}}</p>
                    <p class="today">{{homeData.indexActivityModule?homeData.indexActivityModule[0].subTitle:''}}</p>
                  </div>
                  <div class="storePrice">
                    <img :src="homeData.indexActivityModule?homeData.indexActivityModule[0].picUrl:''" alt="">
                    <div class="price">
                      <div class="money">
                        <span>{{homeData.indexActivityModule?homeData.indexActivityModule[0].activityPrice:''}}</span>
                        <div class="three">{{homeData.indexActivityModule?homeData.indexActivityModule[0].originPrice:''}}<span class="line"></span></div>
                      </div>
                      <div class="line"></div>
                    </div>
                  </div>
               </div>
               <div class="bottomGift">
                 <div class="word">
                   <p class="fulis">{{homeData.indexActivityModule?homeData.indexActivityModule[1].title:''}}</p>
                   <p class="oneyuan">{{homeData.indexActivityModule?homeData.indexActivityModule[1].subTitle:''}}</p>
                 </div>
                 <div class="storePrice">
                   <img :src="homeData.indexActivityModule?homeData.indexActivityModule[1].picUrl:''" alt="">
                   <div class="price">
                     <div class="money">
                       <span>{{homeData.indexActivityModule?homeData.indexActivityModule[1].activityPrice:''}}</span>
                       <div class="three">{{homeData.indexActivityModule?homeData.indexActivityModule[1].originPrice:''}}<span class="line"></span></div>
                     </div>
                     <div class="line"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
        <div class="brand">
           <div class="brandTitle">
             <span>品牌制造商直供</span>
             <span>更多<i class="iconfont icon-jiantou"></i></span>
           </div>
           <ul class="brandList">
             <li v-for="(item,index) in homeData?homeData.tagList:''">
               <img v-lazy="item.webIndexVerticalPicUrl" alt="">
               <div class="brandWord">
                 <h4>{{item.extra.materialName}}</h4>
                 <div class="upNew">
                   <span>￥{{item.floorPrice}}</span>
                   <span class="new">上新</span>
                 </div>
               </div>
             </li>
           </ul>
        </div>
        <div class="rankingList">
           <div class="rankingtitle">
             <span>类目热销榜</span>
           </div>
           <div class="lists">
             <ul class="topList">
               <li>
                 <div class="word">
                   <span>热销榜</span>
                   <div class="blackLine"></div>
                 </div>
                 <img src="../../../static/images/ranking/1.png" alt="">
               </li>
               <li>
                 <div class="word">
                   <span>热销榜</span>
                   <div class="blackLine"></div>
                 </div>
                 <img src="../../../static/images/ranking/2.png" alt="">
               </li>
             </ul>
             <ul class="bottomList">
               <li v-for="(item,index) in homeData.categoryHotSellModule?homeData.categoryHotSellModule.categoryList:''" @click="goPink(item.targetUrl)">
                 <div class="listTitle">{{item.categoryName}}</div>
                 <img v-lazy="item.picUrl" alt="">
               </li>
             </ul>
           </div>
        </div>
        <div class="personTro">
           <div class="personTroTitle">
             <span>人气推荐</span>
             <span>更多<i class="iconfont icon-jiantou"></i></span>
           </div>
           <div class="personTroMiddle">
              <div class="middleLeft">
                <img src="../../../static/images/personTro/1.png" alt="">
              </div>
              <div class="middleWord">
                <div class="firstRow">
                  <span class="reduce">每满299减60</span>
                  <div class="vouchers">
                    <span>每满299减50券</span>
                    <img class="left" src="../../../static/images/personTro/7.png" alt="">
                    <img class="right" src="../../../static/images/personTro/8.png" alt="">
                  </div>
                </div>
                <div class="secondRow">泰国制造 天然乳胶枕 护颈按摩</div>
                <div class="threeRow">0合成胶 SGS全程监控</div>
                <div class="fourRow"><span>￥199</span></div>
              </div>
           </div>
           <ul class="personTroList">
              <li v-for="(item,index) in homeData.popularItemList?homeData.popularItemList.slice(1):''">
                <div class="pictueImg">
                  <img v-lazy="item.primaryPicUrl" alt="">
                </div>
                <div class="goodName">
                  <span>{{item.simpleDesc}}&nbsp;</span>
                  <span class="price">￥{{item.counterPrice}}</span>
                </div>
                <div class="label">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
           </ul>
        </div>
        <div class="limitTime">
          <div class="limitTitle">
            <div class="leftTitle">
              <span class="xsg">限时购</span>
              <span class="time">00</span>
              <span >:</span>
              <span class="time">12</span>
              <span >:</span>
              <span class="time">01</span>
            </div>
            <span>更多<i class="iconfont icon-jiantou"></i></span>
          </div>
          <ul class="timeList">
            <li v-for="(item,index) in homeData.flashSaleModule?homeData.flashSaleModule.itemList:''">
              <div class="timeImg">
                <img v-lazy="item.picUrl" alt="">
              </div>
              <div class="timePrice">
                <span class="sellPrice">￥{{item.activityPrice}}</span>
                <div class="prePrice">
                  <span>￥{{item.originPrice}}</span>
                  <div class="timeLine"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="newGoods">
          <div class="newTitle">
            <span>新品首发</span>
            <span>更多<i class="iconfont icon-jiantou"></i></span>
          </div>
          <ul class="newList">
            <li v-for="(item,index) in homeData.newItemList?homeData.newItemList:''">
              <div class="newImg">
                <img v-lazy="item.scenePicUrl">
                <div class="seclet">
                  <span>5</span>
                  <span>色</span>
                  <span>可</span>
                  <span>选</span>
                </div>
              </div>
              <div class="goodName">
                <span>{{item.simpleDesc}}&nbsp;</span>
                <span class="price">￥{{item.counterPrice}}</span>
              </div>
              <div class="label">
                <p>爆品</p>
                <p>限时购</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="fourBrand">

          <ul class="brandList">
            <li v-for="(item,index) in homeData.sceneLightShoppingGuideModule?homeData.sceneLightShoppingGuideModule:''">
              <div class="twoImg">
                <img v-lazy="item.styleItem.picUrlList[0]" alt="">
                <img v-lazy="item.styleItem.picUrlList[1]" alt="">
              </div>
              <div class="brandWord">
                <h4>{{item.styleItem.title}}</h4>
                <div class="upNew">
                  <span>{{item.styleItem.desc}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="categoryModule">
          <div class="categories" v-for="(item,index) in homeData.categoryModule?homeData.categoryModule:''">
              <div class="categoryImage">
                <img v-lazy="item.titlePicUrl" alt="">
              </div>
              <div class="categoryGoods">
                <div :class="`hello${index}`" class="categoryList">
                  <ul class="goodList">
                    <li v-for="(current,currentIndex) in item.itemList">
                      <div class="newImg">
                        <img v-lazy="current.scenePicUrl" alt="">
                        <div class="seclet" v-if="current.colorNum">
                          <span>{{current.colorNum}}</span>
                          <span>色</span>
                          <span>可</span>
                          <span>选</span>
                        </div>
                      </div>
                      <div class="goodName">
                        <span>{{current.name}}&nbsp;</span>
                        <span class="price">￥{{current.counterPrice}}</span>
                      </div>
                      <div class="label">
                        <p>爆品</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
        <div class="bottomWrap">
          <div class="bottom">
              <div class="app">
                <span>下载APP</span>
                <span>电脑版</span>
              </div>
              <div class="info">
                <p>网易公司版权所有 © 1997-2009</p>
                <p>食品经营许可证：JY13301080111719</p>
              </div>
          </div>
        </div>
      </div>
      <HeaderSearch :mask="mask" :homeData="homeData"/>
      <div v-show="show" class="mask">

      </div>
    </div>
</template>
<script>
  import HeaderSearch from '../../components/HeaderSearch/HeaderSearch.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  import {mapState} from "vuex"
  export default {
    data(){
      return{
        show:false
      }
    },
    components:{
      HeaderSearch
    },
    computed:{
      ...mapState({
        homeData:state=>state.home.homeData
      })
    },
    mounted(){
      this.$store.dispatch("reqHome")




    },
    methods:{
      mask(show){
        this.show = show
      },
      goWeb(schemeUrl){
        window.location.href = schemeUrl

      },
      goPink(url){
        window.location.href = url
      }
    },
    watch:{
      homeData:{
        deep:true,
        handler:function (e) {
          this.$nextTick(()=>{
            const all = document.querySelectorAll(".categoryList")

            const newarr = Array.from(all)
            newarr.map((item,index)=>{
              new BScroll(`.${item._prevClass.slice(13)}`, {
                scrollX: true,
                click: true,
              })

            })
            new BScroll('.home', {
              click: true
            })
            const mySwiper = new Swiper ('.swiper-container', {
              direction: 'horizontal',
              loop: true,


              pagination: {
                el: '.swiper-pagination',
                clickable :true,
              },

            })
          })
        }
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
      .home
        width 100%
        height 100%
        .mask
          position absolute
          top 0
          bottom 0
          z-index 250
          width 100%
          background rgba(0,0,0,0.5)
        .hometainer
          padding-bottom 250px
          .swiper-container
            width 100%
            height 370px
            position relative
            margin-top 148px
            .swiper-wrapper
               width 100%
               height 100%
               img
                 width 100%
                 height 100%


          .promise
            width 100%
            height 72px
            display flex
            justify-content space-around
            font-size 30px
            li
              height 72px
              line-height 72px
              text-align center
              color #B4282D
              span
                margin-left 34px
              &:nth-child(1)
                background url("../../../static/images/smart/2.png")
                background-repeat no-repeat
                background-size 34px
                background-position-y 20px
              &:nth-child(2)
                background url("../../../static/images/smart/1.png")
                background-repeat no-repeat
                background-size 34px
                background-position-y 20px
              &:nth-child(3)
                background url("../../../static/images/smart/3.png")
                background-repeat no-repeat
                background-size 34px
                background-position-y 20px



          .storeCategory
             width 100%
             height 373px
             background-color #F5F5F5
             display flex
             flex-wrap wrap
             li
               width 20%
               height 156px
               background-color #F5F5F5
               display flex
               flex-direction column
               align-items center
               justify-content space-around
               img
                 width 75%
                 height 105px

          .newGift
             width 100%
             height 558px
             box-sizing border-box
             padding 0 20px
             .title
               width 100%
               height 90px
               line-height 90px
               text-align center
               font-size 32px
             .gift
               width 100%
               height 438px
               .leftGift
                 float left
                 width 45%
                 height 434px
                 background-color #FFE9CE
                 border-right 1px solid white
                 .titleOne
                    height 78px
                    font-size 32px
                    line-height 100px
                    margin-left 30px
                 .imgOne
                    height 300px
                    position relative
                    margin-top 20px
                    img
                       width 80%
                       height 80%
                       display block
                       position absolute
                       left 50%
                       top 50%
                       transform translate(-50%,-50%)

               .rightGift
                 float left
                 width 54.5%
                 height 434px
                 border-left 1px solid white
                 .topGift
                    width 100%
                    height 50%
                    border-bottom 1px solid white
                    background-color #FFE1D2
                    position relative
                 .bottomGift
                     width 100%
                     height 50%
                     border-top 1px solid white
                     background-color #FFECC1
                     position relative
                    .word
                      display inline-block
                      padding-top 30px
                      font-size 30px
                      margin-left 30px
                      .fulis
                        font-size 40px
                        padding-bottom 20px
                      .today
                         color #8D8A88
                      .oneyuan
                         height 40px
                         line-height 40px
                         background-color #D0B491
                         border-radius 6px
                         text-align center
                         color #ffffff
                    .storePrice
                      width 200px
                      height 200px
                      margin-right 10px
                      position absolute
                      right 0
                      top 0
                      img
                        width 110%
                        height 110%
                        position absolute
                        left 0px
                        top 15px
                      .price
                        width 90px
                        height 90px
                        background-color #FF9F2A
                        border-radius 50%
                        text-align center
                        color white
                        position absolute
                        left 90px
                        top 20px
                        .money
                          margin-top 20px
                          .three
                            position relative
                            .line
                              width 40px
                              height 5px
                              background-color white
                              position absolute
                              left 50%
                              top 50%
                              transform translate(-50%,-50%)
                              z-index 10






          .brand
             border-top 30px solid #F5F5F5
             width 100%
             box-sizing border-box
             padding 0 20px
             .brandTitle
               height 100px
               display flex
               font-size 35px
               align-items center
               justify-content space-between
             .brandList
               height 554px
               li
                 float left
                 width 49.3%
                 height 261px
                 margin-top 8px
                 position relative
                 &:nth-child(2n)
                   margin-left 8px
                 img
                   width 100%
                   height 100%
                 .brandWord
                   width 100%
                   position absolute
                   left 50%
                   top 20px
                   transform translateX(-50%)
                   h4
                     font-size 33px
                     color #333
                     text-align center
                   .upNew
                      font-size 27px
                      color #7F7F7F
                      margin-top 3px
                      text-align center
                      .new
                         background-color #D0B491
                         padding 0 8px
                         height 34px
                         display inline-block
                         text-align center
                         line-height 34px
                         border-radius 4px
                         color white
          .rankingList
            border-top 30px solid #F5F5F5
            width 100%
            height 730px
            box-sizing border-box
            padding 0 20px
            .rankingtitle
              height 100px
              line-height 100px
              font-size 35px
            .topList
              display flex
              justify-content space-between
              margin-bottom 10px
              li
                width 49.3%
                height 200px
                display flex
                justify-content space-between
                &:nth-child(1)
                  background-color #FCF4E4
                &:nth-child(2)
                  background-color #EAF0F7
                .word
                   font-size 35px
                   width 100%
                   color #000
                   span
                      display inline-block
                      margin-top 65px
                      margin-left 20px
                   .blackLine
                      margin  20px 20px
                      width 60px
                      height 5px
                      background-color black
                img
                   width 200px
                   height 200px
            .bottomList
              display flex
              flex-wrap wrap
              justify-content space-between
              li
                width 24%
                height 180px
                background-color #F6F6F6
                margin-bottom 10px
                text-align center
                .listTitle
                   font-size 20px
                   text-align center
                   padding-top 20px
                img
                   width 120px
                   height 120px
                   padding-top 10px


          .personTro
            border-top 30px solid #F5F5F5
            width 100%
            height 784px
            box-sizing border-box
            padding 0 20px
            .personTroTitle
              height 100px
              display flex
              font-size 35px
              align-items center
              justify-content space-between
            .personTroMiddle
              width 100%
              height 280px
              background-color #FFF0DF
              display flex
              justify-content space-between
              .middleLeft
                width 280px
                height 280px
                img
                  width 100%
                  height 100%
              .middleWord
                font-size 25px
                margin-left 20px
                width 60%
                padding-top 50px
                .firstRow
                  color red
                  padding-bottom 10px
                  .reduce
                    display inline-block
                    margin-right 15px
                    padding 5px 2px
                    border 1px solid red
                    background-color white
                  .vouchers
                    width 170px
                    height 24px
                    display inline-block
                    background-color white
                    padding 2px 4px
                    border 1px solid red
                    position relative
                    text-align center
                    font-size 10px
                    .left
                      width 10%
                      height 30px
                      position absolute
                      left -7%
                      top -1px
                    .right
                      width 10%
                      height 30px
                      position absolute
                      right -7%
                      top -1px
                .secondRow
                  font-size 26px
                  width 80%
                  padding 15px 0
                  display block
                  overflow hidden
                  white-space nowrap
                  text-overflow ellipsis
                .threeRow
                  font-size 25px
                  color #7F7F7F
                .fourRow
                  padding 15px 0
                  color red
            .personTroList
               width 100%
               height 337px
               display flex
               justify-content space-between
               margin-top 15px
               li
                 width 32%
                 height 337px
                 .pictueImg
                   background-color #F6F6F6
                   margin-bottom 10px
                   img
                      width 216px
                      height 216px
                 .goodName
                    line-height 30px
                    .price
                       color #CD2D3A
                 .label
                    color #CD2D3A
                    font-size 20px
                    margin-top 10px
                    p
                      float left
                      padding 2px 10px
                      border 2px solid #CD2D3A
                      border-radius 10px
                      margin-right 10px
                    .vouchers
                      width 170px
                      height 24px
                      display inline-block
                      background-color white
                      padding 2px 4px
                      border 1px solid #CD2D3A
                      position relative
                      text-align center
                      font-size 10px
                      margin-left 12px
                      .left
                        width 10%
                        height 30px
                        position absolute
                        left -7%
                        top -1px
                      .right
                        width 10%
                        height 30px
                        position absolute
                        right -7%
                        top -1px

          .limitTime
            border-top 30px solid #F5F5F5
            width 100%
            height 784px
            box-sizing border-box
            padding 0 20px
            .limitTitle
              height 100px
              display flex
              font-size 35px
              align-items center
              justify-content space-between
              .leftTitle
                .xsg
                  display inline-block
                  margin-right 20px
                .time
                  display inline-block
                  font-size 26px
                  border 1px solid #000
                  padding 4px
                  background-color #000
                  border-radius 8px
                  color #fff


            .timeList
               width 100%
               height 598px
               display flex
               justify-content space-between
               flex-wrap wrap
               li
                 width 32%
                 height 299px
                 margin-bottom 14px
                 .timeImg
                   width 100%
                   height 218px
                   background-color #F6F6F6
                   margin-bottom 20px
                   img
                      width 100%
                      height 100%
                 .timePrice
                    display flex
                    align-items center
                    .sellPrice
                       font-size 30px
                       color red
                    .prePrice
                       font-size 25px
                       margin-left 10px
                       position relative
                       color #7f7f7f
                       .timeLine
                          width 70px
                          height 3px
                          background-color #7f7f7f
                          position absolute
                          left 50%
                          top 50%
                          transform translate(-50% ,-50%)

          .newGoods
            border-top 30px solid #F5F5F5
            width 100%
            box-sizing border-box
            padding 0 20px
            .newTitle
              height 100px
              display flex
              font-size 35px
              align-items center
              justify-content space-between
            .newList
              width 100%
              display flex
              justify-content space-between
              flex-wrap wrap
              li
                width 32%
                height 354px
                margin-bottom 14px
                .newImg
                  width 100%
                  height 218px
                  background-color #F6F6F6
                  margin-bottom 20px
                  position relative
                  .seclet
                    position absolute
                    left 10px
                    top 10px
                    color #B99E77
                    display flex
                    flex-direction column
                    align-items center
                    justify-content center
                    border 1px solid #B99E77
                    padding 10px 4px
                  img
                    width 100%
                    height 100%
                .goodName
                  line-height 30px
                  color #363636
                  .price
                    color #CD2D3A
                .label
                  color #CD2D3A
                  font-size 20px
                  margin-top 10px
                  p
                    float left
                    padding 2px 10px
                    border 2px solid #CD2D3A
                    border-radius 10px
                    margin-right 10px
                  .vouchers
                    width 170px
                    height 24px
                    display inline-block
                    background-color white
                    padding 2px 4px
                    border 1px solid red
                    position relative
                    text-align center
                    font-size 10px
                    margin-left 12px
                    .left
                      width 10%
                      height 30px
                      position absolute
                      left -7%
                      top -1px
                    .right
                      width 10%
                      height 30px
                      position absolute
                      right -7%
                      top -1px

          .fourBrand
            border-top 30px solid #F5F5F5
            width 100%
            box-sizing border-box
            padding 0 20px
            .brandList
              height 554px
              li
                float left
                width 49.3%
                height 261px
                background-color #F6F6F6
                margin-top 8px
                position relative
                &:nth-child(2n)
                  margin-left 8px
                .twoImg
                  display flex
                  margin-top 25%
                  img
                    width 50%
                    height 50%
                .brandWord
                  width 100%
                  position absolute
                  left 50%
                  top 20px
                  transform translateX(-50%)
                  padding-left 15%
                  h4
                    font-size 33px
                    color #333
                    margin-bottom 5px
                  .upNew
                    font-size 27px
                    color #7F7F7F
                    margin-top 3px

          .categoryModule
             .categories
               border-top 30px solid #F5F5F5
               width 100%
               height 778px
               box-sizing border-box
               .categoryImage
                 width 100%
                 height 370px
                 margin-bottom 20px
                 img
                   width 100%
                   height 100%
               .categoryGoods
                  width 100%
                  height 391px
                  padding 0 20px
                  .categoryList
                     width 100%
                     height 100%
                     display flex
                     .goodList
                        height 100%
                        width 240%
                        display flex
                        li
                          width 200px
                          height 361px
                          margin-right 20px
                          .more
                            width 100%
                            height 218px
                            line-height 218px
                            text-align center
                            background-color #F7F7F7
                          .newImg
                            width 100%
                            height 218px
                            text-align center
                            background-color #F6F6F6
                            margin-bottom 20px
                            position relative
                            .seclet
                              position absolute
                              left 10px
                              top 10px
                              color #B99E77
                              display flex
                              flex-direction column
                              align-items center
                              justify-content center
                              border 1px solid #B99E77
                              padding 10px 4px
                            img
                              width 216px
                              height 216px
                          .goodName
                            line-height 30px
                            color #363636
                            .price
                              color #CD2D3A
                          .label
                            color #CD2D3A
                            font-size 20px
                            margin-top 10px
                            p
                              float left
                              padding 2px 10px
                              border 2px solid #CD2D3A
                              border-radius 10px
                              margin-right 10px
                            .vouchers
                              width 170px
                              height 24px
                              display inline-block
                              background-color white
                              padding 2px 4px
                              border 1px solid #CD2D3A
                              position relative
                              text-align center
                              font-size 10px
                              margin-left 12px
                              .left
                                width 10%
                                height 30px
                                position absolute
                                left -7%
                                top -1px
                              .right
                                width 10%
                                height 30px
                                position absolute
                                right -7%
                                top -1px

          .bottomWrap
             width 100%
             height 245px
             background-color #434343
             border-top 20px solid #F5F5F5
             .bottom
               width 100%
               color #fff
               margin-top 8%
               .app
                  overflow hidden
                  margin-bottom 30px
                  span
                    float left
                    height 61px
                    width 172px
                    line-height 61px
                    border 2px solid #7F7F7F
                    border-radius 5px
                    margin 0 auto
                    text-align center
                    &:nth-child(1)
                       margin-right 30px
                       margin-left 25%
               .info
                  p
                    text-align center
                    color #7F7F7F
                    margin-bottom 10px


</style>
