import "./app.css";
import Contact from "./components/contact/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Comments from "./components/comments/Comments.tsx";
import Hero from "./components/hero/Hero.tsx";
import Products from "./components/products/Products.tsx";

function App(): JSX.Element {
  return (
    <>
        <header>
            <Navbar />
            <Hero />
        </header>
        <main>
            <Products />
            <Comments />
            <Contact />
        </main>
        <footer>
            <Footer />
        </footer>

    </>
  );
}

export default App;
