import { Link, Outlet } from "react-router-dom";
import { Layout } from "src/components/layouts";

const menuItems = [
  { to: "/", label: "Overview" },
  { to: "/expense", label: "Expense" },
];

const HomeLayout = () => {
  return (
    <Layout className="grid grid-cols-[auto,1fr]">
      <aside className="p-4 border-r">
        <menu>
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </menu>
      </aside>
      <div className="relative min-h-dvh">
        <header className="absolute inset-x-0 h-16 border-b-2">
          <div className="row end middle">asdf</div>
        </header>
        <main className="p-4 mt-16">
          <Outlet />
        </main>
      </div>
    </Layout>
  );
};

export default HomeLayout;
