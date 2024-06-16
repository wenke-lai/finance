import { cn } from "src/utils/style";

type LayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "w-full min-h-dvh bg-background text-foreground",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
