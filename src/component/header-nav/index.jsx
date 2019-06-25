import React from "react";
import "./index.less";
import Quitbtn from "../quitbtn/index";
import {withRouter} from "react-router-dom";
import {getWeather} from "../../api/axios";
import dayjs from "dayjs";
import {getItem,removeItem} from "../../utils/islogin";
import {Modal} from "antd";
import menuList from "../../config/menuConfig";
const { confirm } = Modal;
class HeadNav extends React.Component{
  state = {
    sysTime: Date.now(),
    weather: '晴',
    weatherImg: 'http://api.map.baidu.com/images/weather/day/qing.png'
  };

  async componentDidMount(nextProps, nextContext) {
    this.cleartime = setInterval(() => {
      this.setState({
        realTime: Date.now()
      })
    }, 1000);
    const {promise,cancel} = getWeather();
    this.cancel = cancel;
    const result = await promise;
    if (result){
      this.setState(result);
    }
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    clearInterval(this.cleartime);
    this.cancel();
  }
  componentWillMount() {
    this.username = getItem().username;
    this.title = this.getTitle(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.title = this.getTitle(nextProps);
  }

  quitLogin = () => {
    confirm({
      title: '你确定要退出吗？',
      okText: '确定',
      cancelText: '取消',
      onOk:() => {
        removeItem();
        this.props.history.replace("/login")
      }
    });
  };

  getTitle = (nextProps) => {
    const { pathname } = nextProps.location;
    for (let i = 0;i < menuList.length;i++){
      const menu = menuList[i];
      if (menu.children){
        for (let j = 0;j < menu.children.length;j++){
          const item = menu.children[j];
          if (item.key === pathname){
            return item.title
          }
        }
      }else {
        if (menu.key === pathname){
          return menu.title
        }
      }
    }
  };
  render() {
    const {weatherImg,weather,realTime} = this.state;
    return <div>
      <div className="headTop">
        <span>欢迎，{this.username}</span>
        <Quitbtn onClick = {this.quitLogin}>退出</Quitbtn>
      </div>
      <div className="header-main-bottom">
        <span className="header-main-left">{this.title}</span>
        <div className="header-main-right">
          <span>{dayjs(realTime).format('YYYY-MM-DD HH:mm:ss')}</span>
          <img src={weatherImg} alt="logo"/>
          <span>{weather}</span>
        </div>
      </div>
    </div>
  }
}
export default withRouter(HeadNav);