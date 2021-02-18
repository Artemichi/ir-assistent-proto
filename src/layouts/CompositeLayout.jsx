import React from "react";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Divider from "antd/lib/divider";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Button from "antd/lib/button";
import Table from "antd/lib/table/Table";
import Tree from "antd/lib/tree";
import FilterOutlined from "@ant-design/icons/FilterOutlined";

const columns = [
  {
    dataIndex: "check",
  },
  {
    dataIndex: "name",
  },
  {
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
  const [collapsed, setCollapsed] = React.useState(false);
  const { Sider, Content } = Layout;
  const toggle = () => {
    setCollapsed(prev => !prev);
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sider collapsible defaultCollapsed theme="light" width="300" collapsedWidth="0">
        <FilterOutlined />

        <Divider orientation="left" style={{ margin: "10px 0px" }}>
          Композит
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
      </Sider>
      <Content>Сетевой график</Content>
    </Layout>
  );
};

export default Composite;
