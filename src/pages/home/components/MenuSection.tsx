import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const menus = [
  {
    name: '占い鑑定料',
    sub: '（ワンドリンク付き）',
    price: '¥5,000 ～ ¥10,000',
    description: '陰陽密教宿星占星術を中心に、お客様の運勢を総合的に鑑定いたします。お好きなドリンクをお選びいただけます。',
    icon: 'ri-cup-line',
    featured: true,
  },
  {
    name: 'お祓い（除霊）',
    sub: '',
    price: '¥30,000 ～',
    description: '古神道の作法に則り、憑依霊や邪気を祓い清めます。心身の浄化と運気回復をサポートいたします。',
    icon: 'ri-fire-line',
    featured: false,
  },
  {
    name: '厄払い',
    sub: '',
    price: '¥20,000',
    description: 'その年の厄を払い、災いから身を守る祈祷を行います。年齢や方位に応じた最適な厄除けを施します。',
    icon: 'ri-shield-check-line',
    featured: false,
  },
  {
    name: '出張お祓い',
    sub: '',
    price: '¥100,000 ～',
    description: 'ご自宅や事業所など、お客様のご指定の場所へお伺いし、空間全体のお祓いを執り行います。',
    icon: 'ri-map-pin-line',
    featured: false,
  },
  {
    name: '写真除霊',
    sub: '',
    price: '¥50,000 ～',
    description: 'お写真を通じて、対象の方に取り憑いた霊を遠隔で除霊いたします。遠方の方にも対応可能です。',
    icon: 'ri-image-line',
    featured: false,
  },
  {
    name: '祈願呪術',
    sub: '',
    price: '¥50,000 ～',
    description: '特定の願望に対し、強力な呪術祈願を施します。恋愛成就・商売繁盛・合格祈願など幅広く対応。',
    icon: 'ri-sparkling-line',
    featured: false,
  },
  {
    name: '除念',
    sub: '',
    price: '¥50,000 ～',
    description: '過去のトラウマや執着など、心に溜まった悪しき念を浄化し、新しい人生の一歩を後押しします。',
    icon: 'ri-mental-health-line',
    featured: false,
  },
  {
    name: '護符',
    sub: '（お礼・Tシャツ）',
    price: '¥2,000',
    description: 'お守りとしてお持ちいただける護符です。感謝の気持ちを込めてお渡ししております。',
    icon: 'ri-bookmark-line',
    featured: false,
  },
  {
    name: '生定数表',
    sub: '',
    price: '¥3,000',
    description: 'あなたの生年月日から算出した、運命の数値をまとめた一生ものの鑑定書をお作りします。',
    icon: 'ri-numbers-line',
    featured: false,
  },
];

export default function MenuSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="menu" className="relative py-24 md:py-32 px-6 md:px-10 bg-background-100">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/15 to-transparent"></div>

      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`mb-6 transition-all duration-[1s] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary-400 tracking-[0.25em] text-xs md:text-sm mb-4 font-label">
            MENU &amp; PRICE
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground-950 tracking-wider mb-3">
            鑑定メニュー
          </h2>
          <p className="text-foreground-700 text-sm">
            ※ 鑑定相談時間 一組2時間
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {menus.map((menu, index) => (
            <div
              key={menu.name}
              className={`relative rounded-2xl border p-6 md:p-7 transition-all duration-500 ${
                menu.featured
                  ? 'border-primary-500/40 bg-primary-500/5'
                  : 'border-background-300/30 bg-background-50/60 hover:border-primary-500/20'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.1 + index * 0.07}s` }}
            >
              {menu.featured && (
                <span className="absolute -top-2.5 right-4 bg-primary-500 text-background-50 text-xs px-3 py-1 rounded-full tracking-wider whitespace-nowrap">
                  おすすめ
                </span>
              )}
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <i className={`${menu.icon} text-primary-400 text-lg`}></i>
                </div>
                <span className="font-heading text-primary-400 text-base md:text-lg whitespace-nowrap ml-2">
                  {menu.price}
                </span>
              </div>
              <h3 className="font-heading text-base text-foreground-950 tracking-wider mb-1 whitespace-nowrap">
                {menu.name}
                {menu.sub && (
                  <span className="text-foreground-800 text-xs ml-1">{menu.sub}</span>
                )}
              </h3>
              <p className="text-foreground-700 text-xs leading-relaxed">
                {menu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div
          className={`mt-10 bg-background-50/60 border border-background-300/30 rounded-2xl p-6 md:p-8 text-center transition-all duration-[1s] ease-out delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-foreground-800 text-sm leading-relaxed">
            その他、各種呪法についても承っております。まずはお電話にてご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
}