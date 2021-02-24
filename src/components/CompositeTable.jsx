import React from "react";
import Table from "antd/lib/table/Table";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import { table_data } from "./testdata/composite_data";

const CompositeTable = () => {
  return (
    <Table dataSource={table_data} pagination={false} size="small" scroll={{ y: 800 }}>
      <Column title="№" dataIndex="key" width={50} />
      <Column title="Операция" dataIndex="operation" width={400} />
      <ColumnGroup title="План">
        <Column
          title="Забой, м"
          dataIndex="p_depth"
          className="col-plan"
          align="center"
          width={100}
        />
        <Column
          title="Время на операцию, ч"
          dataIndex="p_time"
          className="col-plan"
          align="center"
          width={100}
        />
      </ColumnGroup>
      <ColumnGroup title="Факт">
        <Column
          title="Забой, м"
          dataIndex="f_depth"
          className="col-fact"
          align="center"
          width={100}
        />
        <Column
          title="Время на операцию, ч"
          dataIndex="f_time"
          className="col-fact"
          align="center"
          width={100}
        />
      </ColumnGroup>
      <Column
        title="НПВ/ПВ по операции, ч"
        dataIndex="ratio"
        align="center"
        render={v => <span className={+v < 0 ? "ratio-red" : "ratio-green"}>{v}</span>}
        width={100}
      />
    </Table>
  );
};
export default CompositeTable;
