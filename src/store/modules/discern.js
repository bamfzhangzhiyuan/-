import {reqDiscern} from "../../api"
export default {
  state:{
    discernData:[]
  },
  actions:{
    async reqData({commit,state}){
      const res = await reqDiscern()

      if(res.code === 0){
        state.discernData = res.data
      }
    }
  }
}
