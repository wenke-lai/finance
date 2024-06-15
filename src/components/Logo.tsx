import LogoIcon from "src/assets/logo.svg?react";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={className}>
      <LogoIcon />
    </div>
  );
};

export default Logo;
