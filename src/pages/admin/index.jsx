import React from "react";
import { Layout} from 'antd';
import LeftNav from "../../component/left-nav";
import HeadNav from "../../component/header-nav";
import {getItem} from "../../utils/islogin";
import {reqUser} from "../../api/axios";
import { Route,Switch,Redirect} from "react-router-dom";
import Category from "../category";
import  Product from "../product";
import User from "../user";
import Role from "../role";
import Home from "../home";
import Bar from "../charts/bar";
import Line from "../charts/line";
import Pie from "../charts/pie";
const { Header, Content, Footer, Sider } = Layout;
export default class Admin extends React.Component{
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  async componentWillMount() {
    const user = getItem();
    if (user && user._id) {
      const result = await reqUser(user._id);
      if (result) {
        return
      }
    }else {
      this.props.history.replace('/login');
    }
  }

  render() {
    const {collapsed} = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <LeftNav collapsed = {collapsed}/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
            <HeadNav/>
          </Header>
          <Content style={{ margin: '55px 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 600 ,textAlign:'center',
              lineHeight:'600px',fontSize:'25px',fontWeight:'bold'}}>
              <Switch>
                <Route path="/category" component={Category}/>
                <Redirect to="/home"/>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
        </Layout>
      </Layout>
    );
  }
}