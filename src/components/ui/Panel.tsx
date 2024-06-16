import { cn } from "src/utils/style";

type PanelProps = {
  className?: string;
  children: React.ReactNode;
};

const Panel: React.FC<PanelProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        // size
        "p-4",
        // display
        "overflow-hidden",
        // border, shadow
        "rounded-md shadow-md shadow-foreground/30",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Panel;
