import { cn } from "@/lib/utils";

const links = [
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

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/5">
      <nav className="container flex items-center justify-between h-14">
        <a href="#hero" className="text-xl font-extrabold tracking-wide gradient-text">NUCREO</a>
        <ul className="hidden md:flex gap-6 text-sm text-white/70">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className={cn(
                  "hover:text-white transition-colors", 
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-end))] rounded"
                )}
                href={l.href}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="md:hidden text-sm text-white/70 hover:text-white">Contact</a>
      </nav>
    </header>
  );
}
