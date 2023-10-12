import "./app.css";
import Footer from "./components/footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <h1>App</h1>
      <Footer />
    </>
  );
}

export default App;
