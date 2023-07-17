import React from "react";
import { Row, Col, Layout, Menu, Typography, Drawer, Tooltip, Image } from 'antd';
import styles from '../../styles/Layout.module.css'
import Link from "next/link";
import TaskCardLogics from "../task-card";

const { Header, Footer, Sider, Content } = Layout;

type LayoutType = {
  children: JSX.Element,
};


// const TaskColumnGenerator = () => {
//   return (
//     <div>
//       <TaskCard></TaskCard>
//     </div>
//   )
// }

const TaskContainer = () =>
 <div>
      <TaskCardLogics></TaskCardLogics>
 </div>


export default TaskContainer;