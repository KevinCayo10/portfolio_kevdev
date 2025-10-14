import "./App.css";
import Main from "./components/Main";
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Main />
      <Experience />
      <About />
      <Project />
      <Contact />
    </Layout>
  );
}

export default App;
