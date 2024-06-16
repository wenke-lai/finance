import { Loading } from "src/components/Loading";

const Home = {
  Layout: Loading(() => import("./home-layout")),
  Overview: Loading(() => import("./home-overview")),
};

export default Home;
