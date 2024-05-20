import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Logo from "src/components/Logo";
import Home from "src/pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home.Layout />,
    children: [
      {
        index: true,
        element: (
          <div>
            <div className="max-w-16">
              <Logo />
            </div>
            <h1 className="~text-base/3xl">Hello World</h1>
            <h2>Hello World</h2>
            <h3>Hello World</h3>
            <h4>Hello World</h4>
            <h5>Hello World</h5>
            <h6>Hello World</h6>
            <p>Hello World</p>
          </div>
        ),
      },
    ],
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
