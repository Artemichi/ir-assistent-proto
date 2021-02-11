import React from "react";
// ant
import Row from "antd/lib/row";
import Col from "antd/lib/col";
// components
import LoginForm from "./LoginForm";
// img
import bg from "../../assets/bg.svg";
import logo from "../../assets/logo.svg";

const LoginLayout = () => {
  const mixin = {
    h_screen: {
      height: "100vh",
    },
    form_gap: {
      span: 0,
      md: 4,
    },
    bg: {
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "100% 100%",
    },
    logo: {
      marginLeft: "4em",
      marginTop: "2em",
    },
  };

  return (
    <Row style={{ ...mixin.h_screen, ...mixin.bg }}>
      <Col span={0} lg={12} style={{}}>
        <img src={logo} style={{ ...mixin.logo }} alt="rigintel_logo" />
      </Col>
      <Col span={24} lg={12} style={{}}>
        <Row align="middle" justify="center" style={{ ...mixin.h_screen }}>
          <Col {...mixin.form_gap} />
          <Col span={24} md={16}>
            <LoginForm />
          </Col>
          <Col {...mixin.form_gap} />
        </Row>
      </Col>
    </Row>
  );
};

export default LoginLayout;
