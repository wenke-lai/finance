import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Auth } from "src/pages/auth";
import Home from "src/pages/dashboard";
import PageLayout from "./pages/page-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { index: true, element: <Home.Overview /> },
      { path: "expense", element: <div>Expense</div> },
    ],
  },
  {
    path: "/auth",
    element: <Auth.Layout />,
    children: [
      { index: true, element: <Auth.Landing /> },
      { path: "login", element: <Auth.Login /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
