import OurApp from "./components/App";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Solution from "./components/Solution";
import Blog from "./components/Blog";
import { Faq } from "./components/FAQ/Faq";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div >
      <Header />
      <Hero/>
      <Solution id='about'/>
      <Partner id='hiws'/>
      <Testimonial id='testimonial'/>
      <Blog id='blog'/>
      <OurApp/>
      <Faq id='faq'/>
      <Contact />
      <Footer/>
      </div>
  );
}

export default App;
