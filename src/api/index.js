import ajax from "./ajax"

const prefix = "/api"

export const reqHome = ()=> ajax(''+"/homedata")

export const reqDiscern = ()=> ajax(''+"/discerndata")

export const reqThings = ()=> ajax(prefix+'/topic/v1/find/recManual.json')

export const reqPages = (page) => ajax(prefix+"topic/v1/find/recAuto.json",{"page":page,"size":5,"exceptIds":"8907,4035,8319,9065,8863,1215,8166,8741,8250,7696,9062,7852,6965,2876,9439,8998,3438,3534,8912,5711,3744,8757,8311"})

export const reqJudgePages = (page,type) => ajax(prefix+"/topic/v1/look/getList.json",{page,'size':20,type,"csrf_token":"f543978c0be205cf07c9f1a9fccf14f5"})

export const reqJudgeCollection = () => ajax(prefix+"/topic/v1/look/getCollection.json",{'id':60,'csrf_token':'f543978c0be205cf07c9f1a9fccf14f5'})

export const reqRadomList = () => ajax (prefix+"/xhr/search/init.json",{'csrf_token':'f543978c0be205cf07c9f1a9fccf14f5'})

export const reqSearch = (msg) => ajax (prefix+"/xhr/search/searchAutoComplete.json",{'keywordPrefix':msg})
