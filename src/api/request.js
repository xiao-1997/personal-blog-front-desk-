import axios from "axios";
import showMessage from "../utils/showMessage";

const ins = axios.create();//创建axios实例
ins.interceptors.response.use(function (resp) {
  //axios实例再有拦截器的情况下先运行拦截器，
  //然后在运行返回结果
  // console.log("拦截器");
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: "error",
      duration: 1500,
    })
    return null;
  }
  return resp.data.data;
})

export default ins;