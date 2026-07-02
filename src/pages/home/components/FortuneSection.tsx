import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const fortuneMethods = [
  {
    name: '陰陽密教宿星占星術',
    description: '陰陽五行と宿星の運行から、あなたの本質と運命の流れを読み解く、当店の中核をなす占術です。',
  },
  {
    name: '姓名生命術',
    description: 'お名前の画数・音・意味から、生まれ持った資質や人生の転機を詳細に鑑定いたします。',
  },
  {
    name: '古神道',
    description: '古来より伝わる神道の叡智により、目に見えない世界との調和を取り戻し、開運へ導きます。',
  },
  {
    name: '玄秘修法',
    description: '密教由来の修法による深遠な祈念で、強力なご加護と運気の上昇をあなたにもたらします。',
  },
  {
    name: '御祈念',
    description: '真心を込めた祈りによって、願望成就・心願達成を祈念し、良き方向へとお導きします。',
  },
];

export default function FortuneSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="fortune" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent"></div>

      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-[1s] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent-400 tracking-[0.25em] text-xs md:text-sm mb-4 font-label">
            METHODS
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground-950 tracking-wider">
            占術のご案内
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {fortuneMethods.map((method, index) => (
            <div
              key={method.name}
              className={`group  border border-background-300/30 rounded-2xl p-8 hover:border-accent-500/30 transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.15 + index * 0.1}s` }}
            >
              <h3 className="font-heading text-lg text-accent-400 font-bold text-center tracking-wider mb-3 whitespace-nowrap">
                {method.name}
              </h3>
              <p className="text-foreground-900 text-sm leading-relaxed text-center">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}