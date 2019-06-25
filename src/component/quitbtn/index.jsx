import React from 'react';

import './index.less';

export default function Quitbtn(props) {
  // console.log(props); // {children: "退出"}
  // 组件内包含的内容会挂载到组件的 props.children
  return <button className="quitBtn" {...props}/>;
}