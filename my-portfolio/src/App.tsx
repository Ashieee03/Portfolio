import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTop from './components/ScrollToTop';
import DevTools from './components/DevTools';

function App() {
  // Animation Observer for scroll animations
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Uncomment to make animations replay when scrolling up
          // entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.15 });
    
    scrollAnimElements.forEach((el) => observer.observe(el));
    
    return () => {
      scrollAnimElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="max-w-[1440px] mx-auto relative overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main>
        <HeroSection />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <DevTools />
      </div>
    </div>
  );
}

export default App;
