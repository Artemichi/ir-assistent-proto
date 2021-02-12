import React, { useContext } from "react";
import { User } from "../context";
// ant
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Card from "antd/lib/card";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import Input from "antd/lib/input/Input";
import InputPassword from "antd/lib/input/Password";
import Button from "antd/lib/button/button";
import UserOutlined from "@ant-design/icons/UserOutlined";
import LockOutlined from "@ant-design/icons/LockOutlined";
import Title from "antd/lib/typography/Title";
import Checkbox from "antd/lib/checkbox/Checkbox";
// img
import logo from "../../assets/logo.svg";

const LoginForm = () => {
  const [loading, setLoading] = React.useState(false);
  const breakpoint = useBreakpoint();
  const user = useContext(User);

  const onFinish = ({ username, password }) => {
    setLoading(true);
    setTimeout(() => {
      user.set({ username, password });
    }, 2000);
  };

  return (
    <Card
      title={
        <>
          {!breakpoint.lg ? (
            <>
              <img src={logo} alt="rigintel_logo" />
              <br />
            </>
          ) : null}

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
        <FormItem name="remember" valuePropName="checked">
          <Checkbox>Запомнить</Checkbox>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
            Войти
          </Button>
        </FormItem>
      </Form>
    </Card>
  );
};

export default LoginForm;
