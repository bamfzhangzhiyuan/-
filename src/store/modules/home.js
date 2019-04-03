import {reqHome} from "../../api"
export default {
  actions:{
    async reqHome({commit,state}){
      const res = await reqHome()
      if(res.code === 0){
        state.homeData = res.data
      }

    }
  },
  state:{
    homeData:{}
  }

}
