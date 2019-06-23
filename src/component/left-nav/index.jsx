import React from "react";
import { Menu, Icon } from 'antd';
import {Link,withRouter} from "react-router-dom";
import Logo from "../../assets/imags/logo.png";
import "./index.less";
import menuList from "../../config/menuConfig"
const { SubMenu } = Menu;
const Item = Menu.Item;
class LeftNav extends React.Component{
  createMenu = (menu) => {
    return <Item key={menu.key}>
      <Icon type={menu.Icon} />
      <span>{menu.title}</span>
    </Item>
  };
  componentWillMount() {
    this.menuALL = menuList.map((menu)=> {
      if (menu.children) {
        return <SubMenu
          key={menu.key}
          title={
            <span>
      <Icon type={menu.Icon} />
      <span>{menu.title}</span>
      </span>
          }
        >
          {
            menu.children.map((item) => this.createMenu(item))
          }
        </SubMenu>
      }else {
        return this.createMenu(menu);
      }
    })
  }

  render() {
    return  <div>
      <Link className="nav-logo" to="/home">
        <img src={Logo} alt="Logo"/>
        <span>硅谷后台</span>
      </Link>
      <Menu theme="dark" defaultSelectedKeys={[this.props.location.pathname]} mode="inline">
        {this.menuALL}
      </Menu>
    </div>
  }
}
export default withRouter(LeftNav);