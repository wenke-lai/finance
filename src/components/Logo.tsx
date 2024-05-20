// import logo.png from "./assets/logo.png" and render it with custom styles in logo component

import logo from "src/assets/logo.png";

const Logo = () => {
  return <img src={logo} alt="Logo" className="w-full h-auto rounded-full" />;
};

export default Logo;
