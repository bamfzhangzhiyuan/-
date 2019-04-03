import Mock from "mockjs"

import homeCategory from "./homeData.json"

import Discern from "./category.json"

Mock.mock("/homedata",{code:0,data:homeCategory})

Mock.mock("/discerndata",{code:0,data:Discern.categoryL1List})
