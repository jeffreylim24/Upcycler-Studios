import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Footer Brand */}
          <div className="footer-brand">
            <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
              Upcycler Studios
            </h3>
            <p className="text-white/60 font-light text-sm mb-3">
              Where fashion is an infinite loop.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-[0.05em] text-white">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/upcyclerstudios/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17" cy="7" r="1.2"/>
                </svg>
              </a>
              <a
                href="http://t.me/upcyclerstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Telegram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 3L2 12l5 2 2 5 3-4 4 2z"/>
                </svg>
              </a>
              <a
                href="https://www.carousell.sg/u/UpcyclerStudios/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Carousell"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className='flex flex-col items-center'>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-[0.05em] text-white">
              Get in Touch
            </h4>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-md text-sm font-medium"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Contact Us
            </Link>
          </div>

          {/* Find Us */}
          <div className='flex flex-col items-center'>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-[0.05em] text-white">
              Visit
            </h4>
            <a
              href="https://www.google.com/maps?q=Peninsula+Shopping+Centre+B1-14+Singapore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-md text-sm font-medium"
              aria-label="Find us on Google Maps"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Find Us
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 text-xs">
            &copy; 2025 Upcycler Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};