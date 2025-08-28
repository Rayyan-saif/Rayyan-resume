import { BrowserRouter, Routes, Route } from "react-router-dom";

import Aboute from './components/Aboute'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import ThankYou from './components/Thanku'
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";
import DarkModeToggle from "./components/DarkModeToggle";
import AllProjects from "./components/AllProjects";

function App() {

  return (
    <>
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Hero" element={<Hero />} />
      <Route path="/Aboute" element={<Aboute />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/AllProjects" element={<AllProjects/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/HireMe" element={<HireMe/>} />
      
      </Routes>
      <Footer/>
    </BrowserRouter>
     {/* <Services/> */}
    </div>
    </>
  )
}

export default App
