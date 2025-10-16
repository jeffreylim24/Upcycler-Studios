import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-12">
          {/* Footer Brand */}
          <div className="footer-brand">
            <h3 className="text-2xl font-semibold mb-4 lowercase text-white">
              upcycler studios
            </h3>
            <p className="text-white/60 font-light">
              Where fashion meets infinite loop.
            </p>
          </div>

          {/* Footer Links */}
          <div className="footer-links grid grid-cols-3 gap-8 lg:col-span-2">
            {/* Shop Column */}
            <div className="footer-column">
              <h4 className="text-base font-semibold mb-4 uppercase tracking-[0.05em] text-white">
                Shop
              </h4>
              <div className="flex flex-col gap-2">
                <Link 
                  href="#" 
                  className="block text-white/70 no-underline transition-colors duration-300 font-light hover:text-white"
                >
                  Vintage
                </Link>
                <Link 
                  href="#" 
                  className="block text-white/70 no-underline transition-colors duration-300 font-light hover:text-white"
                >
                  Upcycled
                </Link>
                <Link 
                  href="#" 
                  className="block text-white/70 no-underline transition-colors duration-300 font-light hover:text-white"
                >
                  Limited Edition
                </Link>
              </div>
            </div>

            {/* About Column */}
            <div className="footer-column">
              <h4 className="text-base font-semibold mb-4 uppercase tracking-[0.05em] text-white">
                About
              </h4>
              <div className="flex flex-col gap-2">
                <Link 
                  href="/about" 
                  className="block text-white/70 no-underline transition-colors duration-300 font-light hover:text-white"
                >
                  Our Story
                </Link>
                <Link 
                  href="#" 
                  className="block text-white/70 no-underline transition-colors duration-300 font-light hover:text-white"
                >
                  Sustainability
                </Link>
                <Link 
                  href="#" 
                  className="block text-white/70 no-underline transition-colors duration-300 font-light hover:text-white"
                >
                  Process
                </Link>
              </div>
            </div>

            {/* Contact Column */}
            <div className="footer-column">
              <h4 className="text-base font-semibold mb-4 uppercase tracking-[0.05em] text-white">
                Contact
              </h4>
              <div className="flex flex-col gap-2">
                <Link 
                  href="/contact" 
                  className="block text-white/70 no-underline transition-colors duration-300 font-light hover:text-white"
                >
                  Get in Touch
                </Link>
                <Link 
                  href="#" 
                  className="block text-white/70 no-underline transition-colors duration-300 font-light hover:text-white"
                >
                  Visit Studio
                </Link>
                <Link 
                  href="#" 
                  className="block text-white/70 no-underline transition-colors duration-300 font-light hover:text-white"
                >
                  Collaborate
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            &copy; 2025 Upcycler Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};