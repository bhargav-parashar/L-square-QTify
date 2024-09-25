import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/Hero";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Section title={"Top Albums"}/>
    </div>
  );
}

export default App;
