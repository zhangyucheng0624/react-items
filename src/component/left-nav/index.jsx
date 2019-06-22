import React from "react";
import { Menu, Icon } from 'antd';
import Logo from "../../assets/imags/logo.png";
import "./index.less"
const { SubMenu } = Menu;
export default class LeftNav extends React.Component{
  render() {
    return  <div>
      <div className="nav-logo" >
        <img src={Logo} alt="Logo"/>
        <span>硅谷后台</span>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Icon type="home" />
          <span>首页</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
      <Icon type="appstore" />
      <span>商品</span>
      </span>
          }
        >
          <Menu.Item key="">
            <Icon type="unordered-list" />
            <span>品类管理</span>
          </Menu.Item>
          <Menu.Item key="">
            <Icon type="tool" />
            <span>商品管理</span>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="">
          <Icon type="user" />
          <span>用户管理</span>
        </Menu.Item>
        <Menu.Item key="">
          <Icon type="safety-certificate" />
          <span>权限管理</span>
        </Menu.Item>
        <SubMenu
          key="sub2"
          title={
        <span>
          <Icon type="team" />
          <span>图形图表</span>
        </span>
          }
        >
          <Menu.Item key="">
            <Icon type="bar-chart" />
            <span>柱形图</span>
          </Menu.Item>
          <Menu.Item key="">
            <Icon type="line-chart" />
            <span>折线图</span>
          </Menu.Item>
          <Menu.Item key="">
            <Icon type="pie-chart" />
            <span>饼图</span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  }
}