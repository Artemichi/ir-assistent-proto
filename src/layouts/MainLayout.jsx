import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Start, Dashboard, Analysis, Composite } from "../routes";
import Layout from "antd/lib/layout";
import Button from "antd/lib/button";
import SliderMenu from "../components/SliderMenu";
import MenuFoldOutlined from "@ant-design/icons/MenuFoldOutlined";

const MainLayout = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [deg, setDeg] = React.useState(0);
  const { Header, Sider, Content } = Layout;

  const toggle = () => {
    setCollapsed(prev => !prev);
    setDeg(prev => (prev === 0 ? 180 : 0));
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Router>
        <Sider trigger={null} collapsible theme="light" collapsedWidth="0" collapsed={collapsed}>
          <SliderMenu />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: "0px 24px",
              background: "#fff",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button type="default" icon={<MenuFoldOutlined rotate={deg} />} onClick={toggle} />
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
