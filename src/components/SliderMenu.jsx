import React from "react";
import { Link } from "react-router-dom";
import Menu from "antd/lib/menu";
import MenuItem from "antd/lib/menu/MenuItem";
import Text from "antd/lib/typography/Text";
import ProjectOutlined from "@ant-design/icons/ProjectOutlined";
import BarChartOutlined from "@ant-design/icons/BarChartOutlined";
import ReadOutlined from "@ant-design/icons/ReadOutlined";
import TableOutlined from "@ant-design/icons/TableOutlined";
import logo_s from "../assets/logo_s.svg";

const SliderMenu = ({ handleMenuClick }) => {
  return (
    <>
      <div
        style={{
          width: "auto",
          display: "flex",
          padding: "6px 18px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <img src={logo_s} alt="rigintel_logo" />
        <Text strong style={{ color: "#3F3D56", fontSize: 18 }}>
          РИГИНТЕЛ
        </Text>
      </div>
      <Menu mode="inline" defaultSelectedKeys={["1"]} onClick={handleMenuClick}>
        <MenuItem key="1" icon={<ReadOutlined />}>
          <Link to="/">Главная</Link>
        </MenuItem>
        <MenuItem key="2" icon={<ProjectOutlined />}>
          <Link to="/dashboard">Сводка</Link>
        </MenuItem>
        <MenuItem key="3" icon={<TableOutlined />}>
          <Link to="/composite">Композит</Link>
        </MenuItem>
        <MenuItem key="4" icon={<BarChartOutlined />}>
          <Link to="/analysis">Лучшие практики</Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default SliderMenu;
