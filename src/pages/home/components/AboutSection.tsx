import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import about from '@/assets/about1.png';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 bg-transparent">
     <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent"></div>
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-[1s] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="relative flex flex-col md:flex-row md:items-center">
          {/* 左：テキスト */}
          <div className="relative z-10 md:w-[60%] md:pr-8">
            <p className="text-accent-400 tracking-[0.25em] text-xs md:text-sm mb-2 font-label">
              ABOUT
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground-950 leading-snug tracking-wider mb-4">
              マスター紹介
            </h2>
            <p className="text-accent-400 font-bold text-xl md:text-2xl leading-relaxed mb-3">
              観音霊代退魔師 佐藤正婁
            </p>
            <p className="text-foreground-900 text-sm md:text-base leading-relaxed">
            リバーフィールドのマスター佐藤は、在家住職の資格を有し、サラリーマン時代にも退魔師を務めております。今の店を開店した当初はShot＆CocktailのBarとして酒類を扱いバーテンとして、カクテルや自作料理を提供しておりましたが、現在はBarの名残を残した状態で、占いカフェとして３０年程前から占いや人生相談。霊視や憑き物のお祓い等を行っております。
            </p>
          </div>

          {/* 右：画像（左へ半分かぶせる） */}
          <div className="relative z-0 mt-8 md:mt-0 md:w-[80%] md:-ml-[20%]">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={about}
                alt="マスター佐藤正婁"
                className="w-full h-auto object-cover min-h-[280px] md:min-h-[380px] object-right"
              />
              {/* 重なり部分の文字読みやすさ用（任意） */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-background-50/70 via-background-50/20 to-transparent pointer-events-none hidden md:block"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}