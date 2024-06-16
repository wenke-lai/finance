import { Link } from "react-router-dom";
import { cn } from "src/utils/style";

export type LayoutSidebarMenuItem = {
  to: string;
  label: string;
  children?: LayoutSidebarMenuItem[];
};

type LayoutSidebarProps = {
  className?: string;
  menuItems: LayoutSidebarMenuItem[];
};

const LayoutSidebar: React.FC<LayoutSidebarProps> = ({
  className,
  menuItems,
}) => {
  return (
    <aside className={cn("p-4", className)}>
      <menu>
        {menuItems.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </menu>
    </aside>
  );
};

export default LayoutSidebar;
