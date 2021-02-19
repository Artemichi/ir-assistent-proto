import React from "react";
import QueueAnim from "rc-queue-anim";
import Layout from "antd/lib/layout";
import Divider from "antd/lib/divider";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Button from "antd/lib/button";
import Table from "antd/lib/table/Table";
import Tree from "antd/lib/tree";
import Space from "antd/lib/space";
import PlusSquareOutlined from "@ant-design/icons/PlusSquareOutlined";
import MinusSquareOutlined from "@ant-design/icons/MinusSquareOutlined";
import CompositeTable from "../components/CompositeTable";

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
  {
    title: "Ромашкинское",
    key: "0-3",
  },
  {
    title: "Повховское",
    key: "0-4",
  },
];

const Composite = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const { Sider, Content } = Layout;

  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        trigger={collapsed ? <PlusSquareOutlined /> : <MinusSquareOutlined />}
        collapsible
        collapsedWidth="0"
        onCollapse={() => {
          setCollapsed(prev => !prev);
        }}
        theme="light"
        width="300"
        zeroWidthTriggerStyle={{ top: 0 }}
        style={{ padding: "0px 10px" }}
      >
        <QueueAnim delay={400} animConfig={[{ opacity: [1, 0] }]}>
          <Divider orientation="center" style={{ margin: "10px 0px" }} key="a">
            Композит
          </Divider>

          <Tree checkable treeData={treeData} height={400} key="b" />

          <Divider orientation="center" style={{ margin: "10px 0px" }} key="c">
            Конструкция КНБК
          </Divider>
          <Table
            key="d"
            columns={columns}
            dataSource={data}
            size="small"
            showHeader={false}
            pagination={false}
          />
          <Space
            direction="vertical"
            size="middle"
            style={{ width: "100%", marginTop: 20 }}
            key="e"
          >
            <Button type="default" size="large" block>
              Построить скважину
            </Button>
            <Button type="default" size="large" block>
              Посмотреть график
            </Button>
          </Space>
        </QueueAnim>
      </Sider>
      <Content style={{ width: "100vh", display: "flex" }}>
        <div style={{ flex: 1 }}></div>
        <CompositeTable />
      </Content>
    </Layout>
  );
};

export default Composite;
