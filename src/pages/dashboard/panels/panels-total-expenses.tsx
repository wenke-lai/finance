import EChart, { type EChartProps } from "src/components/chart/echart";

const option: EChartProps["option"] = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};

const PanelTotalExpenses = () => {
  return (
    <div>
      <hgroup>
        <h3>Total Expenses</h3>
      </hgroup>

      <div className="p-2 bg-gray-200 rounded-md">
        <div className="p-2 bg-gray-400 rounded-md">
          <div>U</div>
          <div>VV -1.1%</div>
          <div>$1,234</div>
        </div>
      </div>

      <div className="h-64">
        <EChart option={option} />
      </div>
    </div>
  );
};

export default PanelTotalExpenses;
