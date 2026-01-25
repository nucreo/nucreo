import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { usePageSlider } from "@/contexts/PageSliderContext";

const mainLinks = [
  { href: "#expertise", label: "Expertise" },
  { href: "#offer", label: "Offer" },
  { href: "#deepfakes", label: "Deepfakes" },
  { href: "#gameplays", label: "Gameplays" },
  { href: "#actors", label: "Actors" },
  { href: "#ai-videos", label: "AI Videos" },
  { href: "#smm", label: "SMM" },
  { href: "#partnership", label: "Partnership" },
  { href: "#workflow", label: "Workflow" },
  { href: "#contact", label: "Contact" },
];

const techLinks = [
  { href: "#tech-expertise", label: "Expertise" },
  { href: "#tech-offer", label: "Offer" },
  { href: "#tech-websites", label: "Web Solutions" },
  { href: "#tech-ios", label: "iOS Development" },
  { href: "#tech-custom", label: "Custom" },
  { href: "#tech-workflow", label: "Workflow" },
  { href: "#tech-contact", label: "Contact" },
];

export function Navbar() {
  const { currentPage } = usePageSlider();
  const isTech = currentPage === 1;
  const links = isTech ? techLinks : mainLinks;
  const logoText = isTech ? "NUCREO TECH" : "NUCREO";
  const logoHref = isTech ? "#tech-hero" : "#hero";
  const mobileContactHref = isTech ? "#tech-contact" : "#contact";

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/5">
      <nav className="container flex items-center justify-between h-14">
        {/* Animated Logo */}
        <AnimatePresence mode="wait">
          <motion.a
            href={logoHref}
            className="text-xl font-extrabold tracking-wide gradient-text"
            key={logoText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {logoText}
          </motion.a>
        </AnimatePresence>

        {/* Animated Desktop Links */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={isTech ? 'tech' : 'main'}
            className="hidden md:flex gap-6 text-sm text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {links.map((l, index) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.03,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <a
                  className={cn(
                    "hover:text-white transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-end))] rounded"
                  )}
                  href={l.href}
                >
                  {l.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>

        {/* Animated Mobile Contact */}
        <AnimatePresence mode="wait">
          <motion.a
            key={mobileContactHref}
            href={mobileContactHref}
            className="md:hidden text-sm text-white/70 hover:text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            Contact
          </motion.a>
        </AnimatePresence>
      </nav>
    </header>
  );
}
