import React from "react";
// ant
import Row from "antd/lib/row";
import Col from "antd/lib/col";
// comp
import LoginForm from "./LoginForm";
import isometric from "../../assets/isometric";

const LoginLayout = () => {
  const mixin = {
    h_screen: {
      height: "100vh",
    },
    form_gap: {
      span: 0,
      md: 4,
    },
  };

  return (
    <Row style={{ ...mixin.h_screen }}>
      <Col span={0} md={12} style={{ background: url(isometric) }}></Col>
      <Col span={24} md={12} style={{ background: "green" }}>
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
