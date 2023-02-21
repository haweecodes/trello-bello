import React from "react";
import { Row, Col, Layout, Menu, Typography, Drawer, Tooltip, Image } from 'antd';
import styles from '../../styles/Layout.module.css'
import Link from "next/link";

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
        <Link href="/workspace-1">Workspace 1</Link>
      </Menu>

    </Sider>
    {/* <Layout> */}
      <Row gutter={5}>
        <Col span={6} className={styles.taskColumn}>
          <Content className={styles.contentContainer}>{children}</Content>
        </Col>
        <Col span={6} className={styles.taskColumn}>
          <Content className={styles.contentContainer}>{children}</Content>
        </Col>
        <Col span={6} className={styles.taskColumn}>
          <Content className={styles.contentContainer}>{children}</Content>
        </Col>
        <Col span={6} className={styles.taskColumn}>
          <Content className={styles.contentContainer}>{children}</Content>
        </Col>
      </Row>
    {/* </Layout> */}
  </Layout>
  ;

export default WorkSpaceLayout;