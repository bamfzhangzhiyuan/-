import {reqSearch,reqRadomList} from "../api"
export default {
  getHeight({commit,state},hei){
    state.height = hei
  },
  async reqSearch({commit,state},msg){

    const res = await reqSearch(msg)

    if(res.code === "200"){
      state.searchList = res.data
    }

  },
  async reqRadomList({commit,state}){
    const res = await reqRadomList()
    if(res.code === "200"){
      state.radomList = res.data
      console.log(res.data);
    }
  },
  clear({commit,state}){
    state.searchList = []
  }
}
