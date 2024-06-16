import { TbMenu2 } from "react-icons/tb";
import { cn } from "src/utils/style";

export type LayoutHeaderController = {
  key: string;
  icon: React.ReactNode;
  onClick: () => void;
};

type LayoutHeaderProps = {
  className?: string;
  controllers: LayoutHeaderController[];
  sidebarToggle?: () => void;
};

const LayoutHeader: React.FC<LayoutHeaderProps> = ({
  className,
  controllers,
  sidebarToggle,
}) => {
  return (
    <header className={cn("w-full, min-h-16", className)}>
      <div className="h-full gap-2 row end middle ">
        <button className="block border-none md:hidden" onClick={sidebarToggle}>
          <TbMenu2 />
        </button>
        <div className="flex-grow"></div>

        {controllers.map((item) => (
          <button key={item.key} onClick={item.onClick} className="border-none">
            {item.icon}
          </button>
        ))}
      </div>
    </header>
  );
};

export default LayoutHeader;
