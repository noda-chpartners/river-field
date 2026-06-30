import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-10 bg-background-50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent"></div>

      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-[1s] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent-400 tracking-[0.25em] text-xs md:text-sm mb-4 font-label">
            CONTACT
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground-950 tracking-wider mb-6">
            お問い合わせ
          </h2>
          <p className="text-foreground-800 text-sm leading-relaxed max-w-lg mx-auto mb-10">
            完全予約制です。まずはお気軽にお電話ください。
          </p>
        </div>

        <div
          className={`bg-background-100/60 border border-background-300/30 rounded-2xl p-8 md:p-10 transition-all duration-[1s] ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >

          <a
            href="tel:090-4867-3803"
            className="inline-block text-accent-400 hover:text-accent-300 text-3xl md:text-4xl font-heading tracking-wider mb-3 transition-colors duration-200 cursor-pointer"
          >
            090-4867-3803
          </a>

          <p className="text-foreground-700 text-sm mb-8">
            営業時間 10:00 ～ 20:00（日曜定休）
          </p>

          <a
            href="tel:090-4867-3803"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-background-50 px-8 py-4 rounded-full text-sm font-medium tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-line"></i>
            お電話でご予約
          </a>
        </div>
      </div>
    </section>
  );
}