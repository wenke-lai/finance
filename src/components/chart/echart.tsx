import type { ECharts, EChartsOption, SetOptionOpts } from "echarts";
import { getInstanceByDom, init } from "echarts";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import { cn } from "src/utils/style";

export interface EChartProps {
  className?: string;
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme?: "light" | "dark";
}

const EChart: React.FC<EChartProps> = ({
  className,
  option,
  style,
  settings,
  loading,
  theme,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme);
    }

    const resizeChart = () => chart?.resize();
    window.addEventListener("resize", resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (chart) {
        chart.setOption(option, settings);
      }
    }
  }, [option, settings, theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (chart) {
        loading === true ? chart.showLoading() : chart.hideLoading();
      }
    }
  }, [loading, theme]);

  return (
    <div
      ref={chartRef}
      className={cn("w-full h-full", className)}
      style={{ ...style }}
    />
  );
};

export default EChart;
