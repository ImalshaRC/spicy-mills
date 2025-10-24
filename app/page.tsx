import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import About from './components/About';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      {/* <Team /> */}
      <Contact />
    </div>
  );
}
