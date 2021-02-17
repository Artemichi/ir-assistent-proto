import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ProjectOutlined, BarChartOutlined, ReadOutlined, TableOutlined } from "@ant-design/icons";
import logo_s from "../assets/logo_s.svg";
import Text from "antd/lib/typography/Text";

const SliderMenu = () => {
  return (
    <>
      <div
        style={{
          width: "auto",
          display: "flex",
          padding: "10px 10px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <img src={logo_s} alt="rigintel_logo" />
        <Text strong style={{ color: "#3F3D56", fontSize: 18 }}>
          РИГИНТЕЛ
        </Text>
      </div>
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<ReadOutlined />}>
          <Link to="/">Главная</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ProjectOutlined />}>
          <Link to="/dashboard">Сводка</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<TableOutlined />}>
          <Link to="/composite">Композит</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          <Link to="/analysis">Лучшие практики</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default SliderMenu;
