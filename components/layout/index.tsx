import React from "react";
import {
  Layout,
  Menu,
} from "antd";
import styles from "../../styles/Layout.module.css";
import type { MenuProps } from "antd";
import TaskContainer from "../task-container";
import Link from "next/link";

const { Header, Footer, Sider, Content } = Layout;

type LayoutType = {
  children: JSX.Element;
};

const WorkSpaceLayout = ({ children }: LayoutType) => {
  const items: MenuProps["items"] = [
    {
      label: (
        <Link href="/workspace/1">
          Workspace - 1
        </Link>
      ),
      key: "/workspace/1",
    },
    {
      label: (
        <Link href="/workspace/2">
          Workspace - 2
        </Link>
      ),
      key: "/workspace/2",
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
