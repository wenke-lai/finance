import { Loading } from "src/components/Loading";

export const Auth = {
  Layout: Loading(() => import("./auth-layout")),
  Login: Loading(() => import("./auth-login")),
  Landing: Loading(() => import("./auth-landing")),
};
