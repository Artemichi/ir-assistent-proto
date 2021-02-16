import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ProjectOutlined, BarChartOutlined, ReadOutlined, TableOutlined } from "@ant-design/icons";
import logo_s from "../assets/logo_s.svg";
import logo_f from "../assets/logo_f.svg";

const SliderMenu = ({ collapsed }) => {
  return (
    <>
      <div style={{ width: "auto", textAlign: "center", padding: "10px 10px" }}>
        <img src={collapsed ? logo_s : logo_f} alt="rigintel_logo" />
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
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
