import axios from "axios";
import {message} from "antd";

export default function ajax(url,data = {},method = "get") {
  let parAmteter = data;
  method = method.toLowerCase();
  if (method === "get"){
    parAmteter = {
      params:data
    }
  }
  return axios[method](url, parAmteter)
    .then((res) => {
      const { data } = res;

      if (data.status === 0) {
        return data.data;
      } else {
        message.error(data.msg, 2);
      }
    })
    .catch((err) => {
      message.error('网络出现异常，请刷新页面', 2);
    })
}