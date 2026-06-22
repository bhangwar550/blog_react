import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Feature from "./Feature";
import About from "./About";
import Help from "./Help";
import Blog from "./Blog";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Publisher from "./Publisher";
import Management from "./Management";
import Platform from "./Platform";
import Feadback from "./Feadback";
import Expert from "./Expert";
import Trusted from "./Trusted";
import Popular from "./Popular";
import Footer from "./Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";






function App() {
  return (
    <BrowserRouter>
      <div className="header">

        {/* Navbar always visible */}
        <Navbar />

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Publisher />
                <Management />
                <Platform />
                <Feadback />
                <Expert />
                <Trusted />
                <Popular />
                <Footer />
              </>
            }
          />

          {/* FEATURE PAGE */}
         
        <Route path="/feature" element={<Feature />} />
        
     <Route path="/about" element={<About />} />
     <Route path="/Help" element={<Help/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Login" element={<Login/>} />
     <Route path="/signup" element={<Signup />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;