import Link from 'next/link';

export function Footer() {
  return (
    <footer
      className="w-full bg-[#1A202C] text-[#F4F4F4] bg-cover"
      style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 1) 100%),  url('/image/footer-bg.jpg')"}}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <Link className="flex items-center gap-2 text-2xl font-bold text-white" href="/">
              <span className="material-symbols-outlined text-primary text-3xl"> hub </span>
              <span>SamolTech&nbsp;Consult</span>
            </Link>
            <p className="text-sm text-[#A0AEC0]">Engineering digital solutions that drive growth and innovation for businesses worldwide.</p>
            <div className="flex flex-col gap-4 text-sm text-[#A0AEC0]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary/80 mt-0.5">location_on</span>
                <span>
                  9 Joy Close, Oke-Ibukun Estate Zone2, Elebu, Alaka-Express Rd
                  <br />
                  Ibadan, NG.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary/80">call</span>
                <a href="tel:+2348139723521" className="text-text-muted-light dark:text-text-muted-dark text-sm">(234) 813 9723 521</a>
                
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary/80">mail</span>
                <a href="mailto:contact@samoltechconsult.com" className="text-text-muted-light dark:text-text-muted-dark text-sm">contact@SamolTechConsult.com</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-base font-semibold text-white">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="/contact">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">
                  Careers
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-base font-semibold text-white">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">
                  Website Development
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">
                  Cloud &amp; DevOps
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">
                  IT Consultancy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-semibold text-white">Join Our Newsletter</h3>
            <p className="text-sm text-[#A0AEC0]">Get the latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className="flex w-full flex-col items-center gap-2 sm:flex-row">
              <label className="sr-only" htmlFor="email-address">
                Email address
              </label>
              <input
                autoComplete="email"
                className="w-full flex-auto appearance-none rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                id="email-address"
                name="email-address"
                placeholder="Enter your email"
                required
                type="email"
              />
              <button
                className="w-full flex-shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 sm:w-auto"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-2">
              <h3 className="text-base font-semibold text-white">Follow Us</h3>
              <div className="flex items-center space-x-4 mt-4">
                <Link aria-label="LinkedIn" className="text-[#A0AEC0] transition-colors hover:text-white" href="#">
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                  </svg>
                </Link>
                <Link aria-label="Twitter" className="text-[#A0AEC0] transition-colors hover:text-white" href="#">
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.21 0-.42-.015-.63.961-.689 1.799-1.56 2.46-2.548l-.002-.001z"></path>
                  </svg>
                </Link>
                <Link aria-label="GitHub" className="text-[#A0AEC0] transition-colors hover:text-white" href="#">
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .267.18.577.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-700/50 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[#A0AEC0]">© 2023 SamolTech&nbsp;Consult. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
