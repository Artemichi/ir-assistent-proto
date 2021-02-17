import React, { useState } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import oilpumps_icon from "../assets/oil-pumps.svg";
import bush_icon from "../assets/bush.svg";
import Select from "antd/lib/select";
import Divider from "antd/lib/divider";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { FilterOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Table from "antd/lib/table/Table";
import Tree from "antd/lib/tree";

const columns = [
  {
    title: "",
    dataIndex: "check",
  },
  {
    title: "",
    dataIndex: "name",
  },
  {
    title: "",
    dataIndex: "size",
  },
];
const data = [
  {
    key: "1",
    name: "Направление",
    size: "324 мм",
    check: (() => <Checkbox defaultChecked />)(),
  },

  {
    key: "2",
    name: "Кондуктор",
    size: "245 мм",
    check: (() => <Checkbox defaultChecked />)(),
  },
  {
    key: "3",
    name: "Экс. колонна",
    size: "178 мм",
    check: (() => <Checkbox defaultChecked />)(),
  },
  {
    key: "4",
    name: "Хвостовик",
    size: "127 мм",
    check: (() => <Checkbox defaultChecked />)(),
  },
  {
    key: "5",
    name: "Хвостовик",
    size: "114 мм",
    check: (() => <Checkbox defaultChecked />)(),
  },
];

const treeData = [
  {
    title: "Приобское",
    key: "0-0",
    children: [
      {
        title: "192",
        key: "0-0-0",
        children: [
          {
            title: "8801",
            key: "0-0-0-0",
            children: [{ title: "1", key: "0-0-0-0-0" }],
          },
          {
            title: "8802",
            key: "0-0-0-1",
            children: [{ title: "1", key: "0-0-0-1-0" }],
          },
          {
            title: "8803",
            key: "0-0-0-2",
            children: [{ title: "1", key: "0-0-0-2-0" }],
          },
          {
            title: "8804",
            key: "0-0-0-3",
            children: [{ title: "1", key: "0-0-0-3-0" }],
          },
        ],
      },
      {
        title: "193",
        key: "0-0-1",
      },
      {
        title: "194",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "Суторминское",
    key: "0-1",
  },
  {
    title: "Самотлорское",
    key: "0-2",
  },
];

const Composite = () => {
  const [oilfield, setOilfield] = useState(undefined);
  const [bush, setBush] = useState(undefined);

  const { Option } = Select;

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
              defaultValue="Приобское"
            >
              <Option value="Суторминское">Суторминское</Option>
              <Option value="Приобское">Приобское</Option>
              <Option value="Самотлорское">Самотлорское</Option>
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
          defaultValue="1"
        >
          <Option value="1">192</Option>
          <Option value="2">193</Option>
          <Option value="3">194</Option>
        </Select>
        <Divider orientation="left" style={{ margin: "10px 0px" }}>
          Скважины
        </Divider>

        <Tree
          checkable
          defaultExpandedKeys={["0-0-0"]}
          defaultSelectedKeys={[]}
          defaultCheckedKeys={["0-0-0"]}
          treeData={treeData}
          height={400}
        />

        <Divider orientation="left" style={{ margin: "10px 0px" }}>
          Конструкция КНБК
        </Divider>
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          showHeader={false}
          pagination={false}
        />
        <Button type="primary" size="large" block>
          Построить скважину
        </Button>
        <Divider style={{ margin: "5px 0px" }} />
        <Button type="primary" size="large" block>
          Посмотреть график
        </Button>
      </Col>
      <Col span={19}></Col>
    </Row>
  );
};

export default Composite;
