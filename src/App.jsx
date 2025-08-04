import NavbarCoding from "./components/navbar/Nav.jsx";
import Home from "./components/Home/Home.jsx";
import MainFooter from "./components/Footer/MainFooter.jsx";
import Aboutus from "./components/AboutUs/Aboutus.jsx";
import Services from "./components/Services/Services.jsx";
import Price from "./components/Price/Price.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Projects from "./components/Projects/Projects.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleCurrentProject from "./components/Home/Current-Projects/SingleCurrentProject.jsx";
import SingleCompleteProject from "./components/Home/Completed-Projects/SingleComple-project/SingleCompleteProject.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
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
    </BrowserRouter>
     
    </>
  );
}

export default App;
