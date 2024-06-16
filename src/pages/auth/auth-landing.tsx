import { Navigate } from "react-router-dom";

const isLoggedIn = () => true;

const AuthLanding = () => {
  const next = isLoggedIn() ? "/" : "/auth/login";

  return <Navigate to={next} replace />;
};

export default AuthLanding;
