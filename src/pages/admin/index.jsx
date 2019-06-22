import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import LeftNav from "../../component/left-nav";
import HeadNav from "../../component/header-nav"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class Admin extends React.Component{
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <LeftNav />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
            <HeadNav/>
          </Header>
          <Content style={{ margin: '50px 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 600 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}