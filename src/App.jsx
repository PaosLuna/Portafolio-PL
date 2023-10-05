import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<AboutMe />} path="/about-me"></Route>
        <Route element={<Projects />} path="/projects"></Route>
        <Route element={<Skills />} path="/skills"></Route>
        <Route element={<Contact />} path="/contact"></Route>
      </Routes>
    </>
  );
}

export default App;
