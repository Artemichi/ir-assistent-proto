import React from "react";
import { treeData, treeOperations, treeSpeed } from "../components/testdata/analysis_data";
import Divider from "antd/lib/divider";
import Tree from "antd/lib/tree";
import AnalysisChart from "../components/AnalysisChart";
import Select from "antd/lib/select";
import Button from "antd/lib/button";
import Slider from "antd/lib/slider";

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

const marks = {
  400: {
    style: {
      color: "#949190",
      fontSize: 10,
    },
    label: "Направление",
  },
  800: {
    style: {
      color: "#949190",
      fontSize: 10,
    },
    label: "Кондуктор",
  },
  1200: {
    style: {
      color: "#949190",
      fontSize: 10,
    },
    label: "Экс. колонна",
  },
  1600: {
    style: {
      color: "#949190",
      fontSize: 10,
    },
    label: "Хвостовик",
  },
};

const Analysis = () => {
  const [factorsSelecrors, setFactorsSelectors] = React.useState(null);
  const [factorValues, setFactorValues] = React.useState([]);
  const [series, setSeries] = React.useState([]);
  const [chart, setChart] = React.useState(false);

  const handleChange = v => {
    setSeries([
      ...series,

      {
        type: "bar",
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ]);
    setFactorValues(prev => [...prev, factors.filter(f => f.value === v).pop().title]);
  };
  const { Option } = Select;
  const factor = (
    <Select
      defaultOpen
      style={{ width: 200, margin: "0px 5px 10px 0px" }}
      onChange={handleChange}
      placeholder="Фактор"
      key={Math.random()}
    >
      {factors.map(({ value, title }) => {
        if (factorValues.includes(title)) {
          return (
            <Option disabled value={value} key={Math.random()}>
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
            <Tree checkable treeData={treeData} height={400} />
          </div>
          <div style={{ flex: 1 }}>
            <Divider orientation="left" style={{ margin: "10px 0px" }}>
              Операции
            </Divider>
            <Tree checkable treeData={treeOperations} height={400} />
          </div>
          <div style={{ flex: 1 }}>
            <Divider orientation="left" style={{ margin: "10px 0px" }}>
              Интервал
            </Divider>
            <Slider
              vertical
              tooltipVisible
              min={0}
              max={3000}
              marks={marks}
              reverse
              tipFormatter={v => `${v} м`}
              range={{ draggableTrack: true }}
              defaultValue={[100, 700]}
              style={{ height: 400 }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <Divider orientation="left" style={{ margin: "10px 0px" }}>
              Скорости
            </Divider>
            <Tree checkable treeData={treeSpeed} height={400} />
          </div>
        </div>
        <Divider style={{ margin: "30px 0px 0px 0px" }}>Факторы влияния</Divider>
        <div style={{ padding: 10 }}>
          {factorsSelecrors && factorsSelecrors}

          <Button
            type="primary"
            onClick={() =>
              setFactorsSelectors(prev => (prev ? [...factorsSelecrors, factor] : [factor]))
            }
          >
            Добавить
          </Button>
        </div>
        <Button type="primary" onClick={() => setChart(true)} style={{ margin: 10 }}>
          Построить график
        </Button>
      </div>
      <div style={{ flex: 1 }}>
        {chart && <AnalysisChart categories={factorValues} series={series} />}
      </div>
    </div>
  );
};

export default Analysis;
