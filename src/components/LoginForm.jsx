import React, { useState, useContext } from "react";
import Cookies from "js-cookie";
import { UserContext } from "../context";
import { useHistory } from "react-router-dom";
import Card from "antd/lib/card";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import Input from "antd/lib/input/Input";
import InputPassword from "antd/lib/input/Password";
import Button from "antd/lib/button/button";
import UserOutlined from "@ant-design/icons/UserOutlined";
import LockOutlined from "@ant-design/icons/LockOutlined";
import Title from "antd/lib/typography/Title";
import logo from "../assets/logo_s.svg";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const usercontext = useContext(UserContext);
  const history = useHistory();

  const onFinish = ({ username, password }) => {
    const token =
      "12dhsdg1huf241h2gg3vbh21vbdh819759jhchn91-08c-789-nm199819823709j1f3j1g3bv12hbdh12vfhjdsb12hjbgehbdh1jb2dh1";
    setLoading(true);
    usercontext.set({ username, password, token });
    Cookies.set("token", token);
    setTimeout(() => {
      history.push("/");
    }, 2000);
  };

  return (
    <Card
      title={
        <>
          <img src={logo} alt="rigintel_logo" />
          <br />
          <Title level={4}>Единая цифровая платформа</Title>
        </>
      }
      bordered={false}
      headStyle={{ textAlign: "center" }}
      hoverable
    >
      <Form
        name="normal_login"
        className="login-form"
        size="large"
        wrapperCol={{
          span: 24,
          offset: 0,
          lg: { span: 20, offset: 2 },
        }}
        onFinish={onFinish}
      >
        <FormItem
          name="username"
          rules={[{ required: true, message: "Пожалуйста введите имя пользователя" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Имя пользователя"
          />
        </FormItem>
        <FormItem
          name="password"
          rules={[{ required: true, message: "Пожалуйста введите пароль" }]}
        >
          <InputPassword
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
          />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
            block
          >
            Войти
          </Button>
        </FormItem>
      </Form>
    </Card>
  );
};

export default LoginForm;
