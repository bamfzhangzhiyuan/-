import axios from "axios"

export default function ajax(url,data={},type="GET") {
    return new Promise((reslove,reject)=>{
      let promise
      if(type === "GET"){
        promise = axios.get(url,{
          params:data
        })
      }else{
        console.log(data);
        promise = axios.post(url,data)
      }
      promise
        .then((res)=>{
        reslove(res.data)
      })
        .catch(err=>alert(err.message))
    })
}
