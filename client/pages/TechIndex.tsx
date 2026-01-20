import Layout from "@/components/nucreo/Layout";
import { Footer } from "@/components/nucreo/Footer";
import { ScrollToTopButton } from "@/components/nucreo/ScrollToTopButton";
import { usePageSlider } from "@/contexts/PageSliderContext";

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="mb-10">
      {kicker && (
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
    </div>
  );
}

function TechFooter() {
  return (
    <footer id="tech-contact" className="border-t border-white/10 bg-black/60">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">WEB DEVELOPMENT STUDIO</h3>
          <div className="grid gap-8 md:grid-cols-3 w-full max-w-3xl items-center">
            <div className="order-2 md:order-1 text-sm text-white/70">
              <div className="flex items-center justify-center gap-2">
                <span className="sr-only">Email</span>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <a className="hover:underline" href="mailto:nucreoglobal@gmail.com">nucreoglobal@gmail.com</a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex items-center justify-center">
              <div className="relative inline-flex items-center justify-center rounded-lg p-2">
                <video src="/logo.mov" autoPlay loop muted playsInline className="h-29 w-29 rounded" />
              </div>
            </div>
            <div className="order-3 text-sm text-white/70">
              <div className="flex items-center justify-center gap-2">
                <span className="sr-only">Telegram</span>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M9.04 15.41l-.39 5.49c.56 0 .8-.24 1.09-.53l2.62-2.52 5.43 3.98c1 .55 1.72.26 1.99-.93l3.61-16.89h.01c.32-1.47-.53-2.05-1.5-1.69L1.5 9.6c-1.45.56-1.43 1.37-.25 1.73l5.49 1.71L18.88 6.5c.62-.41 1.18-.18.72.23"/></svg>
                <a className="hover:underline" href="https://t.me/nucreoadmin" target="_blank" rel="noreferrer">@nucreoadmin</a>
              </div>
            </div>
          </div>
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} NUCREO TECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function TechIndex() {
  const { goToMain } = usePageSlider();

  return (
    <Layout>
      {/* Hero */}
      <section id="tech-hero" className="glow-container glow-center relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/30 to-black" />
        <div className="container relative z-10 pt-24 pb-16 text-center">
          <p className="mt-10 text-white/70 text-lg">We're</p>
          <h1 className="mt-2 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95]">
            "NUCREO TECH"
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/80">Web Development Studio</p>
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <a href="#tech-offer" className="inline-flex items-center rounded-md bg-gradient-to-tr from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] px-5 py-3 font-semibold text-black shadow-lg shadow-orange-500/20">Explore services</a>
            <button
              onClick={goToMain}
              className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Nucreo
            </button>
            <a href="#tech-contact" className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10">Contact</a>
          </div>
        </div>
      </section>

      {/* Tech Expertise */}
      <section id="tech-expertise" className="glow-container glow-top-left py-20 md:py-28 scroll-mt-24">
        <div className="container relative z-10">
          <SectionTitle title="Modern web development expertise" />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl mb-4">
                <svg className="w-12 h-12 mx-auto text-[hsl(var(--brand-start))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Clean Code</h3>
              <p className="text-white/60">Maintainable, scalable, and well-documented codebase</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl mb-4">
                <svg className="w-12 h-12 mx-auto text-[hsl(var(--brand-start))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
              <p className="text-white/60">Optimized for speed and excellent Core Web Vitals</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl mb-4">
                <svg className="w-12 h-12 mx-auto text-[hsl(var(--brand-start))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
              <p className="text-white/60">Perfect on every device, from mobile to desktop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section id="tech-offer" className="glow-container glow-center py-20 md:py-28 scroll-mt-24">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <p className="text-3xl md:text-5xl text-white/90 font-light">What we</p>
            <h2 className="text-7xl md:text-9xl font-extrabold tracking-tight mt-2">BUILD</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-16">
            {[
              { id: "tech-websites", name: "WEBSITES" },
              { id: "tech-webapps", name: "WEB APPS" },
              { id: "tech-ecommerce", name: "E-COMMERCE" },
              { id: "tech-landing", name: "LANDING PAGES" },
              { id: "tech-custom", name: "CUSTOM SOLUTIONS" },
            ].map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-block px-8 py-3.5 text-base md:text-lg tracking-wide text-white rounded-full hover:bg-white/20 transition-all"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="tech-websites" className="glow-container glow-botttom-left py-16 md:py-24 scroll-mt-24">
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Service</p>
            <h3 className="text-3xl md:text-5xl font-extrabold">WEBSITES</h3>
            <ol className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
              <li>Requirements analysis and technical planning</li>
              <li>UI/UX design with modern aesthetics</li>
              <li>Responsive development with React, Vue, or vanilla JS</li>
              <li>SEO optimization and performance tuning</li>
              <li>Deployment, hosting setup, and maintenance support</li>
            </ol>
          </div>
          <div>
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-12 flex items-center justify-center">
              <svg className="w-32 h-32 text-[hsl(var(--brand-start))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="tech-webapps" className="glow-container glow-top-right py-16 md:py-24 scroll-mt-24">
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Service</p>
            <h3 className="text-3xl md:text-5xl font-extrabold">WEB APPS</h3>
            <ul className="mt-6 space-y-3 text-white/80 list-disc list-inside">
              <li>Single Page Applications (SPA) with React, Vue, or Angular</li>
              <li>State management with Redux, Zustand, or Pinia</li>
              <li>Real-time features with WebSockets</li>
              <li>Progressive Web App (PWA) capabilities</li>
              <li>API integration and backend connectivity</li>
            </ul>
          </div>
          <div>
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-12 flex items-center justify-center">
              <svg className="w-32 h-32 text-[hsl(var(--brand-start))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="tech-ecommerce" className="glow-container glow-bottom-right py-16 md:py-24 scroll-mt-24">
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Service</p>
            <h3 className="text-3xl md:text-5xl font-extrabold">E-COMMERCE</h3>
            <ol className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
              <li>Custom online store development or Shopify/WooCommerce setup</li>
              <li>Product catalog and inventory management systems</li>
              <li>Secure payment gateway integration (Stripe, PayPal)</li>
              <li>Shopping cart and checkout optimization</li>
              <li>Order management and customer dashboards</li>
            </ol>
          </div>
          <div>
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-12 flex items-center justify-center">
              <svg className="w-32 h-32 text-[hsl(var(--brand-start))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="tech-landing" className="glow-container glow-top-left py-16 md:py-24 scroll-mt-24">
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Service</p>
            <h3 className="text-3xl md:text-5xl font-extrabold">LANDING PAGES</h3>
            <ol className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
              <li>Conversion-focused design and copywriting consultation</li>
              <li>High-impact animations and visual storytelling</li>
              <li>A/B testing setup for optimization</li>
              <li>Lead capture forms and CRM integration</li>
              <li>Analytics and tracking implementation</li>
            </ol>
          </div>
          <div>
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-12 flex items-center justify-center">
              <svg className="w-32 h-32 text-[hsl(var(--brand-start))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="tech-custom" className="glow-container glow-bottom-left py-16 md:py-24 scroll-mt-24">
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Service</p>
            <h3 className="text-3xl md:text-5xl font-extrabold">CUSTOM SOLUTIONS</h3>
            <ol className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
              <li>Bespoke web applications tailored to your business needs</li>
              <li>Third-party API integrations and custom connectors</li>
              <li>Dashboard and admin panel development</li>
              <li>Legacy system modernization and migration</li>
              <li>Performance optimization and code audits</li>
            </ol>
          </div>
          <div>
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-12 flex items-center justify-center">
              <svg className="w-32 h-32 text-[hsl(var(--brand-start))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="glow-container glow-center py-20 md:py-28 scroll-mt-24">
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Built with <span className="gradient-text">Modern Tech</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">
              We use cutting-edge technologies to build fast,<br />
              scalable, and maintainable web solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["React", "Vue", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker"].map((tech) => (
                <span key={tech} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="tech-workflow" className="glow-container glow-multiple py-20 md:py-28 scroll-mt-24">
        <div className="container relative z-10">
          <SectionTitle title="Development Process" />
          <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-0">
              {/* Discovery */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-[hsl(var(--brand-start))]">1</span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">Discovery Call</h4>
                  <p className="mt-1 text-white/60">Understanding your goals, requirements,<br />and technical needs.</p>
                </div>
              </div>

              {/* Planning */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-white">2</span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">Planning & Proposal</h4>
                  <p className="mt-1 text-white/60">Technical architecture, timeline,<br />and cost estimation.</p>
                </div>
              </div>

              {/* Design */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-[hsl(var(--brand-start))]">3</span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">Design Phase</h4>
                  <p className="mt-1 text-white/60">Wireframes, UI/UX design,<br />and client approval.</p>
                </div>
              </div>

              {/* Development */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-[hsl(var(--brand-start))]">4</span>
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">Development Sprint</h4>
                  <p className="mt-1 text-white/60">Agile development with regular<br />progress updates.</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-0">
              {/* Testing */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-[hsl(var(--brand-start))]">5</span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">Testing & QA</h4>
                  <p className="mt-1 text-white/60">Cross-browser testing, performance<br />optimization, bug fixes.</p>
                </div>
              </div>

              {/* Review */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-[hsl(var(--brand-start))]">6</span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">Client Review</h4>
                  <p className="mt-1 text-white/60">Demo session and feedback<br />incorporation.</p>
                </div>
              </div>

              {/* Launch */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-white">7</span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">Launch</h4>
                  <p className="mt-1 text-white/60">Deployment, DNS setup,<br />and go-live support.</p>
                </div>
              </div>

              {/* Support */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-[hsl(var(--brand-start))]">8</span>
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">Ongoing Support</h4>
                  <p className="mt-1 text-white/60">Maintenance, updates,<br />and feature enhancements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechFooter />
      <ScrollToTopButton />
    </Layout>
  );
}
