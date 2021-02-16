import React, { useState } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import oilpumps_icon from "../assets/oil-pumps.svg";
import bush_icon from "../assets/bush.svg";
import Select from "antd/lib/select";
import Divider from "antd/lib/divider";
import List from "antd/lib/list";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { FilterOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Composite = () => {
  const [oilfield, setOilfield] = useState(undefined);
  const [bush, setBush] = useState(undefined);

  const { Option } = Select;
  const { Item } = List;

  return (
    <Row style={{ height: "100%" }}>
      <Col span={5}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={oilpumps_icon} alt="oilfield icon" />
            <Select
              placeholder="Месторождение"
              bordered={false}
              size="large"
              allowClear
              onChange={value => setOilfield(value)}
            >
              <Option value="Суторминское">Суторминское</Option>
              <Option value="Приобское">Приобское</Option>
            </Select>
          </div>

          <FilterOutlined />
        </div>

        <Divider style={{ margin: "5px 0px" }} />

        <img src={bush_icon} alt="bush icon" />
        <Select
          placeholder="Куст"
          bordered={false}
          size="large"
          allowClear
          onChange={value => setBush(value)}
        >
          <Option value="1">4000</Option>
          <Option value="2">4001</Option>
          <Option value="3">4002</Option>
          <Option value="4">4003</Option>
        </Select>
        <Divider style={{ margin: "5px 0px" }}>Конструкция КНБК</Divider>
        <List size="large">
          <Item>
            <Checkbox /> Направление <Divider type="vertical" /> 324 мм
          </Item>
          <Item>
            <Checkbox /> Кондуктор <Divider type="vertical" /> 245 мм
          </Item>
          <Item>
            <Checkbox /> Экс. колонна <Divider type="vertical" /> 178 мм
          </Item>
          <Item>
            <Checkbox /> Хвостовик <Divider type="vertical" /> 127 мм
          </Item>
          <Item>
            <Checkbox /> Хвостовик <Divider type="vertical" /> 114 мм
          </Item>
        </List>
        <Button type="primary" size="large" block>
          Построить
        </Button>
        <Button type="primary" size="large" block>
          График
        </Button>
      </Col>
      <Col span={19}></Col>
    </Row>
  );
};

export default Composite;
