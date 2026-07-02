import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import menu from '@/assets/menu.png';
import menuback from '@/assets/menuback.png';

const menus = [
  {
    name: '占い鑑定料',
    sub: '（ワンドリンク付き）',
    price: '¥5,000 ～ ¥10,000',
    description: '陰陽密教宿星占星術を中心に、お客様の運勢を総合的に鑑定いたします。お好きなドリンクをお選びいただけます。',
    featured: true,
  },
  {
    name: 'お祓い（除霊）',
    sub: '',
    price: '¥30,000 ～',
    description: '古神道の作法に則り、憑依霊や邪気を祓い清めます。心身の浄化と運気回復をサポートいたします。',
    featured: false,
  },
  {
    name: '厄払い',
    sub: '',
    price: '¥20,000',
    description: 'その年の厄を払い、災いから身を守る祈祷を行います。年齢や方位に応じた最適な厄除けを施します。',
    featured: false,
  },
  {
    name: '出張お祓い',
    sub: '',
    price: '¥100,000 ～',
    description: 'ご自宅や事業所など、お客様のご指定の場所へお伺いし、空間全体のお祓いを執り行います。',
    featured: false,
  },
  {
    name: '写真除霊',
    sub: '',
    price: '¥50,000 ～',
    description: 'お写真を通じて、対象の方に取り憑いた霊を遠隔で除霊いたします。遠方の方にも対応可能です。',
    featured: false,
  },
  {
    name: '祈願呪術',
    sub: '',
    price: '¥50,000 ～',
    description: '特定の願望に対し、強力な呪術祈願を施します。恋愛成就・商売繁盛・合格祈願など幅広く対応。',
    featured: false,
  },
  {
    name: '除念',
    sub: '',
    price: '¥50,000 ～',
    description: '過去のトラウマや執着など、心に溜まった悪しき念を浄化し、新しい人生の一歩を後押しします。',
    featured: false,
  },
  {
    name: '護符',
    sub: '（お礼・Tシャツ）',
    price: '¥2,000',
    description: 'お守りとしてお持ちいただける護符です。感謝の気持ちを込めてお渡ししております。',
    featured: false,
  },
  {
    name: '生定数表',
    sub: '',
    price: '¥3,000',
    description: 'あなたの生年月日から算出した、運命の数値をまとめた一生ものの鑑定書をお作りします。',
    featured: false,
  },
];

export default function MenuSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [isDrinkMenuOpen, setIsDrinkMenuOpen] = useState(false);

  return (
    <>
      <section id="menu" ref={ref} className="py-24 md:py-32">
        {/* 背景画像から外したヘッダー部分 */}
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div
            className={`text-center mb-16 transition-all duration-[1s] ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-accent-400 tracking-[0.25em] text-xs md:text-sm mb-4 font-label">
              MENU &amp; PRICE
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground-950 tracking-wider mb-3">
              鑑定メニュー
            </h2>
            <p className="text-foreground-700 text-sm">
              ※ 鑑定相談時間 一組2時間
            </p>
          </div>
        </div>

        {/* メニューカードエリア（ここに背景画像を適用） */}
        <div 
          className="relative py-16 px-6 md:px-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${menuback})` }}
        >
          {/* 背景画像の上にうっすら半透明のレイヤーを入れる場合は残し、不要であれば削除してください */}
          <div className="absolute inset-0 bg-background-50/20"></div>
          
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent z-10"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {menus.map((menuItem, index) => (
                <div
                  key={menuItem.name}
                  className={`relative rounded-2xl border p-6 md:p-7 flex flex-col justify-between transition-all duration-500 ${
                    index === 0 ? 'sm:col-span-2' : '' 
                  } ${
                    menuItem.featured
                      ? 'border-accent-500/40 bg-accent-500/5'
                      : 'border-background-300/30 bg-background-50/60 hover:border-accent-500/20'
                  } ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${0.1 + index * 0.07}s` }}
                >
                  {menuItem.featured && (
                    <span className="absolute -top-2.5 right-4 bg-accent-500 text-background-50 text-xs px-3 py-1 rounded-full tracking-wider whitespace-nowrap">
                      おすすめ
                    </span>
                  )}

                  <div>
                    <h3 className="font-heading text-base text-foreground-950 tracking-wider mb-1 whitespace-nowrap">
                      {menuItem.name}
                      {menuItem.sub && (
                        <span className="text-foreground-800 text-xs ml-1">{menuItem.sub}</span>
                      )}
                    </h3>
                    <p className="text-foreground-900 text-sm leading-relaxed">
                      {menuItem.description}
                    </p>
                  </div>

                  <div className="flex items-end justify-between mt-4">
                    {index === 0 ? (
                      <button
                        onClick={() => setIsDrinkMenuOpen(true)}
                        className="text-xs border border-accent-500 text-accent-500 px-4 py-1.5 rounded-full hover:bg-accent-500 hover:text-background-50 transition-colors"
                      >
                        ドリンクメニューを見る
                      </button>
                    ) : (
                      <div></div>
                    )}
                    <span className="font-heading text-accent-400 text-base md:text-lg whitespace-nowrap ml-2">
                      {menuItem.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ドリンクメニューのポップアップ（モーダル） */}
      {isDrinkMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground-950/60 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setIsDrinkMenuOpen(false)}
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh] bg-background-50 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              onClick={() => setIsDrinkMenuOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-foreground-950/50 text-background-50 hover:bg-foreground-950/80 transition-colors"
              aria-label="閉じる"
            >
              ✕
            </button>
            <div className="p-2 w-full h-full flex items-center justify-center">
              <img 
                src={menu}
                alt="ドリンクメニュー"
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-xl" 
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}