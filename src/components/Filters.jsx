import React from "react";
import TreeSelect from "antd/lib/tree-select";
import FilterOutlined from "@ant-design/icons/FilterOutlined";

const treeData = [
  {
    title: "Тип буровой установки",
    key: "Типбуровойустановки",
    children: [
      {
        title: "Агрегаты",
        key: "Агрегаты",
        children: [
          {
            title: "Оборудование",
            key: "Оборудование",
            children: [
              { title: "Насос 1", key: "Насос1" },
              { title: "Насос 2", key: "Насос2" },
              { title: "Насос 3", key: "Насос3" },
            ],
          },
        ],
      },
    ],
  },
];

const Filters = () => {
  const [value, setValue] = React.useState(undefined);

  const onChange = value => {
    setValue(value);
  };

  return (
    <div>
      <TreeSelect
        showSearch
        style={{ width: "100%" }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        placeholder={
          <span>
            <FilterOutlined /> Фильтры
          </span>
        }
        allowClear
        onChange={onChange}
        treeData={treeData}
      ></TreeSelect>
    </div>
  );
};

export default Filters;
