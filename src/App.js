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

import { Routes, Route } from "react-router-dom";

function App() {
  return (
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

        {/* OTHER PAGES */}
        <Route path="/feature" element={<Feature />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>

    </div>
  );
}

export default App;