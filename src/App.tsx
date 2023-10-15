import "./app.css";
import Contact from "./components/contact/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Hero from "./components/hero/Hero.tsx"

function App(): JSX.Element {
  return (
    <>
        <Navbar />
        <Hero />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
