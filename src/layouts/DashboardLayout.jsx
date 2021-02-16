import React from "react";
import Card from "antd/lib/card";
import Statistic from "antd/lib/statistic/Statistic";
import Title from "antd/lib/typography/Title";
import { List, Divider } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { dashboardData } from "../components/testdata/dashboard_data";

const Dashboard = () => {
  return (
    <Card
      title={
        // <Divider orientation="left">
        <Title level={3}>Месторождения</Title>
        // </Divider>
      }
      bordered={false}
    >
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
            <Card bordered={false} hoverable>
              <Divider orientation="left">{item.name}</Divider>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
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
              </div>
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Dashboard;
