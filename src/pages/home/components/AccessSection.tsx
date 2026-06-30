import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AccessSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="access" className="relative py-24 md:py-32 px-6 md:px-10 bg-background-50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/15 to-transparent"></div>

      <div ref={ref} className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-[1s] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent-400 tracking-[0.25em] text-xs md:text-sm mb-4 font-label">
            ACCESS
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground-950 tracking-wider">
            アクセス
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Address info */}
          <div
            className={`lg:col-span-3 transition-all duration-[1s] ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-background-100/60 border border-background-300/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-accent-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-foreground-700 text-xs tracking-wider mb-1 font-label">住所</p>
                  <p className="text-foreground-800 text-sm leading-relaxed">
                    〒473-0902
                    <br />
                    愛知県豊田市大林町10丁目2番地4
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                  <i className="ri-train-line text-accent-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-foreground-700 text-xs tracking-wider mb-1 font-label">最寄駅</p>
                  <p className="text-foreground-800 text-sm">
                    末野原駅より徒歩15分
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className={`lg:col-span-2 transition-all duration-[1s] ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="rounded-2xl overflow-hidden border border-background-300/30 h-full min-h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.509494342346!2d137.140003!3d35.043999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a1de67ac05fb%3A0x8041255f22fc4433!2z44Oq44OQ44O844OV44Kj44O844Or44OJ!5e0!3m2!1sja!2sjp!4v1782796906313!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="River Field アクセスマップ"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}