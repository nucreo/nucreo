import { PropsWithChildren } from "react";

// Layout is now a simple wrapper since Navbar and PageGlow are rendered at the App level
// (outside the HorizontalPageSlider to prevent CSS transform from breaking fixed positioning)
export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative">
        {children}
      </main>
    </div>
  );
}
