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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/70">
      {children}
    </span>
  );
}

export default function Index() {
  const { goToTech } = usePageSlider();

  return (
    <Layout>
      {/* Hero */}
      <section
        id="hero"
        className="glow-container glow-center relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/30 to-black" />

        {/* Top Labels - between title and top of screen */}
        <div className="absolute top-[28%] left-[25%] -translate-x-1/2 z-20">
          <BracketLabel variant="orange">gambling</BracketLabel>
        </div>
        <div className="absolute top-[30%] left-[75%] -translate-x-1/2 z-20">
          <BracketLabel variant="orange">betting</BracketLabel>
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
                  Creative design  and tech agency
                </p>
              </div>
              {/* Title */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-center">
                "NUCREO"
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#offer"
              className="inline-flex items-center rounded-md bg-gradient-to-tr from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] px-5 py-3 font-semibold text-black shadow-lg shadow-orange-500/20"
            >
              Explore services
            </a>
            <button
              onClick={goToTech}
              className="inline-flex items-center rounded-md border border-[hsl(var(--brand-start))]/50 bg-[hsl(var(--brand-start))]/10 px-5 py-3 font-semibold text-[hsl(var(--brand-start))] hover:bg-[hsl(var(--brand-start))]/20 transition-colors"
            >
              Explore Tech
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Labels - under title with good margin */}
        <div className="absolute top-[70%] left-[35%] -translate-x-1/2 z-20">
          <BracketLabel variant="orange">crypto</BracketLabel>
        </div>
        <div className="absolute top-[72%] ml-2 left-[65%] -translate-x-1/2 z-20">
          <BracketLabel variant="orange">dating</BracketLabel>
        </div>
      </section>

      {/* Expertise & Social Proof */}
      <section
        id="expertise"
        className="glow-container glow-top-left py-20 md:py-28 scroll-mt-24"
      >
        <div className="container relative z-10">
          <SectionTitle title="Designers with deep marketing experience" />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <img
                src="/expertise/collaborate.png"
                alt="Collaborate"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <img
                src="/expertise/exp.png"
                alt="Experience"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <img
                src="/expertise/focus.png"
                alt="Focus"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section
        id="offer"
        className="glow-container glow-center py-20 md:py-28 scroll-mt-24"
      >
        <div className="container relative z-10">
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-col text-left">
              <p className="text-3xl md:text-5xl text-white/90 font-light">
                What we
              </p>
              <h2 className="text-7xl md:text-9xl font-extrabold tracking-tight mt-2">
                OFFER
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-16">
            {[
              { id: "deepfakes", name: "DEEPFAKES" },
              { id: "gameplays", name: "GAMEPLAYS" },
              { id: "actors", name: "ACTORS" },
              { id: "ai-videos", name: "AI VIDEOS" },
              { id: "smm", name: "SMM PROJECT MANAGEMENT" },
            ].map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-block px-8 py-3.5 text-base md:text-lg tracking-wide text-white  rounded-full hover:bg-white/20 transition-all"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section
        id="deepfakes"
        className="glow-container glow-botttom-left py-16 md:py-24 scroll-mt-24"
      >
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Service
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold">DEEPFAKES</h3>
            <ol className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
              <li>
                Geo & Offer Analysis — In-depth research to tailor the creative
                strategy
              </li>
              <li>
                Character and Source Selection — selecting characters &
                locations for filming
              </li>
              <li>
                Script Development — integrating proven marketing concepts and
                character strengths
              </li>
              <li>Editing and Sound design</li>
              <li>
                1 Round of Revisions — ensuring the final result meets your
                expectations
              </li>
            </ol>
          </div>
          <div>
            <div className="relative w-full overflow-hidden rounded-xl image-fade-edges">
              <img
                src="/offer/deepfakes.png"
                alt="DEEPFAKES"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="gameplays"
        className="glow-container glow-bottom-left py-16 md:py-24 scroll-mt-24"
      >
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Service
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold">GAMEPLAYS</h3>
            <ul className="mt-6 space-y-3 text-white/80 list-disc list-inside">
              <li>Gameplay videos featuring popular slots and crash games</li>
              <li>
                Tracking and compositing animated assets onto green-screen
                footage
              </li>
              <li>
                Seamless integration with deepfakes, live actors, and
                AI-generated content
              </li>
            </ul>
          </div>
          <div>
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl image-fade-edges">
              <video
                src="/Gameplay Phone.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="actors"
        className="glow-container py-16 md:py-24 scroll-mt-24"
      >
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Service
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold">ACTORS</h3>
            <ol className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
              <li>
                Geo & Offer Analysis — In-depth research to tailor the creative
                strategy
              </li>
              <li>
                Actors casting — selecting characters & locations for filming
              </li>
              <li>Script development — using proven marketing concepts</li>
              <li>Editing and Sound design</li>
              <li>
                1 Round of Revisions — ensuring the final result meets your
                expectations
              </li>
            </ol>
          </div>
          <div>
            <div className="relative w-full overflow-hidden rounded-xl image-fade-edges">
              <img
                src="/offer/actors.png"
                alt="ACTORS"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ai-videos" className="py-16 md:py-24 scroll-mt-24">
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <div className="glow-container glow-bottom-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Service
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold">AI VIDEOS</h3>
            <ol className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
              <li>Script and prompt development</li>
              <li>Custom video creation using Veo3 and other AI tools</li>
              <li>Video production with AI-generated ultrarealistic actors</li>
              <li>Editing and sound design</li>
              <li>Adding 3D elements and characters to original footage</li>
            </ol>
          </div>
          <div>
            <div className="relative w-full overflow-hidden rounded-xl image-fade-edges">
              <img
                src="/offer/ai.png"
                alt="AI VIDEOS"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="smm"
        className="glow-container glow-bottom-left py-16 md:py-24 scroll-mt-24"
      >
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Service
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold">
              TURNKEY PROJECT MANAGEMENT
            </h3>
            <ol className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
              <li>
                Launching a project from scratch or joining an existing one
              </li>
              <li>
                Competitor analysis and creating a two-quarter development plan
              </li>
              <li>Writing video scripts and copywriting</li>
              <li>Designing banners, covers, and profile branding</li>
              <li>Video shooting, editing, and post-production</li>
              <li>
                Chatting with leads and handling CPA tasks (sales process)
              </li>
            </ol>
          </div>
          <div>
            <div className="relative w-full overflow-hidden rounded-xl image-fade-edges">
              <img
                src="/offer/smm.png"
                alt="SMM PROJECT MANAGEMENT"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section
        id="partnership"
        className="glow-container glow-center py-20 md:py-28 scroll-mt-24"
      >
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Partner with <span className="gradient-text">NUCREO</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              for one-off projects as your trusted outsource team,
              <br />
              or integrate us fully as your in-house creative
              <br />
              unit under NDA.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section
        id="workflow"
        className="glow-container glow-multiple py-20 md:py-28 scroll-mt-24"
      >
        <div className="container relative z-10">
          <SectionTitle title="Our Workflow" />
          <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-0">
              {/* Brief consultation */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-[hsl(var(--brand-start))]">
                      1
                    </span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">
                    Brief consultation
                  </h4>
                  <p className="mt-1 text-white/60">
                    Discussing goals, target audience,
                    <br />
                    and key requirements.
                  </p>
                </div>
              </div>

              {/* Pre-payment */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-white">2</span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">Pre-payment</h4>
                  <p className="mt-1 text-white/60">
                    50% upfront for new clients.
                    <br />
                    100% upfront for returning clients.
                  </p>
                </div>
              </div>

              {/* General research and strategy development */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-[hsl(var(--brand-start))]">
                      3
                    </span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">
                    General research and strategy development
                  </h4>
                  <p className="mt-1 text-white/60">
                    Analyze competitors, GEO
                    <br />
                    and market trends.
                  </p>
                </div>
              </div>

              {/* Concept & Script Creation */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-[hsl(var(--brand-start))]">
                      4
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">
                    Concept & Script Creation
                  </h4>
                  <p className="mt-1 text-white/60">
                    Develop video scripts and source selection.
                    <br />
                    Client review and approval.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-0">
              {/* Content Production & Editing */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-[hsl(var(--brand-start))]">
                      5
                    </span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">
                    Content Production & Editing
                  </h4>
                  <p className="mt-1 text-white/60">
                    Script development and character/
                    <br />
                    style selection.
                  </p>
                </div>
              </div>

              {/* Approval and revisions */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-[hsl(var(--brand-start))]">
                      6
                    </span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">
                    Approval and revisions
                  </h4>
                  <p className="mt-1 text-white/60">
                    Adjustments to ensure the final result
                    <br />
                    meets your expectations.
                  </p>
                </div>
              </div>

              {/* Final Payment */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-white">7</span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">
                    Final Payment
                  </h4>
                  <p className="mt-1 text-white/60">
                    50% — remaining balance upon project
                    <br />
                    completion (for new clients only).
                  </p>
                </div>
              </div>

              {/* Paid Revisions */}
              <div className="flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-white">8</span>
                  </div>
                  <div className="w-px flex-1 border-l-2 border-dashed border-white/20 mt-2"></div>
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

              {/* Performance Review */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-start))]">
                    <span className="text-sm font-bold text-[hsl(var(--brand-start))]">
                      9
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white">
                    Performance Review
                  </h4>
                  <p className="mt-1 text-white/60">
                    Marketing metrics analysis and improvement identification.
                    <br />
                    Adapting content for other GEOs & offers
                    <br />
                    and scaling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </Layout>
  );
}
