import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { usePageSlider } from "@/contexts/PageSliderContext";

/**
 * Scroll to element with center alignment
 */
function scrollToCenter(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

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
        {/* Logo - uses absolute positioning within relative container */}
        <div className="relative h-full flex items-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.a
              href={logoHref}
              onClick={(e) => scrollToCenter(e, logoHref)}
              className="text-xl font-extrabold tracking-wide gradient-text whitespace-nowrap cursor-pointer"
              key={logoText}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              {logoText}
            </motion.a>
          </AnimatePresence>
        </div>

        {/* Desktop Links - fixed to the right with absolute positioning */}
        <div className="relative hidden md:flex items-center h-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={isTech ? 'tech' : 'main'}
              className="flex gap-6 text-sm text-white/70"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              {links.map((l, index) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.02,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <a
                    className={cn(
                      "hover:text-white transition-colors whitespace-nowrap cursor-pointer",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-end))] rounded"
                    )}
                    href={l.href}
                    onClick={(e) => scrollToCenter(e, l.href)}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Mobile Contact */}
        <div className="relative md:hidden flex items-center h-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.a
              key={mobileContactHref}
              href={mobileContactHref}
              onClick={(e) => scrollToCenter(e, mobileContactHref)}
              className="text-sm text-white/70 hover:text-white whitespace-nowrap cursor-pointer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              Contact
            </motion.a>
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
