import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import hero from '@/assets/hero.jpg';

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background-50">
      <img
        src={hero}
        alt="Mystical waterfall and monks"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-background-50/90 via-background-50/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
  className="absolute inset-0 z-[1] bg-gradient-to-r from-background-50/80 via-transparent to-background-50/80 pointer-events-none"
  aria-hidden="true"
/>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent z-10" />
      <div ref={ref}
        className={`relative z-10 text-center px-6 w-full max-w-4xl mx-auto transition-all duration-[1.2s] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
      >
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground-950 leading-tight tracking-wider mb-6
  [text-shadow:0_0_12px_rgba(255,255,255,0.9),0_0_32px_rgba(204,171,106,0.6),0_0_64px_rgba(204,171,106,0.35)]">
          運命の
          <span className="block text-accent-400
    [text-shadow:0_0_12px_rgba(255,255,255,0.8),0_0_28px_rgba(204,171,106,0.9),0_0_56px_rgba(204,171,106,0.5)]">
            扉を開く
          </span>
        </h1>
        <p className="text-foreground-950 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-10">
          陰陽密教宿星占星術が導く、あなただけの運命。
          <br/>
          豊田の静寂な空間で、心ゆくまでご相談ください。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:090-4867-3803"
            className="inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-400 text-background-50  px-8 py-3.5 rounded-full text-sm font-medium tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-line"></i>
            お電話でご予約
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-50 to-transparent pointer-events-none z-10"></div>
    </section>
  );
}