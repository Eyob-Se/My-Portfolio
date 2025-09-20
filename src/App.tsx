import { ThemeProvider } from "./context/ThemeContext";
import { CursorProvider } from "./context/CursorContext";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <div className="App">
          <CustomCursor />
          <div className="min-h-screen transition-colors duration-1000 ease-in-out bg-white dark:bg-primone text-gray-900 dark:text-gray-100">
            <Header />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </CursorProvider>
    </ThemeProvider>
  );
}
export default App;
