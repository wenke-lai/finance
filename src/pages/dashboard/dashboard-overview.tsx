import Panel from "src/components/ui/Panel";
import PanelExpensesCategories from "./panels/panels-expenses-categories";
import PanelsExpensesHistory from "./panels/panels-expenses-history";
import PanelTotalExpenses from "./panels/panels-total-expenses";

const HomeOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
      <Panel className="col-span-1 md:col-span-8">
        <PanelTotalExpenses />
      </Panel>
      <Panel className="col-span-1 md:col-span-4">skip</Panel>
      <Panel className="col-span-1 md:col-span-8">
        <PanelsExpensesHistory />
      </Panel>
      <Panel className="col-span-1 md:col-span-8">
        <PanelExpensesCategories />
      </Panel>
    </div>
  );
};

export default HomeOverview;
