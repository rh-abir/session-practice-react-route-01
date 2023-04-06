import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Bookes from "./components/Bookes/Bookes";
import BooksDetails from "./components/BooksDetails/BooksDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "bookes",
        element: <Bookes></Bookes>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:id",
        element: <BooksDetails></BooksDetails>,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
