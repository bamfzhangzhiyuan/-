import {reqThings,reqPages,reqJudgeCollection,reqJudgePages} from "../../api"
export default {
  state:{
    allheight:0,
    data:[],
    pageData:[],
    first:true,
    judgeFirst:true,
    judgeCollection:[],
    judge:{
      judgeTypeFirst:[],
      judgeTypeSecond:[],
      judgeTypeThird:[]
    },
    page:1,
    mainpage:1,
    loadingTop:1030,
  },

  actions:{
    saveHeight({commit,state},height){
      state.allheight = height
    },

    async reqThings({commit,state},num){
      let result
      let arr = []
        if(state.first){
           result = await reqThings()
          state.first = false
          result.data.map((item,index)=>{
            item.topics.map((item,index)=>{
              arr.push(item)
            })
          })
        }
      result = await reqPages(num)
      state.mainpage++
      result.data.result.map((item,index)=>{
        item.topics.map((item,index)=>{
          arr.push(item)
        })
      })
      state.data.push(...arr)
    },
    clearData({commit,state}){
      state.first = true
      state.data = []
      state.mainpage = 1
    },
    async reqJudge ({commit,state},{page,type}){
      let arr = []
      if(state.judgeFirst){
        state.judgeFirst = false
        const res = await reqJudgeCollection()
        if(res.code === "200"){
          state.judgeCollection = res.data.lookList
        }
        const newres = await reqJudgePages(page,type)
        if(newres.code === "200"){
          type === 1?state.judge.judgeTypeFirst = newres.data.topicList : type === 2? state.judge.judgeTypeSecond = newres.data.topicList:state.judge.judgeTypeThird = newres.data.topicList
          state.page = 2
        }
      }else{
        if(type === 1){
          const res = await reqJudgePages(page,type)
          res.data.topicList.map((item,index)=>{
            state.judge.judgeTypeFirst.push(item)
          })
        }else if(type === 2){
          const res = await reqJudgePages(page,type)
          res.data.topicList.map((item,index)=>{
            state.judge.judgeTypeSecond.push(item)
          })
        }else{
          const res = await reqJudgePages(page,type)
          res.data.topicList.map((item,index)=>{
            state.judge.judgeTypeThird.push(item)
          })
        }
        state.page = state.page+1
      }
    },
    clearThings({commit,state},type){
      if(type){
        type === 1?state.judge.judgeTypeFirst = []:type === 2?state.judge.judgeTypeSecond = []:state.judge.judgeTypeThird = []
        state.page = 1
      }else{
        state.judgeFirst = true
      }
    }
  }
}
