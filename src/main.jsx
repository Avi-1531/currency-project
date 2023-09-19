import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<Layout />}>
      <Route exact path="" element={<Home />} />
      <Route exact path="about" element={<About />} />
      <Route exact path="contact" element={<Contact />} />
      <Route exact path="user/:userid" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
