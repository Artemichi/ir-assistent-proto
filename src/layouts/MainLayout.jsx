import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Start, Dashboard, Analysis, Composite } from "../routes";
import Layout from "antd/lib/layout";
import Button from "antd/lib/button";
import SliderMenu from "../components/SliderMenu";
import MenuOutlined from "@ant-design/icons/MenuOutlined";

const MainLayout = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const { Header, Sider, Content } = Layout;

  const toggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Router>
        <Sider theme="light" trigger={null} collapsible collapsedWidth="0" collapsed={collapsed}>
          <SliderMenu handleMenuClick={toggle} />
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
            <Button type="default" icon={<MenuOutlined />} onClick={toggle} />
          </Header>
          <Content
            className="site-layout-background"
            style={{
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
