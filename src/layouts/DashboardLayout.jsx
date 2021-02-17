import React from "react";
import Card from "antd/lib/card";
import Statistic from "antd/lib/statistic/Statistic";
import Title from "antd/lib/typography/Title";
import { List } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { dashboardData } from "../components/testdata/dashboard_data";

const Dashboard = () => {
  return (
    <Card title={<Title level={3}>Месторождения</Title>} bordered={false}>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={dashboardData}
        renderItem={item => (
          <List.Item>
            <Card bordered={false} title={item.name} hoverable>
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
                valueStyle={{ color: "#00A31A" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Dashboard;
