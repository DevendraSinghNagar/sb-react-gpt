import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Loader from "./components/Loader";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Children, Component } from "react";
import Layout from "./components/Layout";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout, // Layout component will be rendered for the root path
    children: [
      {
        index: true, // This makes Login the default child route for the parent's path
        Component: Login,
        loader: Loader,
      },
      {
        path: "/browser",
        Component: Dashboard,
        loader: Loader,
      },
    ],
  },
  {
    path: "/error",
    Component: Error,
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
