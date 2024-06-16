import { cn } from "src/utils/style";

type LayoutContentProps = {
  className?: string;
  children: React.ReactNode;
};

const LayoutContent: React.FC<LayoutContentProps> = ({
  className,
  children,
}) => {
  return <main className={cn("w-full min-h-full", className)}>{children}</main>;
};

export default LayoutContent;
