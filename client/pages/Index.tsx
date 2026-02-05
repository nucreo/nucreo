import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/nucreo/Layout";
import { Footer } from "@/components/nucreo/Footer";
import { ScrollToTopButton } from "@/components/nucreo/ScrollToTopButton";
import { usePageSlider } from "@/contexts/PageSliderContext";
import { BracketLabel } from "@/components/nucreo/BracketLabel";
import { SectionTitle } from "@/components/nucreo/SectionTitle";
import { AnimatedSection } from "@/components/nucreo/AnimatedSection";
import { AnimatedTextLine } from "@/components/nucreo/AnimatedText";
import { AnimatedList } from "@/components/nucreo/AnimatedList";
import { TimelineColumn, TimelineStepSimple } from "@/components/nucreo/TimelineStep";
import {
  buttonHover,
  buttonTap,
  defaultViewport,
  heroStaggerContainer,
  heroStaggerItem,
  parallaxConfig,
  primaryButtonHover,
  staggerContainer,
  staggerItem,
  TIMING
} from "@/lib/animations";

/**
 * ParallaxImage - Image wrapper with parallax scroll effect
 */
function ParallaxImage({
  src,
  alt,
  className,
  isVideo = false
}: {
  src: string;
  alt: string;
  className?: string;
  isVideo?: boolean;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: parallaxConfig.offset
  });
  const y = useTransform(scrollYProgress, [0, 1], parallaxConfig.rangeSubtle);

  return (
    <motion.div ref={ref} style={{ y }} className="will-change-transform">
      {isVideo ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={className}
        />
      ) : (
        <img src={src} alt={alt} className={className} />
      )}
    </motion.div>
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
        <div className="absolute top-[24%] left-[25%] -translate-x-1/2 z-20">
          <BracketLabel variant="orange" delay={0.6} floatDuration={3.5}>
            gambling
          </BracketLabel>
        </div>
        <div className="absolute top-[24%] left-[75%] -translate-x-1/2 z-20">
          <BracketLabel variant="orange" delay={0.7} floatDuration={4}>
            betting
          </BracketLabel>
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          {/* Hero Title Layout */}
          <motion.div
            className="relative mt-10 mb-10 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={heroStaggerContainer}
          >
            {/* Wrapper that matches title width */}
            <div className="inline-flex flex-col">
              {/* Labels positioned relative to title */}
              <motion.div
                className="flex justify-between items-end mb-2 px-1"
                variants={heroStaggerItem}
              >
                <p className="text-white text-3xl md:text-6xl font-light whitespace-nowrap">
                  We're
                </p>
                <p className="text-sm md:text-base font-light bg-gradient-to-r from-[#FF5E00] to-[#AD0000] bg-clip-text text-transparent text-right whitespace-nowrap">
                  Creative design and tech agency
                </p>
              </motion.div>
              {/* Title */}
              <AnimatedTextLine
                as="h1"
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-center"
                delay={0.3}
              >
                "NUCREO"
              </AnimatedTextLine>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex items-center justify-center gap-3 flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            <motion.a
              href="#offer"
              className="inline-flex items-center rounded-md bg-gradient-to-tr from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] px-5 py-3 font-semibold text-black shadow-lg shadow-orange-500/20"
              variants={staggerItem}
              whileHover={primaryButtonHover}
              whileTap={buttonTap}
            >
              Explore services
            </motion.a>
            <motion.button
              onClick={goToTech}
              className="inline-flex items-center rounded-md border border-[hsl(var(--brand-start))]/50 bg-[hsl(var(--brand-start))]/10 px-5 py-3 font-semibold text-[hsl(var(--brand-start))] hover:bg-[hsl(var(--brand-start))]/20 transition-colors"
              variants={staggerItem}
              whileHover={buttonHover}
              whileTap={buttonTap}
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
            </motion.button>
            <motion.a
              href="#contact"
              className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10"
              variants={staggerItem}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Labels - under title with good margin */}
        <div className="absolute top-[82%] left-[35%] -translate-x-1/2 z-20">
          <BracketLabel variant="orange" delay={0.8} floatDuration={3.2}>
            crypto
          </BracketLabel>
        </div>
        <div className="absolute top-[82%] ml-2 left-[65%] -translate-x-1/2 z-20">
          <BracketLabel variant="orange" delay={0.9} floatDuration={3.8}>
            dating
          </BracketLabel>
        </div>
      </section>

      {/* Expertise & Social Proof */}
      <section
        id="expertise"
        className="glow-container glow-top-left py-20 md:py-28 "
      >
        <div className="container relative z-10">
          <SectionTitle title="Designers with deep marketing experience" />
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {[
              { src: "/expertise/collaborate.png", alt: "Collaborate" },
              { src: "/expertise/exp.png", alt: "Experience" },
              { src: "/expertise/focus.png", alt: "Focus" }
            ].map((card, index) => (
              <motion.div
                key={card.alt}
                className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: TIMING.fast } }}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Offered */}
      <section
        id="offer"
        className="glow-container glow-center py-20 md:py-28 "
      >
        <div className="container relative z-10">
          <AnimatedSection direction="up" className="flex justify-center mb-12">
            <div className="inline-flex flex-col text-left">
              <p className="text-3xl md:text-5xl text-white/90 font-light">
                What we
              </p>
              <h2 className="text-7xl md:text-9xl font-extrabold tracking-tight mt-2">
                OFFER
              </h2>
            </div>
          </AnimatedSection>
          <motion.div
            className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {[
              { id: "deepfakes", name: "DEEPFAKES", mobileSpan: false },
              { id: "gameplays", name: "GAMEPLAYS", mobileSpan: false },
              { id: "actors", name: "ACTORS", mobileSpan: false },
              { id: "ai-videos", name: "AI VIDEOS", mobileSpan: false },
              { id: "smm", name: "SMM PROJECT MANAGEMENT", mobileSpan: true },
            ].map((s) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                className={`inline-flex justify-center px-4 md:px-8 py-3.5 text-sm md:text-lg tracking-wide text-white rounded-full hover:bg-white/20 transition-all ${
                  s.mobileSpan ? "col-span-2" : ""
                }`}
                variants={staggerItem}
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                {s.name}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section
        className="glow-container glow-botttom-left py-16 md:py-24"
      >
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <AnimatedSection direction="left" id="deepfakes" className="">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Service
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold">DEEPFAKES</h3>
            <AnimatedList as="ol" className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
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
            </AnimatedList>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative w-full overflow-hidden rounded-xl image-fade-edges">
              <ParallaxImage
                src="/offer/deepfakes.png"
                alt="DEEPFAKES"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section
        className="py-16 md:py-24"
      >
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <AnimatedSection direction="left" id="gameplays" className="">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Service
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold">GAMEPLAYS</h3>
            <AnimatedList as="ul" className="mt-6 space-y-3 text-white/80 list-disc list-inside">
              <li>Gameplay videos featuring popular slots and crash games</li>
              <li>
                Tracking and compositing animated assets onto green-screen
                footage
              </li>
              <li>
                Seamless integration with deepfakes, live actors, and
                AI-generated content
              </li>
            </AnimatedList>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative w-full max-h-[calc(100vh-30px)] rounded-xl image-fade-edges">
              <ParallaxImage
                src="/Gameplay Phone.mp4"
                alt="GAMEPLAYS"
                className="w-full max-h-[calc(100vh-30px)] object-contain rounded-xl"
                isVideo
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section
        className="py-16 md:py-24"
      >
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <AnimatedSection direction="left" id="actors" className="">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Service
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold">ACTORS</h3>
            <AnimatedList as="ol" className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
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
            </AnimatedList>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative w-full overflow-hidden rounded-xl image-fade-edges">
              <ParallaxImage
                src="/offer/actors.png"
                alt="ACTORS"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <AnimatedSection direction="left" id="ai-videos">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Service
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold">AI VIDEOS</h3>
            <AnimatedList as="ol" className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
              <li>Script and prompt development</li>
              <li>Custom video creation using Veo3 and other AI tools</li>
              <li>Video production with AI-generated ultrarealistic actors</li>
              <li>Editing and sound design</li>
              <li>Adding 3D elements and characters to original footage</li>
            </AnimatedList>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative w-full overflow-hidden rounded-xl image-fade-edges">
              <ParallaxImage
                src="/RedBull_Mac.mp4"
                alt="AI VIDEOS"
                className="w-full h-full object-cover"
                isVideo
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section
        className="py-16 md:py-24"
      >
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <AnimatedSection direction="left" id="smm" className="">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Service
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold">
              TURNKEY PROJECT MANAGEMENT
            </h3>
            <AnimatedList as="ol" className="mt-6 space-y-3 text-white/80 list-decimal list-inside">
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
            </AnimatedList>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative w-full overflow-hidden rounded-xl image-fade-edges">
              <ParallaxImage
                src="/offer/smm.png"
                alt="SMM PROJECT MANAGEMENT"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partnership Model */}
      <section
        id="partnership"
        className="glow-container glow-bottom-left py-20 md:py-28 "
      >
        <div className="container relative z-10">
          <AnimatedSection direction="up" className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              Partner with <span className="gradient-text">NUCREO</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              for one-off projects as your trusted outsource team,
              or integrate us fully as your in-house creative
              unit under NDA.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Process */}
      <section
        id="workflow"
        className="glow-container glow-multiple py-20 md:py-28 "
      >
        <div className="container relative z-10">
          <SectionTitle title="Our Workflow" />
          <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
            {/* Left Column */}
            <TimelineColumn>
              <TimelineStepSimple
                number={1}
                title="Brief consultation"
                description={
                  <>
                    Discussing goals, target audience,
                    <br />
                    and key requirements.
                  </>
                }
              />
              <TimelineStepSimple
                number={2}
                title="Pre-payment"
                description={
                  <>
                    50% upfront for new clients.
                    <br />
                    100% upfront for returning clients.
                  </>
                }
                filled
              />
              <TimelineStepSimple
                number={3}
                title="General research and strategy development"
                description={
                  <>
                    Analyze competitors, GEO
                    <br />
                    and market trends.
                  </>
                }
              />
              <TimelineStepSimple
                number={4}
                title="Concept & Script Creation"
                description={
                  <>
                    Develop video scripts and source selection.
                    <br />
                    Client review and approval.
                  </>
                }
                isLast
              />
            </TimelineColumn>

            {/* Right Column */}
            <TimelineColumn>
              <TimelineStepSimple
                number={5}
                title="Content Production & Editing"
                description={
                  <>
                    Script development and character/
                    <br />
                    style selection.
                  </>
                }
              />
              <TimelineStepSimple
                number={6}
                title="Approval and revisions"
                description={
                  <>
                    Adjustments to ensure the final result
                    <br />
                    meets your expectations.
                  </>
                }
              />
              <TimelineStepSimple
                number={7}
                title="Final Payment"
                description={
                  <>
                    50% — remaining balance upon project
                    <br />
                    completion (for new clients only).
                  </>
                }
                filled
              />
              <TimelineStepSimple
                number={8}
                title="Paid Revisions"
                description="Extra revisions billed separately."
                filled
              />
              <TimelineStepSimple
                number={9}
                title="Performance Review"
                description={
                  <>
                    Marketing metrics analysis and improvement identification.
                    <br />
                    Adapting content for other GEOs & offers
                    <br />
                    and scaling.
                  </>
                }
                isLast
              />
            </TimelineColumn>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </Layout>
  );
}
