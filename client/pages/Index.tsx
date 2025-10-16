import Layout from "@/components/nucreo/Layout";
import { Footer } from "@/components/nucreo/Footer";
import { ScrollToTopButton } from "@/components/nucreo/ScrollToTopButton";

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
  return (
    <Layout>
      {/* Hero */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/30 to-black" />
        <div className="container relative z-10 pt-24 pb-16 text-center">
          <p className="mt-10 text-white/70 text-lg">We’re</p>
          <h1 className="mt-2 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95]">
            “NUCREO”
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/80">Creative design agency</p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a href="#offer" className="inline-flex items-center rounded-md bg-gradient-to-tr from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] px-5 py-3 font-semibold text-black shadow-lg shadow-orange-500/20">Explore services</a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10">Contact</a>
          </div>
        </div>
      </section>

      {/* Expertise & Social Proof */}
      <section id="expertise" className="py-20 md:py-28 scroll-mt-24">
        <div className="container">
          <SectionTitle title="Designers with deep marketing experience" />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <img src="/expertise/collaborate.png" alt="Collaborate" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <img src="/expertise/exp.png" alt="Experience" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <img src="/expertise/focus.png" alt="Focus" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section id="offer" className="py-20 md:py-28 scroll-mt-24">
        <div className="container">
          <p className="text-2xl md:text-4xl text-white/80">What we</p>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">OFFER</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { id: "deepfakes", name: "DEEPFAKES", img: "/offer/deepfakes.png" },
              { id: "gameplays", name: "GAMEPLAYS", img: "/offer/gameplay.png" },
              { id: "actors", name: "ACTORS", img: "/offer/actors.png" },
              { id: "ai-videos", name: "AI VIDEOS", img: "/offer/ai.png" },
              { id: "smm", name: "SMM PROJECT MANAGEMENT", img: "/offer/smm.png" },
            ].map((s) => (
              <a key={s.id} href={`#${s.id}`} className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                <div className="h-24 rounded-lg overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 font-semibold group-hover:gradient-text">{s.name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="deepfakes" className="py-16 md:py-24 scroll-mt-24">
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Service</p>
            <h3 className="text-3xl md:text-5xl font-extrabold">DEEPFAKES</h3>
            <ol className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
              <li>Geo & Offer Analysis — In-depth research to tailor the creative strategy</li>
              <li>Character and Source Selection — selecting characters & locations for filming</li>
              <li>Script Development — integrating proven marketing concepts and character strengths</li>
              <li>Editing and Sound design</li>
              <li>1 Round of Revisions — ensuring the final result meets your expectations</li>
            </ol>
          </div>
          <div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src="/offer/deepfakes.png" alt="DEEPFAKES" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="gameplays" className="py-16 md:py-24 scroll-mt-24">
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Service</p>
            <h3 className="text-3xl md:text-5xl font-extrabold">GAMEPLAYS</h3>
            <ul className="mt-6 space-y-3 text-white/80 list-disc list-inside">
              <li>Gameplay videos featuring popular slots and crash games</li>
              <li>Tracking and compositing animated assets onto green-screen footage</li>
              <li>Seamless integration with deepfakes, live actors, and AI-generated content</li>
            </ul>
          </div>
          <div>
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src="/offer/gameplay.png" alt="GAMEPLAYS" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="actors" className="py-16 md:py-24 scroll-mt-24">
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Service</p>
            <h3 className="text-3xl md:text-5xl font-extrabold">ACTORS</h3>
            <ol className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
              <li>Geo & Offer Analysis — In-depth research to tailor the creative strategy</li>
              <li>Actors casting — selecting characters & locations for filming</li>
              <li>Script development — using proven marketing concepts</li>
              <li>Editing and Sound design</li>
              <li>1 Round of Revisions — ensuring the final result meets your expectations</li>
            </ol>
          </div>
          <div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src="/offer/actors.png" alt="ACTORS" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="ai-videos" className="py-16 md:py-24 scroll-mt-24">
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Service</p>
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
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src="/offer/ai.png" alt="AI VIDEOS" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="smm" className="py-16 md:py-24 scroll-mt-24">
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Service</p>
            <h3 className="text-3xl md:text-5xl font-extrabold">SMM PROJECT MANAGEMENT</h3>
            <p className="mt-2 text-sm text-white/60">TURNKEY PROJECT MANAGEMENT</p>
            <ol className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
              <li>Launching a project from scratch or joining an existing one</li>
              <li>Competitor analysis and creating a two-quarter development plan</li>
              <li>Writing video scripts and copywriting</li>
              <li>Designing banners, covers, and profile branding</li>
              <li>Video shooting, editing, and post-production</li>
              <li>Chatting with leads and handling CPA tasks (sales process)</li>
            </ol>
          </div>
          <div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src="/offer/smm.png" alt="SMM PROJECT MANAGEMENT" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section id="partnership" className="py-20 md:py-28 scroll-mt-24">
        <div className="container">
          <SectionTitle title="Partner with Nucreo" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-bold">Option 1</h4>
              <p className="mt-2 text-white/80">Partner for one-off projects as a trusted outsource team.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-bold">Option 2</h4>
              <p className="mt-2 text-white/80">Integrate fully as an in-house creative unit under NDA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="workflow" className="py-20 md:py-28 scroll-mt-24">
        <div className="container">
          <SectionTitle title="Our Workflow" />
          <div className="grid gap-6 md:grid-cols-2">
            <ol className="space-y-3 list-decimal list-inside text-white/80">
              <li>Brief consultation</li>
              <li>Pre-payment — <span className="text-white">50% for new clients</span> and <span className="text-white">100% for returning</span></li>
              <li>Research and Strategy</li>
              <li>Concept & Script Creation</li>
              <li>Content Production & Editing</li>
              <li>Approval and Revisions</li>
              <li>Final Payment</li>
              <li>Paid revisions</li>
              <li>Performance Review & Scaling</li>
            </ol>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold gradient-text">Paid Revisions</h4>
              <p className="mt-2 text-white/80">Extra work beyond the agreed scope is billed separately.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </Layout>
  );
}
