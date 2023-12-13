import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./AboutUs";
import GetInTouch from "./GetInTouch";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {" "}
        <App />{" "}
      </div>
    ),
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "getintouch",
    element: <GetInTouch />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
