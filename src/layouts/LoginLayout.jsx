import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import LoginForm from "../components/LoginForm";
import bg from "../assets/bg.svg";
import RIGINTEL from "../assets/title.svg";

const LoginLayout = () => {
  const mixin = {
    h_screen: {
      height: "100vh",
    },
    form_gap: {
      span: 0,
      md: 2,
      lg: 3,
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
      <Col span={0} lg={12}>
        <img src={RIGINTEL} style={{ ...mixin.logo }} alt="rigintel" />
      </Col>
      <Col span={24} lg={12}>
        <Row align="middle" justify="center" style={{ ...mixin.h_screen }}>
          <Col {...mixin.form_gap} />
          <Col span={24} md={20} lg={18}>
            <LoginForm />
          </Col>
          <Col {...mixin.form_gap} />
        </Row>
      </Col>
    </Row>
  );
};

export default LoginLayout;
