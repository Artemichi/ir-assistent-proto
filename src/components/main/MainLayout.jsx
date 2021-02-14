import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Title from "antd/lib/typography/Title";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import logo from "../../assets/logo.svg";
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { Header, Sider, Content } = Layout;

  const toggle = () => {
    setCollapsed(prev => !prev);
  };

  const triggerStyles = {
    padding: "0 24px",
    fontSize: "18px",
    lineHeight: "64px",
    cursor: "pointer",
    transition: "color 0.3s",
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <img src={logo} alt="rigintel_logo" /> */}
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Главная
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Композит
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Лучшие практики
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, background: "#fff" }}>
          {collapsed ? (
            <MenuUnfoldOutlined onClick={toggle} style={{ ...triggerStyles }} />
          ) : (
            <MenuFoldOutlined onClick={toggle} style={{ ...triggerStyles }} />
          )}
          Единая цифровая платформа
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          Главный экран, dashboard, карточки и тд
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
