import React from "react";
import { Row, Col, Layout, Menu, Typography, Drawer, Tooltip, Image } from 'antd';
import styles from '../../styles/Layout.module.css'
import Link from "next/link";

const { Header, Footer, Sider, Content } = Layout;

type LayoutType = {
  children: JSX.Element,
};

const TaskContainer = ({ children }: LayoutType) =>
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
  </Row>;

export default TaskContainer;