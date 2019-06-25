import React from "react";
import { Card , Button ,Table ,Icon, Modal, Select, Form,Input } from "antd";
import Quitbtn from "../../component/quitbtn";
import "./index.less";
import {gainUserList} from "../../api/axios/index";
const Item = Form.Item;
const { Option } = Select;
export default class Category extends React.Component {
  state = {
    gainList:[],
    showAddSort:false
  };
  async componentDidMount() {
    const result = await gainUserList('0');
    if (result) {
      this.setState({gainList:result})
    }
  }
  addCategory = () => {
    this.setState({
      showAddSort:true
    })
  };
  hideSort = () => {
    this.setState({
      showAddSort:false
    })
  };
  render() {
    const {showAddSort,gainList} = this.state;
    const columns = [
      {
        title: '品类名称',
        dataIndex: 'name',
      },
      {
        title: '操作',
        className: 'operation',
        dataIndex: 'operation',
        render: text => {
          return <div>
            <Quitbtn>修改名称</Quitbtn>
            <Quitbtn>查看子品类</Quitbtn>
          </div>
        }
      },
    ];
    return <Card title="一级分类" extra={<Button type='primary' onClick={this.addCategory}><Icon type="plus" />添加品类</Button>}>
        <Table
          columns={columns}
          dataSource={gainList}
          bordered
          pagination={{
            showSizeChanger:true,
            pageSizeOptions:['5','10','15','20'],
            showQuickJumper:true,
            defaultPageSize:5
          }}
        />,
      <Modal
        title="添加分类"
        visible={showAddSort}
        onOk={this}
        onCancel={this.hideSort}
        okText="确认"
        cancelText="取消"
      >
        <Form>
          <Item label = "所属分类">
            <Select defaultValue="lucy" style={{ width: '100% '}} onChange={this.handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Item>
          <Item label='分类名称'>
            <Input placeholder='请输入分类名称'/>
          </Item>
        </Form>
      </Modal>
    </Card>
  }
}