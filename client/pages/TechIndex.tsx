import Layout from "@/components/nucreo/Layout";
import { Footer } from "@/components/nucreo/Footer";
import { ScrollToTopButton } from "@/components/nucreo/ScrollToTopButton";
import { usePageSlider } from "@/contexts/PageSliderContext";
import { BracketLabel } from "@/components/nucreo/BracketLabel";

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
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            CREATIVE TECH AGENCY
          </h3>
          <div className="grid gap-8 md:grid-cols-3 w-full max-w-3xl items-center">
            <div className="order-2 md:order-1 text-sm text-white/70">
              <div className="flex items-center justify-center gap-2">
                <span className="sr-only">Email</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  className="hover:underline"
                  href="mailto:nucreoglobal@gmail.com"
                >
                  nucreoglobal@gmail.com
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex items-center justify-center">
              <div className="relative inline-flex items-center justify-center rounded-lg p-2">
                <img
                  src="/qr_code.png"
                  alt="Qr"
                  className="h-29 w-29 rounded"
                />
              </div>
            </div>
            <div className="order-3 text-sm text-white/70">
              <div className="flex items-center justify-center gap-2">
                <span className="sr-only">Telegram</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M9.04 15.41l-.39 5.49c.56 0 .8-.24 1.09-.53l2.62-2.52 5.43 3.98c1 .55 1.72.26 1.99-.93l3.61-16.89h.01c.32-1.47-.53-2.05-1.5-1.69L1.5 9.6c-1.45.56-1.43 1.37-.25 1.73l5.49 1.71L18.88 6.5c.62-.41 1.18-.18.72.23" />
                </svg>
                <a
                  className="hover:underline"
                  href="https://t.me/nucreotech"
                  target="_blank"
                  rel="noreferrer"
                >
                  @nucreotech
                </a>
              </div>
            </div>
          </div>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} NUCREO TECH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function TechIndex() {
  const { goToMain } = usePageSlider();

  return (
    <Layout>
      <div className="theme-tech">
        {/* Hero */}
        <section
          id="tech-hero"
          className="glow-container glow-center relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/30 to-black" />

          {/* Top Labels - between title and top of screen */}
          <div className="absolute top-[28%] left-[25%] -translate-x-1/2 z-20">
            <BracketLabel variant="orange">web dev</BracketLabel>
          </div>
          <div className="absolute top-[30%] left-[75%] -translate-x-1/2 z-20">
            <BracketLabel variant="orange">ios dev</BracketLabel>
          </div>

          <div className="container relative z-10 pt-24 pb-16">
            {/* Hero Title Layout */}
            <div className="relative mt-10 mb-10 flex flex-col items-center">
              {/* Wrapper that matches title width */}
              <div className="inline-flex flex-col">
                {/* Labels positioned relative to title */}
                <div className="flex justify-between items-end mb-2 px-1">
                  <p className="text-white text-3xl md:text-6xl font-light whitespace-nowrap">
                    We're
                  </p>
                  <p className="text-sm md:text-base font-light bg-gradient-to-r from-[#FF5E00] to-[#AD0000] bg-clip-text text-transparent text-right whitespace-nowrap">
                    Creative design and tech agency
                  </p>
                </div>
                {/* Title */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-center">
                  "NUCREO TECH"
                </h1>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a
                href="#tech-offer"
                className="inline-flex items-center rounded-md bg-gradient-to-tr from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/20"
              >
                Explore services
              </a>
              <button
                onClick={goToMain}
                className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Nucreo
              </button>
              <a
                href="#tech-contact"
                className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Bottom Labels - under title with good margin */}
          <div className="absolute top-[75%] left-[35%] -translate-x-1/2 z-20">
            <BracketLabel variant="orange">typescript</BracketLabel>
          </div>
          <div className="absolute top-[77%] ml-3 left-[65%] -translate-x-1/2 z-20">
            <BracketLabel variant="orange">node.js</BracketLabel>
          </div>


        </section>

        {/* Tech Expertise */}
        <section
          id="tech-expertise"
          className="glow-container glow-top-right py-20 md:py-28 scroll-mt-24"
        >
          <div className="container relative z-10">
            <div className="mb-10">
              <h2 className="text-4xl md:text-6xl tracking-tight mb-1">
                <span className="font-normal">Our</span>{" "}
                <span className="font-extrabold uppercase">EXPERTISE</span>
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <img
                src="/card1.png"
                alt="Industry Tools and Partners"
                className="w-full h-auto object-cover rounded-xl"
              />
              <img
                src="/card2.png"
                alt="Engineering Experience"
                className="w-full h-auto object-cover rounded-xl"
              />
              <img
                src="/card3.png"
                alt="User Experience Focus"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section
          id="tech-offer"
          className="glow-container glow-center py-20 md:py-28 scroll-mt-24"
        >
          <div className="container relative z-10">
            <div className="flex justify-center mb-12">
              <div className="inline-flex flex-col text-left">
                <p className="text-3xl md:text-5xl text-white font-light">
                  What we
                </p>
                <h2 className="text-7xl md:text-9xl font-extrabold tracking-tight mt-2">
                  &nbsp;&nbsp;&nbsp;OFFER
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-16">
              {[
                { id: "tech-websites", name: "WEB SOLUTIONS" },
                { id: "tech-ios", name: "IOS DEVELOPMENT" },
                { id: "tech-custom", name: "CUSTOM & SPECIAL REQUESTS" },
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

        {/* WEB SOLUTIONS */}
        <section
          id="tech-websites"
          className="glow-container glow-bottom-left py-16 md:py-24 scroll-mt-24"
        >
          <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-8">
                WEB SOLUTIONS
              </h3>

              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">1</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Strategic Logic Audit
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      In-depth analysis of your business logic to engineer a
                      high-conversion structure that drives profit
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">2</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Premium Sales-Focused Design
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      Creating mobile-first, aesthetically driven interfaces
                      specifically optimized to sell your product or service
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">3</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Seamless Ecosystem Integration
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      Connecting your platform to CRMs, social media, email
                      services for a unified & automated business flow
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">4</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Interactive 3D & Advanced Animations
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      Elevating engagement with scalable digital platforms,
                      admin panels, and high-end interactive elements
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">5</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Full Deployment & Technical Support
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      WebView/PWA and App Store submission
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative w-full overflow-hidden rounded-xl">
                <img
                  src="/mac1.png"
                  alt="Web Solutions - Modern web development showcase"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="tech-ios"
          className="glow-container glow-top-right py-16 md:py-24 scroll-mt-24"
        >
          <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-8">
                IOS DEVELOPMENT
              </h3>
              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">1</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Native SwiftUI Architecture
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      High-performance engineering using Apple's latest
                      framework
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">2</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      HIG-Compliant UI/UX
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      Seamless user journeys following Human Interface
                      Guidelines
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">3</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Secure Auth & Data
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      Integrated Apple ID/Phone authentication and real-time
                      databases
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">4</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Retention & Monetization
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      Advanced push notifications and native payment gateways
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">5</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      App Store Lifecycle
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      End-to-end submission management and moderation support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative w-full overflow-hidden rounded-xl">
                <img
                  src="/phones.png"
                  alt="IOS DEVELOPMENT"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOM & SPECIAL REQUESTS */}
        <section
          id="tech-custom"
          className="glow-container glow-center py-16 md:py-24 scroll-mt-24"
        >
          {/* Python Image - positioned absolutely on the right */}
          <img
            src="/python_image.png"
            alt="Python"
            className="absolute right-0 top-1/4 mb:top-1/3  -translate-y-1/2 z-20 w-1/6 md:w-1/7 pointer-events-none"
          />

          {/* Telegram Image - positioned absolutely, centered, behind cards */}
          <img
            src="/telegram_image.png"
            alt="Telegram"
            style={{ bottom: -60 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 z-0 w-48 md:w-64 lg:w-72 pointer-events-none"
          />

          <div className="container relative z-10">
            <h3 className="text-3xl md:text-5xl mb-12 text-left">
              <span className="font-bold">CUSTOM & SPECIAL</span>
              <br />
              <span className="font-light">REQUESTS</span>
            </h3>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {/* Card 1 */}
                <div className="rounded-xl p-[1px] bg-gradient-to-br from-[#666666] to-[#000000]">
                  <div className="rounded-xl bg-gradient-to-br from-[#191919] to-[#000000] p-6 flex gap-6 items-start h-full">
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-[#FF5E00] to-[#AD0000] bg-clip-text text-transparent">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Automation:
                      </h4>
                      <p className="text-base text-white/70">
                        High-tier bots for automated sales, support, and
                        internal notifications
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="rounded-xl p-[1px] bg-gradient-to-br from-[#666666] to-[#000000]">
                  <div className="rounded-xl bg-gradient-to-br from-[#191919] to-[#000000] p-6 flex gap-6 items-start h-full">
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-[#FF5E00] to-[#AD0000] bg-clip-text text-transparent">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Custom Software:
                      </h4>
                      <p className="text-base text-white/70">
                        Specialized scripts, data parsers, and automation tools
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="rounded-xl p-[1px] bg-gradient-to-br from-[#666666] to-[#000000]">
                  <div className="rounded-xl bg-gradient-to-br from-[#191919] to-[#000000] p-6 flex gap-6 items-start h-full">
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-[#FF5E00] to-[#AD0000] bg-clip-text text-transparent">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        AI Implementation:
                      </h4>
                      <p className="text-base text-white/70">
                        Integrating AI-driven features into your existing
                        workflow
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="rounded-xl p-[1px] bg-gradient-to-br from-[#666666] to-[#000000]">
                  <div className="rounded-xl bg-gradient-to-br from-[#191919] to-[#000000] p-6 flex gap-6 items-start h-full">
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-[#FF5E00] to-[#AD0000] bg-clip-text text-transparent">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Creative Tech:
                      </h4>
                      <p className="text-base text-white/70">
                        Specialized requests for cutting-edge creative
                        productions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*/!* Tech Stack *!/*/}
        {/*<section*/}
        {/*  id="tech-stack"*/}
        {/*  className="glow-container glow-center py-20 md:py-28 scroll-mt-24"*/}
        {/*>*/}
        {/*  <div className="container relative z-10">*/}
        {/*    <div className="text-center max-w-4xl mx-auto">*/}
        {/*      <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">*/}
        {/*        Built with <span className="gradient-text">Modern Tech</span>*/}
        {/*      </h2>*/}
        {/*      <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">*/}
        {/*        We use cutting-edge technologies to build fast,*/}
        {/*        <br />*/}
        {/*        scalable, and maintainable web solutions.*/}
        {/*      </p>*/}
        {/*      <div className="flex flex-wrap justify-center gap-4">*/}
        {/*        {[*/}
        {/*          "React",*/}
        {/*          "Vue",*/}
        {/*          "TypeScript",*/}
        {/*          "Next.js",*/}
        {/*          "Tailwind CSS",*/}
        {/*          "Node.js",*/}
        {/*          "PostgreSQL",*/}
        {/*          "Docker",*/}
        {/*        ].map((tech) => (*/}
        {/*          <span*/}
        {/*            key={tech}*/}
        {/*            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70"*/}
        {/*          >*/}
        {/*            {tech}*/}
        {/*          </span>*/}
        {/*        ))}*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* Workflow */}
        <section
          id="tech-workflow"
          className="glow-container glow-multiple py-20 md:py-28 scroll-mt-24"
        >
          <div className="container relative z-10">
            <SectionTitle title="Development Process" />
            <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-0">
                {/* Discovery */}
                <div className="flex gap-4 min-h-[140px]">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                      <span className="text-sm font-bold text-[hsl(var(--brand-start))]">
                        1
                      </span>
                    </div>
                    <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                  </div>
                  <div className="flex-1 pt-1 pb-8">
                    <h4 className="text-xl font-bold text-white">
                      Brief consultation
                    </h4>
                    <p className="mt-1 text-white/60">
                      Understanding your business, target audience, and
                      <br />
                      technical needs.
                    </p>
                  </div>
                </div>

                {/* Planning */}
                <div className="flex gap-4 min-h-[140px]">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--brand-start))]">
                      <span className="text-sm font-bold text-white">2</span>
                    </div>
                    <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                  </div>
                  <div className="flex-1 pt-1 pb-8">
                    <h4 className="text-xl font-bold text-white">
                      Pre-payment
                    </h4>
                    <p className="mt-1 text-white/60">
                      50% upfront for new clients. 100% upfront for <br />{" "}
                      returning clients.
                    </p>
                  </div>
                </div>

                {/* Design */}
                <div className="flex gap-4 min-h-[140px]">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                      <span className="text-sm font-bold text-[hsl(var(--brand-start))]">
                        3
                      </span>
                    </div>
                    <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                  </div>
                  <div className="flex-1 pt-1 pb-8">
                    <h4 className="text-xl font-bold text-white">
                      Design Mockups
                    </h4>
                    <p className="mt-1 text-white/60">
                      Figma prototypes for desktop & mobile.
                      <br /> 2 revision rounds included.
                    </p>
                  </div>
                </div>

                {/* Development */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                      <span className="text-sm font-bold text-[hsl(var(--brand-start))]">
                        4
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1 pb-8">
                    <h4 className="text-xl font-bold text-white">
                      Development Sprint
                    </h4>
                    <p className="mt-1 text-white/60">
                      Agile development with weekly demos and staging access.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-0">
                {/* Testing */}
                <div className="flex gap-4 min-h-[140px]">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                      <span className="text-sm font-bold text-[hsl(var(--brand-start))]">
                        5
                      </span>
                    </div>
                    <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                  </div>
                  <div className="flex-1 pt-1 pb-8">
                    <h4 className="text-xl font-bold text-white">
                      Approval and revisions
                    </h4>
                    <p className="mt-1 text-white/60">
                      Adjustments to ensure the final result
                      <br /> meets your expectations
                    </p>
                  </div>
                </div>

                {/* Review */}
                <div className="flex gap-4 min-h-[140px]">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                      <span className="text-sm font-bold text-[hsl(var(--brand-start))]">
                        6
                      </span>
                    </div>
                    <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                  </div>
                  <div className="flex-1 pt-1 pb-8">
                    <h4 className="text-xl font-bold text-white">
                      Launch & Deployment
                    </h4>
                    <p className="mt-1 text-white/60">
                      Full technical setup: hosting, SSL, analytics, <br />
                      App Store submission.
                    </p>
                  </div>
                </div>

                {/* Launch */}
                <div className="flex gap-4 min-h-[140px]">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--brand-start))]">
                      <span className="text-sm font-bold text-white">7</span>
                    </div>
                    <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                  </div>
                  <div className="flex-1 pt-1 pb-8">
                    <h4 className="text-xl font-bold text-white">
                      Final Payment
                    </h4>
                    <p className="mt-1 text-white/60">
                      50% — remaining balance upon project completion
                      <br /> (for new clients only).
                    </p>
                  </div>
                </div>

                {/* Support */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--brand-start))]">
                      <span className="text-sm font-bold text-white">8</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-xl font-bold text-white">
                      Paid Revisions
                    </h4>
                    <p className="mt-1 text-white/60">
                      Extra revisions billed separately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TechFooter />
        <ScrollToTopButton />
      </div>
    </Layout>
  );
}
