import { TbBell, TbSettings, TbUser } from "react-icons/tb";
import { Outlet } from "react-router-dom";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutSidebar,
} from "src/components/layouts";
import { type LayoutHeaderController } from "src/components/layouts/layout-header";
import { type LayoutSidebarMenuItem } from "src/components/layouts/layout-sidebar";

const sidebarMenuItems: LayoutSidebarMenuItem[] = [
  { to: "/", label: "Overview" },
  { to: "/expense", label: "Expense" },
];

const headerControllers: LayoutHeaderController[] = [
  { key: "settings", onClick: () => {}, icon: <TbSettings /> },
  { key: "notification", onClick: () => {}, icon: <TbBell /> },
  { key: "user", onClick: () => {}, icon: <TbUser /> },
];

const PageLayout = () => {
  return (
    <Layout className="grid grid-cols-1 md:grid-cols-[auto,1fr]">
      <LayoutSidebar
        menuItems={sidebarMenuItems}
        className="hidden pt-24 border-r min-w-[160px] md:block"
      />

      <div className="grid h-dvh grid-rows-[auto,1fr]">
        <LayoutHeader
          className="h-16 border-b"
          controllers={headerControllers}
          sidebarToggle={() => {}}
        />
        <LayoutContent className="p-4 overflow-y-auto md:p-8">
          <Outlet />
        </LayoutContent>
      </div>
    </Layout>
  );
};

export default PageLayout;
