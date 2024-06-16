import EChart, { type EChartProps } from "src/components/chart/echart";

const option: EChartProps["option"] = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Forest", "Steppe", "Desert", "Wetland"],
  },
  toolbox: {
    show: true,
    orient: "vertical",
    left: "right",
    top: "center",
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar", "stack"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  xAxis: [
    {
      type: "category",
      axisTick: { show: false },
      data: ["2012", "2013", "2014", "2015", "2016"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Forest",
      type: "bar",
      barGap: 0,
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390],
    },
    {
      name: "Steppe",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290],
    },
    {
      name: "Desert",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190],
    },
    {
      name: "Wetland",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [98, 77, 101, 99, 40],
    },
  ],
};

const PanelsExpensesHistory = () => {
  return (
    <div>
      <hgroup>
        <h3>Expenses History</h3>
      </hgroup>
      <div className="h-64">
        <EChart option={option} />
      </div>
    </div>
  );
};

export default PanelsExpensesHistory;
