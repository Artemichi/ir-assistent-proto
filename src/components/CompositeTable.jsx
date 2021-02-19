import React from "react";
import Table from "antd/lib/table/Table";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import { data } from "./testdata/compositeTable_data";

const CompositeTable = () => {
  return (
    <div style={{ width: "100vh", overflowY: "scroll" }}>
      <Table dataSource={data} pagination={false}>
        <Column title="№" dataIndex="key" width={50} />
        <Column title="Операция" dataIndex="operation" width={400} />
        <ColumnGroup title="План">
          <Column
            title="Забой, м"
            dataIndex="p_depth"
            className="col-plan"
            align="center"
            width={150}
          />
          <Column
            title="Время на операцию, ч"
            dataIndex="p_time"
            className="col-plan"
            align="center"
            width={150}
          />
        </ColumnGroup>
        <ColumnGroup title="Факт">
          <Column
            title="Забой, м"
            dataIndex="f_depth"
            className="col-fact"
            align="center"
            width={150}
          />
          <Column
            title="Время на операцию, ч"
            dataIndex="f_time"
            className="col-fact"
            align="center"
            width={150}
          />
        </ColumnGroup>
        <Column
          title="НПВ/ПВ по операции, ч"
          dataIndex="ratio"
          align="center"
          width={150}
          render={v => <span className={+v > 0 ? "ratio-green" : "ratio-red"}>{v}</span>}
        />
      </Table>
    </div>
  );
};
export default CompositeTable;
