import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import FortuneSection from './components/FortuneSection';
import InformationSection from './components/InformationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import background from '@/assets/background.png';
import framel from '@/assets/framel.png';
import framer from '@/assets/framer.png';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat md:bg-fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      {/* 左下・右下の固定装飾 */}
      <img
        src={framel}
        alt=""
        aria-hidden="true"
        className="fixed bottom-4 left-4 z-40 h-20 md:h-32 lg:h-40 w-auto opacity-50 object-contain pointer-events-none select-none 2xl:hidden"
      />
      <img
        src={framer}
        alt=""
        aria-hidden="true"
        className="fixed bottom-4 right-4 z-40 h-20 md:h-32 lg:h-40 w-auto opacity-50 object-contain pointer-events-none select-none 2xl:hidden"
      />
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