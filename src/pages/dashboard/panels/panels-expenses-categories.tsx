import EChart, { type EChartProps } from "src/components/chart/echart";

const option: EChartProps["option"] = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};

const PanelExpensesCategories = () => {
  return (
    <div>
      <hgroup>
        <h3>Expenses Categories</h3>
      </hgroup>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <EChart option={option} className="min-h-72" />
        <div className="grid gap-4 place-content-center">
          <div className="gap-2 row middle">
            <h6>Search Engine</h6>
            <p>1,048</p>
          </div>
          <div className="gap-2 row middle">
            <h6>Direct</h6>
            <p>735</p>
          </div>
          <div className="gap-2 row middle">
            <h6>Email</h6>
            <p>580</p>
          </div>
          <div className="gap-2 row middle">
            <h6>Union Ads</h6>
            <p>484</p>
          </div>
          <div className="gap-2 row middle">
            <h6>Video Ads</h6>
            <p>300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelExpensesCategories;
