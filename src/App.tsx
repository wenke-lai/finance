import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Logo from "./components/Logo";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <div className="max-w-16">
          <Logo />
        </div>
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
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
