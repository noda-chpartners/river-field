import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import FortuneSection from './components/FortuneSection';
import InformationSection from './components/InformationSection';
import AccessSection from './components/AccessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <FortuneSection />
        <InformationSection />
        <AccessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}