import { Loading } from "src/components/Loading";

const Home = {
  Layout: Loading(() => import("./Layout")),
};

export default Home;
