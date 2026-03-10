import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';   // <-- import
import Initiatives from './components/Initiatives'; // <-- import Initiatives


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-gray-200 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          {/* Initiatives section added directly after Hero */}
          <Initiatives />
          <Team />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />   {/* <-- add here */}
      </div>
    </ThemeProvider>
  );
}

export default App;