import NavbarCoding from "./components/navbar/Nav.jsx";
import Home from "../src/Pages/Home/Home.jsx";
import MainFooter from "./components/Footer/MainFooter.jsx";
import Aboutus from "../src/Pages/AboutUs/Aboutus.jsx";
import Services from "../src/Pages/Services/Services.jsx";
import Price from "../src/Pages/Price/Price.jsx";
import Contact from "../src/Pages/Contact/Contact.jsx";
import Projects from "../src/Pages/Projects/Projects.jsx";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import SingleCurrentProject from "./Pages/Home/Current-Projects/SingleCurrentProjects/SingleCurrentProject.jsx";
import SingleCompleteProject from "./Pages/Home/Completed-Projects/SingleComple-project/SingleCompleteProject.jsx";
import Routing from "./Routes/Routing.jsx";

function App() {
  return (
    <>
      <RouterProvider router={Routing} />
    {/* <BrowserRouter>
      <NavbarCoding />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/price" element={<Price />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/current/:id" element={<SingleCurrentProject/>} />
        <Route path="/project/complete/:id" element={<SingleCompleteProject/>} />
      </Routes>
      <MainFooter />
    </BrowserRouter> */}
     
    </>
  );
}

export default App;
