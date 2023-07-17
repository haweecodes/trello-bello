import React from "react";
import { Row, Col, Layout, Menu, Typography, Drawer, Tooltip, Image } from 'antd';
import styles from '../../styles/Layout.module.css'
import Link from "next/link";
import TaskContainer from "../task-container";

const { Header, Footer, Sider, Content } = Layout;

type LayoutType = {
  children: JSX.Element,
};

const WorkSpaceLayout = ({ children }: LayoutType) =>
  <Layout className={styles.layoutContainer}>
    <Sider theme="light"
      className={styles.mainSidebar}
      breakpoint="sm"
      collapsedWidth={0}
      trigger={null}>
      <Menu
        key="/workspace-1"
        className={styles.sidebarMenuItem}
      >
        <Menu.Item key="/workspace-1"><Link href="/workspace-1">Workspace 1</Link></Menu.Item>
      </Menu>

    </Sider>
   
    {children}
  </Layout>
  ;

export default WorkSpaceLayout;