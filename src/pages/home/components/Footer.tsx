import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import logo from '@/assets/logo.png';

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <footer className="relative pt-14 md:pt-16 pb-10 px-6 md:px-10 bg-background-100">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent"></div>

      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          
          {/* Brand / ロゴ部分 */}
          <div
            className={`col-span-1 md:col-span-12 flex justify-center items-center w-full transition-all duration-[1s] ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* 修正点: 余分な px-6 md:px-10 を削除し、純粋な中央揃えに */}
            <div className="py-4 flex items-center justify-center w-full">
              <img
                src={logo}
                alt="River Field"
                className="h-8 md:h-9 w-auto object-contain"
              />
            </div>
          </div>

          {/* Quick links / ナビゲーション部分 */}
          <div
            className={`col-span-1 md:col-span-12 flex flex-col items-center justify-center w-full text-center transition-all duration-[1s] ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* 修正点: w-full と items-center, justify-center を追加して確実な中央揃えに。gapもスマホ向けに少し広め(gap-4)に調整 */}
            <div className="flex flex-col items-center justify-center w-full gap-4 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              <a href="#about" className="text-foreground-700 hover:text-accent-400 text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer">店舗紹介</a>
              <a href="#menu" className="text-foreground-700 hover:text-accent-400 text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer">鑑定メニュー</a>
              <a href="#fortune" className="text-foreground-700 hover:text-accent-400 text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer">占術</a>
              <a href="#information" className="text-foreground-700 hover:text-accent-400 text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer">ご利用案内</a>
              <a href="#contact" className="text-foreground-700 hover:text-accent-400 text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer">お問い合わせ</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`border-t border-foreground-500 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-[1s] ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-foreground-600 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} River Field. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}