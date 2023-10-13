import "./app.css";
import Contact from "./components/contact/Contact.tsx";
import Navbar from "./components/navbar/Navbar.tsx";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <h1>App</h1>
      <Contact />
    </>
  );
}

export default App;
