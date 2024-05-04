import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import Education from "./components/Education";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" z-0 bg-primary">
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
    </BrowserRouter>
  );
};

export default App;
