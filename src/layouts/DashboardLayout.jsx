import React from "react";
import Card from "antd/lib/card";
import Statistic from "antd/lib/statistic/Statistic";
import Title from "antd/lib/typography/Title";
import List from "antd/lib/list";
import ListItem from "antd/lib/list/Item";
import ArrowUpOutlined from "@ant-design/icons/ArrowUpOutlined";
import ArrowDownOutlined from "@ant-design/icons/ArrowDownOutlined";
import { dashboardData } from "../components/testdata/dashboard_data";

const Dashboard = () => {
  return (
    <Card title={<Title level={3}>Месторождения</Title>} bordered={false}>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 4,
        }}
        dataSource={dashboardData}
        renderItem={item => (
          <ListItem>
            <Card bordered={false} title={item.name} hoverable>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Statistic title="Бригада" value={item.brigade} />
                <Statistic title="План" value={item.plan} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Statistic
                  title="ПВ"
                  value={item.pv}
                  precision={2}
                  valueStyle={{ color: "#00A31A" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
                <Statistic
                  title="НПВ"
                  value={item.npv}
                  precision={2}
                  valueStyle={{ color: "#d9363e" }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Statistic title="Скрытое НПВ" value={item.hidden_npv} />
                <Statistic title="Послед. операция" value={item.lastOperation} />
              </div>
            </Card>
          </ListItem>
        )}
      />
    </Card>
  );
};

export default Dashboard;
