import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Loader from "./components/Loader";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
    loader: Loader,
  },
  {
    path: "/browser",
    Component: Body,
    loader: Loader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
