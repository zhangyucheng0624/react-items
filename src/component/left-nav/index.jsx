import React from "react";
import { Menu, Icon } from 'antd';
import {Link,withRouter} from "react-router-dom";
import Logo from "../../assets/imags/logo.png";
import "./index.less";
import PropTypes from "prop-types";
import menuList from "../../config/menuConfig"
const { SubMenu } = Menu;
const Item = Menu.Item;
class LeftNav extends React.Component{
  static propType = {
    collapsed:PropTypes.bool.isRequired
  };
  createMenu = (menu) => {
    return <Item key={menu.key}>
        <Link to={menu.key}>
          <Icon type={menu.icon} />
          <span>{menu.title}</span>
        </Link>
    </Item>
  };
  componentWillMount() {
    const {pathname} = this.props.location;
    this.menuAll = menuList.map((menu)=> {
      if (menu.children) {
        return <SubMenu
          key={menu.key}
          title={
            <span>
      <Icon type={menu.icon} />
      <span>{menu.title}</span>
      </span>
          }
        >
          {
            menu.children.map((item) => {
              if (item.key === pathname) {
                this.isopen = menu.key;
              }
              return this.createMenu(item)
            })
          }
        </SubMenu>
      }else {
        return this.createMenu(menu);
      }
    })
  }

  render() {
    const {collapsed} = this.props;
    return  <div>
      <Link className="nav-logo" to="/home">
        <img src={Logo} alt="Logo"/>
        <h2 style={{display:collapsed?"none":"block"}}>硅谷后台</h2>
      </Link>
      <Menu theme="dark" defaultSelectedKeys={[this.props.location.pathname]} defaultOpenKeys={[this.isopen]} mode="inline">
        {this.menuAll}
      </Menu>
    </div>
  }
}
export default withRouter(LeftNav);