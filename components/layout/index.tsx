import React, { useEffect, useState } from "react";
import { Button, Layout, Menu } from "antd";
import styles from "../../styles/Layout.module.css";
import type { MenuProps } from "antd";
import TaskContainer from "../task-container";
import Link from "next/link";

const { Sider, Content } = Layout;

type LayoutType = {
  children: JSX.Element;
};

const WorkSpaceLayout = ({ children }: LayoutType) => {
  const [items, setItems] = useState<Record<string, string>[]>([
    {
      label: "Workspace - 1",
      key: "/workspace/1",
    },
    {
      label: "Workspace - 2",
      key: "/workspace/2",
    },
  ]);
  const handleWorksapceAddition = () => {
    const updatedItems = [...items];
    updatedItems.push({
      label: `Workspace - ${items.length + 1}`,
      key: `/workspace/${items.length + 1}`,
    });
    setItems([...updatedItems]);
  };

  return (
    <Layout className={styles.layoutContainer}>
      <Sider
        theme="light"
        className={styles.mainSidebar}
        breakpoint="sm"
        collapsedWidth={0}
        trigger={null}
      >
        <Menu className={styles.sidebarMenuItem}>
          {items.map((item: Record<string, string>) => {
            return (
              <Menu.Item key={item.key}>
                <Link href={item.key}>{item.label}</Link>
              </Menu.Item>
            );
          })}
          <Menu.Item key="add-workspace">
            <Button onClick={handleWorksapceAddition}>Add Workspace</Button>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
export default WorkSpaceLayout;
