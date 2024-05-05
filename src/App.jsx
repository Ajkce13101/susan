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
import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
