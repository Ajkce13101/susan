import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import Education from "./components/Education";
import "./app.scss";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <BrowserRouter>
      {loading ? (
        <div className="bg-primary z-0 h-[100vh] w-[100vw] flex items-center justify-center">
          <Loading></Loading>
        </div>
      ) : (
        <div className="bg-primary z-0 ">
          <Navbar />
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Hero />
          </div>
          <About />
          <Education></Education>
          <Experience />
          <Tech />

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer></Footer>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
