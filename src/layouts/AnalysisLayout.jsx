import React from "react";
import { treeData, treeOperations } from "../components/testdata/analysis_data";
import Divider from "antd/lib/divider";
import Tree from "antd/lib/tree";
import AnalysisChart from "../components/AnalysisChart";
import Select from "antd/lib/select";
import Button from "antd/lib/button";

const factors = [
  { value: "drt", title: "Тип БУ" },
  { value: "contractor", title: "Подрядчик" },
  { value: "equipment", title: "Оборудование" },
  { value: "ot", title: "Изношенность" },
  { value: "omge", title: "Режим работы наземного оборудования" },
  { value: "be", title: "Опыт бригады" },
  { value: "ef", title: "Влияние внешних факторов" },
  { value: "geology", title: "Геология" },
  { value: "complications", title: "Осложнения" },
  { value: "dm", title: "Буровой раствор" },
  { value: "nnb", title: "ННБ" },
  { value: "logging", title: "Каротаж" },
  { value: "apdUSE", title: "Исп. АПД" },
  { value: "dp", title: "Параметры бурения" },
  { value: "oc", title: "Контроль операций" },
];

const Analysis = () => {
  const [factorsSelecrors, setFactorsSelectors] = React.useState(null);
  const [factorValues, setFactorValues] = React.useState([]);

  const handleChange = v => {
    setFactorValues(prev => [...prev, v]);
  };
  const { Option } = Select;
  const factor = (
    <Select
      size="large"
      style={{ width: 200, margin: "0px 5px 10px 0px" }}
      onChange={handleChange}
      placeholder="Фактор"
      key={Math.random()}
    >
      {factors.map(({ value, title }) => {
        if (factorValues.includes(value)) {
          return (
            <Option disabled value={value}>
              {title}
            </Option>
          );
        }
        return <Option value={value}>{title}</Option>;
      })}
    </Select>
  );

  return (
    <div style={{ height: "100%", display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", padding: 10 }}>
          <div style={{ flex: 1 }}>
            <Divider orientation="left" style={{ margin: "10px 0px" }}>
              Участки
            </Divider>
            <Tree checkable treeData={treeData} height={500} />
          </div>
          <div style={{ flex: 1 }}>
            <Divider orientation="left" style={{ margin: "10px 0px" }}>
              Операции
            </Divider>
            <Tree checkable treeData={treeOperations} height={500} />
          </div>
        </div>
        <Divider style={{ margin: "10px 0px" }}>Факторы влияния</Divider>
        <div style={{ padding: 10 }}>{factorsSelecrors ? factorsSelecrors : "Пусто"}</div>
        <Divider style={{ margin: "20px 0px" }}></Divider>
        <Button
          type="primary"
          block
          onClick={() =>
            setFactorsSelectors(prev => (prev ? [...factorsSelecrors, factor] : [factor]))
          }
        >
          Добавить
        </Button>
      </div>
      <div style={{ flex: 2 }}>
        <AnalysisChart />
      </div>
    </div>
  );
};

export default Analysis;
