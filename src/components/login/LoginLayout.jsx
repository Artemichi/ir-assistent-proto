import React, { useContext } from "react";
import { User } from "../context";
import { Redirect } from "react-router-dom";
// ant
import Row from "antd/lib/row";
import Col from "antd/lib/col";
// components
import LoginForm from "./LoginForm";
// img
import bg from "../../assets/bg.svg";
import logo from "../../assets/logo.svg";

const LoginLayout = () => {
  const user = useContext(User);
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

  return user.get === null ? (
    <Row style={{ ...mixin.h_screen, ...mixin.bg }}>
      <Col span={0} lg={12}>
        <img src={logo} style={{ ...mixin.logo }} alt="rigintel_logo" />
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
  ) : (
    <Redirect to={"/"} />
  );
};

export default LoginLayout;
