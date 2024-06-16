import { Loading } from "src/components/Loading";

const Dashboard = {
  Overview: Loading(() => import("./dashboard-overview")),
};

export default Dashboard;
