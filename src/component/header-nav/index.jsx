import React from "react";
import "./index.less";
import QuitBtn from "../quitbtn/index";
import Logo from "../../assets/imags/logo.png"
export default class HeadNav extends React.Component{
  render() {
    return <div>
      <div className="headTop">
        <span>欢迎，admin</span>
        <QuitBtn>退出</QuitBtn>
      </div>
      <div className="header-main-bottom">
        <span className="header-main-left">用户管理</span>
        <div className="header-main-right">
          <span>{Date.now()}</span>
          <img src={Logo} alt="logo"/>
          <span>晴</span>
        </div>
      </div>
    </div>
  }
}