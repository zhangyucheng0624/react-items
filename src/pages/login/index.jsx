import React from "react";
import "./index.css";
import {Form, Icon, Input, Button} from "antd";
import logo from "./logo.png"
const Item = Form.Item;
class Login extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {username,password} = values;
        console.log(username,password);
      }else {
        console.log("校验失败",err);
      }
    });
  };
  render () {
    const { getFieldDecorator } = this.props.form;
    return <div className="layer">
        <header className="loginHead">
          <img src={logo} alt="logo"/>
          <h1>React项目:后台管理系统</h1>
        </header>
          <section className="login-content">
            <h2>用户登录</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Item>
                  {
                    getFieldDecorator(
                      'username',
                      {
                        rules: [
                          {required: true, message: '请输入用户名！'},
                          {min: 4, message: '用户名必须大于4位'},
                          {max: 15, message: '用户名必须小于15位'},
                          {pattern: /^[a-zA-Z_0-9]+$/, message: '用户名只能包含英文字母、数字和下划线'},
                          {
                            validator: this.validator
                          }
                        ]
                      }
                    )(
                      <Input className="login-input" prefix={<Icon type="user" />} placeholder="用户名"/>
                    )
                  }
                </Item>
              <Item>
                {
                  getFieldDecorator(
                    'password',
                    {
                      rules: [
                        {required: true, message: '请输入密码！'},
                        {min: 4, message: '密码必须大于4位'},
                        {max: 15, message: '密码必须小于15位'},
                        {pattern: /^[a-zA-Z_0-9]+$/, message: '密码只能包含英文字母、数字和下划线'},
                        {
                          validator: this.validator
                        }
                      ]
                    }
                  )(
                    <Input className="login-input" prefix={<Icon type="lock" />} placeholder="密码"/>
                  )
                }
              </Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form>
          </section>
      </div>

  }
}
export default Form.create()(Login);