import React from "react";
import {
  Row,
  Col,
  Layout,
  Menu,
  Typography,
  Drawer,
  Tooltip,
  Image,
} from "antd";
import styles from "../../styles/Layout.module.css";
import type { MenuProps } from "antd";
import TaskContainer from "../task-container";

const { Header, Footer, Sider, Content } = Layout;

type LayoutType = {
  children: JSX.Element;
};

const WorkSpaceLayout = ({ children }: LayoutType) => {
  const items: MenuProps["items"] = [
    {
      label: "Workspace 1",
      key: "/workspace-1",
    },
    {
      label: "Workspace 2",
      key: "/workspace-2",
    },
  ];
  return (
    <Layout className={styles.layoutContainer}>
      <Sider
        theme="light"
        className={styles.mainSidebar}
        breakpoint="sm"
        collapsedWidth={0}
        trigger={null}
      >
        <Menu
          key="/workspace-1"
          className={styles.sidebarMenuItem}
          items={items}
        ></Menu>
      </Sider>

      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
export default WorkSpaceLayout;
