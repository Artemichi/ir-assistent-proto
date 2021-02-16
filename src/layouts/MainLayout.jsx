import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import SliderMenu from "../components/SliderMenu";
import { Start, Dashboard, Analysis, Composite } from "../routes";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [deg, setDeg] = useState(0);
  const { Header, Sider, Content } = Layout;

  const toggle = () => {
    setCollapsed(prev => !prev);
    setDeg(prev => (prev === 0 ? 180 : 0));
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Router>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            overflow: "hidden",
            background: "#f0f2f5",
          }}
        >
          <SliderMenu collapsed={collapsed} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: "#fff", borderTopLeftRadius: 30 }}>
            <MenuUnfoldOutlined
              rotate={deg}
              onClick={toggle}
              style={{
                fontSize: 18,
                padding: "24px 24px",
                cursor: "pointer",
              }}
            />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              background: "#fff",
            }}
          >
            <Switch>
              <Route exact path="/">
                <Start />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/composite">
                <Composite />
              </Route>
              <Route exact path="/analysis">
                <Analysis />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    </Layout>
  );
};

export default MainLayout;
