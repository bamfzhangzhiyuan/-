<template>
<div class="allWrap">
  <div class="searchWrap">
    <form @submit.prevent="showData" :action="radomList.defaultKeyword?radomList.defaultKeyword.schemeUrl:''">
      <div class="search">
        <span class="iconfont icon-sousuo1"></span>
        <input :placeholder="radomList.defaultKeyword?radomList.defaultKeyword.keyword:''" type="text" v-model="msg"/>
        <span class="canle" @click="clear">取消</span>
      </div>
    </form>
    <div class="list" v-show="searchList.length === 0">
      <h2>
        热门搜索
      </h2>
      <nav>
        <a :href="item.schemeUrl" v-for="(item,index) in radomList.hotKeywordVOList" :class="{on:item.highlight !== 0}">{{item.keyword}}</a>
      </nav>
    </div>
    <ul>
      <li  v-for="(item,index) in searchList">{{item}}</li>
    </ul>
    <div>

    </div>
  </div>
</div>

</template>


<script>
  import {mapState} from "vuex"
export default{
  data(){
    return{
      msg:""
    }
  },
  computed:{
    ...mapState(["searchList","radomList"])
  },
  mounted(){
    this.$store.dispatch("reqRadomList")
  },
  watch:{
    msg(e){
      console.log(e);
      this.$store.dispatch("reqSearch",e)
    },
    searchList(e){
      console.log(e);
    }
  },
  methods:{
    clear(){
      if(this.msg.length !== 0){
        this.$store.dispatch("clear")
        this.msg = ""
      }else{
        this.$router.back()
      }

    },

    showData(e){
      window.location.href = this.msg?`http://m.you.163.com/search?keyword=${this.msg}&_stat_search=userhand`:e.target.action
    }
  }
}

</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
.allWrap
  height 100%
  width 100%
  background #ccc
.searchWrap
  background #fff
  ul
    li
      height 100px
      line-height 100px
      margin-left 40px
      border-bottom 1px solid #eee
  .list
    h2
      margin-top 40px
      padding-left 40px
      margin-bottom 40px
      font-size 28px
      color #999
    nav
      padding-left 40px
      overflow hidden
      a
        padding 0 15px
        line-height 40px
        margin 0 32px 32px 0
        border: 1px solid #999
        float left
        color #333
        font-size 24px
        &.on
          color #b4282d
          border-color #b4282d
.search
  padding 20px
  width 100%
  height 88px
  box-sizing border-box
  display flex
  .canle
    position absolute
    right 40px
    top 30px
    font-size 28px
    color #333
  .iconfont
    z-index 20
    position absolute
    left 50px
    top 32px
  input
    position absolute
    background #f4f4f4;
    left 40px
    padding-left 50px
    width 550px
    height 56px
    outline none
    border none


</style>
