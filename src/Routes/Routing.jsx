import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Layout from "../components/Layout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Signup/SignUp";
import Aboutus from "../Pages/AboutUs/Aboutus";
import Contact from "../Pages/Contact/Contact";
import Price from "../Pages/Price/Price";
import Projects from "../Pages/Projects/Projects";
import Services from "../Pages/Services/Services";
import SingleCompleteProject from "../Pages/Home/Completed-Projects/SingleComple-project/SingleCompleteProject";
import SingleCurrentProject from "../Pages/Home/Current-Projects/SingleCurrentProjects/SingleCurrentProject";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

const Routing = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <Aboutus />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "price",
        element: <Price />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "/project/complete/:id",
        element: <SingleCompleteProject />,
      },
      {
        path: "/project/current/:id",
        element: <SingleCurrentProject />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default Routing;
