import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
    </div>
  );
}
