import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
import About from './sections/About.jsx';
import Process from './sections/Process.jsx';
import FAQ from './sections/FAQ.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
