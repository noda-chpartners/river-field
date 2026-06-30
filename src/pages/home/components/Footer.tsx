import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <footer className="relative pt-20 md:pt-28 pb-10 px-6 md:px-10 bg-background-100">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>

      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div
            className={`md:col-span-5 transition-all duration-[1s] ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                <i className="ri-sparkling-line text-primary-400 text-xl"></i>
              </div>
              <span className="font-heading text-2xl text-foreground-950 tracking-wider whitespace-nowrap">
                River Field
              </span>
            </div>
            <p className="text-foreground-500 text-sm leading-relaxed max-w-xs">
              豊田の静かな空間で、運命と向き合う占いカフェ。
              あなたの人生に、新たな光を。
            </p>
          </div>

          {/* Quick links */}
          <div
            className={`md:col-span-3 transition-all duration-[1s] ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h4 className="font-heading text-foreground-900 tracking-wider mb-4 whitespace-nowrap">
              ご案内
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-foreground-500 hover:text-primary-400 text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer">店舗紹介</a>
              <a href="#menu" className="text-foreground-500 hover:text-primary-400 text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer">鑑定メニュー</a>
              <a href="#fortune" className="text-foreground-500 hover:text-primary-400 text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer">占術</a>
              <a href="#information" className="text-foreground-500 hover:text-primary-400 text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer">ご利用案内</a>
              <a href="#access" className="text-foreground-500 hover:text-primary-400 text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer">アクセス</a>
              <a href="#contact" className="text-foreground-500 hover:text-primary-400 text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer">お問い合わせ</a>
            </div>
          </div>

        
          <div
            className={`md:col-span-4 transition-all duration-[1s] ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h4 className="font-heading text-foreground-900 tracking-wider mb-4 whitespace-nowrap">
              ご予約はお電話で
            </h4>
            <p className="text-foreground-500 text-sm leading-relaxed mb-5">
              完全予約制です。まずはお気軽にお電話ください。
            </p>
            <a
              href="tel:090-4867-3803"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-background-50 px-6 py-3 rounded-full text-sm font-medium tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line"></i>
              お電話でご予約
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`border-t border-background-300/20 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-[1s] ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-foreground-400 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} River Field. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}