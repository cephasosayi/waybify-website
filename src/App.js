import OurApp from "./components/App";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Locations from "./components/Locations";
import Partner from "./components/Partner";
import Solution from "./components/Solution";

function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <Solution/>
      <Partner />
      <OurApp/>
      <Contact />
      <Footer/>
      </div>
  );
}

export default App;
