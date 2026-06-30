import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import about from '@/assets/about.png';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 bg-background-100">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/15 to-transparent"></div>

      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-[1s] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent-400 tracking-[0.25em] text-xs md:text-sm mb-4 font-label">
            ABOUT
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground-950 leading-snug tracking-wider mb-4">
         マスター紹介
          </h2>
          <p className="text-foreground-950 text-sm md:text-base max-w-xl leading-relaxed">
          観音霊代退魔師佐藤正婁
          </p>
          <p className="text-foreground-800 text-sm md:text-base max-w-xl leading-relaxed">
          リバーフィールドのマスター佐藤は、在家住職の資格を有し、サラリーマン時代にも退魔師を務めております。今の店を開店した当初はShot＆CocktailのBarとして酒類を扱いバーテンとして、カクテルや自作料理を提供しておりましたが、現在はBarの名残を残した状態で、占いカフェとして３０年程前から占いや人生相談。霊視や憑き物のお祓い等を行っております。
          </p>
        </div>
<img src={about} alt="About" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}