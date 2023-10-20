import "./app.css";
import Contact from "./components/contact/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Comments from "./components/comments/Comments.tsx";
import Hero from "./components/hero/Hero.tsx";
import Products from "./components/products/Products.tsx";
import About from "./components/about/About.tsx";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
        <About/>
      <Comments />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
