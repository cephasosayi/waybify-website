import OurApp from "./components/App";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Solution from "./components/Solution";
import Blog from "./components/Blog";

function App() {
  return (
    <div className={``}>
      <Header />
      <Hero/>
      <Solution/>
      <Partner />
      <Blog/>
      <OurApp/>
      <Contact />
      <Footer/>
      </div>
  );
}

export default App;
