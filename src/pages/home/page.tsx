import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import FortuneSection from './components/FortuneSection';
import InformationSection from './components/InformationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import background from '@/assets/background.png';

export default function Home() {
  return (
    <div
  className="min-h-screen bg-cover bg-center bg-no-repeat md:bg-fixed"
  style={{ backgroundImage: `url(${background})` }}
>
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <FortuneSection />
        <AboutSection />
        <InformationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}