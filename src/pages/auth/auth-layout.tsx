import { Outlet } from "react-router-dom";
import { Layout } from "src/components/layouts";

const AuthLayout = () => {
  return (
    <Layout className="">
      <main className="grid place-content-center">
        <Outlet />
      </main>
    </Layout>
  );
};

export default AuthLayout;
