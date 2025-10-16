export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/60">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">CREATIVE DESIGN AGENCY</h3>
          <div className="grid gap-8 md:grid-cols-3 w-full max-w-3xl items-center">
            <div className="order-2 md:order-1 text-sm text-white/70">
              <div className="flex items-center justify-center gap-2">
                <span className="sr-only">Email</span>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <a className="hover:underline" href="mailto:nucreoglobal@gmail.com">nucreoglobal@gmail.com</a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex items-center justify-center">
              <div className="relative inline-flex items-center justify-center rounded-lg border border-white/15 p-2">
                <img src="/qr.png" alt="QR code" className="h-29 w-29 rounded" />
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
          <p className="text-xs text-white/40">© {new Date().getFullYear()} NUCREO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
