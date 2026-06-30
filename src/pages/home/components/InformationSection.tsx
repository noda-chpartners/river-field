import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const infoItems = [
  { label: '営業時間', value: '10:00 ～ 20:00', note: '最終来店時刻 18:00' },
  { label: '定休日', value: '日曜日', note: '' },
  { label: '席数', value: '5席', note: '完全予約制' },
  { label: '鑑定相談時間', value: '一組2時間', note: '' },
  { label: '電話番号', value: '090-4867-3803', note: '', href: 'tel:090-4867-3803' },
];

export default function InformationSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="information" className="relative py-24 md:py-32 px-6 md:px-10 bg-background-100">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/15 to-transparent"></div>

      <div ref={ref} className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-[1s] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-secondary-400 tracking-[0.25em] text-xs md:text-sm mb-4 font-label">
            INFORMATION
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground-950 tracking-wider">
            ご利用案内
          </h2>
        </div>

        <div
          className={`bg-background-50/60 border border-background-300/30 rounded-2xl overflow-hidden transition-all duration-[1s] ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {infoItems.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col sm:flex-row items-start sm:items-center px-6 md:px-8 py-5 md:py-6 gap-2 sm:gap-6 ${
                index !== infoItems.length - 1
                  ? 'border-b border-background-300/20'
                  : ''
              }`}
            >
              <span className="text-foreground-900 text-xs tracking-wider w-32 flex-shrink-0 font-label whitespace-nowrap">
                {item.label}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-primary-400 hover:text-primary-300 text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-foreground-950 text-sm">{item.value}</span>
                )}
                {item.note && (
                  <span className="text-foreground-700 text-xs">
                    （{item.note}）
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div
          className={`mt-6 bg-accent-500/20 border border-accent-500/60 rounded-xl px-5 py-4 flex items-start gap-3 transition-all duration-[1s] ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <i className="ri-information-line text-accent-400 mt-0.5 flex-shrink-0"></i>
          <p className="text-foreground-800 text-xs leading-relaxed">
            臨時休業している場合がございますので、ご来店前に必ずお電話にてご確認をお願いいたします。
          </p>
        </div>
      </div>
    </section>
  );
}