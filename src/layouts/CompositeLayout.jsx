import React from "react";
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
import CompositeChart from "../components/CompositeChart";
import { treeData } from "../components/testdata/analysis_data";

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

const Composite = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [click, setClick] = React.useState(false);
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
        <Divider orientation="center" style={{ margin: "10px 0px" }}>
          Месторождения
        </Divider>

        <Tree checkable treeData={treeData} height={400} />

        <Divider orientation="center" style={{ margin: "10px 0px" }}>
          Конструкция КНБК
        </Divider>
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          showHeader={false}
          pagination={false}
        />
        <Space direction="vertical" size="middle" style={{ width: "100%", marginTop: 20 }}>
          <Button type="default" size="large" block onClick={() => setClick(true)}>
            Построить скважину
          </Button>
        </Space>
      </Sider>
      <Content style={{ display: "flex", overflow: "hidden" }}>
        {click && (
          <>
            <div style={{ flex: 1 }}>
              <CompositeTable />
            </div>
            <div style={{ flex: 1 }}>
              <CompositeChart />
            </div>
          </>
        )}
      </Content>
    </Layout>
  );
};

export default Composite;
