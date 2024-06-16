import {
  TbBrandApple,
  TbBrandGoogleFilled,
  TbBrandWindows,
} from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const providers = [
  { name: "Google", icon: <TbBrandGoogleFilled /> },
  { name: "Microsoft", icon: <TbBrandWindows /> },
  { name: "Apple", icon: <TbBrandApple /> },
];

const AuthLogin = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/");
  };

  return (
    <div className="container max-w-lg py-16">
      <h1 className="text-center">Wenke Studio</h1>

      <hgroup className="py-8">
        <h3 className="text-center">Sign up with your identity provider</h3>
      </hgroup>

      <p className="py-8">
        By clicking the buttons below, you acknowledge that you have read,
        understood, and agree to Wenke Studio <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </p>

      <div className="gap-4 col center">
        {providers.map((provider) => (
          <button className="w-full max-w-xs" onClick={login}>
            {provider.icon}
            <p>Continue with {provider.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AuthLogin;
