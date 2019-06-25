import ajax from "./axios.js";
import jsonp from "jsonp";
import {message} from "antd"

export const answer = (username,password) => ajax("/login",{username,password},"post");

export const reqUser = (id) => ajax("/validate/user",{id},"post");

export const getWeather = function () {
  let cancel = null;
  const promise = new Promise((resolve, reject) => {
    cancel = jsonp("http://api.map.baidu.com/telematics/v3/weather?location=深圳&output=json&ak=3p49MVra6urFRGOT9s8UBWr2",{},function (err,data) {
      if (!err){
        const { weather,dayPictureUrl } = data.results[0].weather_data[0];
        resolve({
          weatherImg: dayPictureUrl,
          weather
        })
      }else {
        message.error("获取天气失败，请刷新页面");
        resolve();
      }
    })
  });
  return {
    promise,
    cancel
  }
};

export const gainUserList = (parentId) => ajax('/manage/category/list',{parentId});