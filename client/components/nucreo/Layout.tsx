import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative">
        <div aria-hidden className="pointer-events-none fixed inset-0 nucreo-glow" />
        {children}
      </main>
    </div>
  );
}
