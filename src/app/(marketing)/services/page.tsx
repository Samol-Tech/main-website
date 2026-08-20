import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services",
	description:
		"Website development, mobile apps, cloud & DevOps, cybersecurity, and IT consultancy — every SamolTech Consult service is built to grow your bottom line.",
	openGraph: {
		title: "Services | SamolTech Consult",
		description:
			"Website development, mobile apps, cloud & DevOps, cybersecurity, and IT consultancy — every SamolTech Consult service is built to grow your bottom line.",
		url: "https://samoltechconsult.name.ng/services",
		siteName: "SamolTech",
		images: [
			{
				url: "/image/logo.jpeg",
				width: 1200,
				height: 630,
				alt: "SamolTech Consult",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Services | SamolTech Consult",
		description:
			"Website development, mobile apps, cloud & DevOps, cybersecurity, and IT consultancy — every SamolTech Consult service is built to grow your bottom line.",
		images: ["/image/logo.jpeg"],
		creator: "@abiodun_sam_",
	},
};

export default function Page() {
	return (
		<main className="flex flex-1 flex-col">
          {/* HeroSection - full viewport width; text column stays constrained, same pattern as about-us */}
          <div
            className="min-h-[480px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(10, 37, 64, 0.8), rgba(10, 37, 64, 0.88)), url('/image/services-hero.jpg')",
            }}
          >
            <div className="relative max-w-4xl mx-auto text-center px-4 py-16 sm:py-20 lg:py-24">
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Technology Services Built to Grow Your Bottom Line
              </h1>
              <h2 className="mt-4 text-white/90 text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">
                From high-converting websites to bulletproof cybersecurity, every service we offer is measured
                by the business results it delivers.
              </h2>
              <Link href="/contact">
                <button
                  className="mt-8 flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-violet-creative text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-violet-creative/90 transition-colors"
                >
                  <span className="truncate">Let&apos;s Build Your Project</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center py-5">
          <div className="layout-content-container flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 md:px-8">
            {/* Chips / Service Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-3 p-3 overflow-x-auto">
              <a
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-grey-light px-4 text-grey-dark transition-colors hover:bg-violet-creative/20 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-violet-creative/30"
                href="#web-dev"
              >
                <p className="text-sm font-medium leading-normal">Web Dev</p>
              </a>
              <a
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-grey-light px-4 text-grey-dark transition-colors hover:bg-violet-creative/20 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-violet-creative/30"
                href="#mobile-apps"
              >
                <p className="text-sm font-medium leading-normal">Mobile Apps</p>
              </a>
              <a
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-grey-light px-4 text-grey-dark transition-colors hover:bg-violet-creative/20 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-violet-creative/30"
                href="#cloud-devops"
              >
                <p className="text-sm font-medium leading-normal">Cloud &amp; DevOps</p>
              </a>
              <a
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-grey-light px-4 text-grey-dark transition-colors hover:bg-violet-creative/20 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-violet-creative/30"
                href="#cybersecurity"
              >
                <p className="text-sm font-medium leading-normal">Cybersecurity</p>
              </a>
              <a
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-grey-light px-4 text-grey-dark transition-colors hover:bg-violet-creative/20 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-violet-creative/30"
                href="#it-consultancy"
              >
                <p className="text-sm font-medium leading-normal">IT Consultancy</p>
              </a>
            </div>
            {/* Services Sections */}
            <div className="flex flex-col gap-16">
              {/* Service Card: Website Development */}
              <div className="flex scroll-mt-24 flex-col gap-8 md:flex-row md:items-center" id="web-dev">
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-xl bg-violet-creative/10 text-violet-creative dark:bg-violet-creative/20"
                    >
                      <span className="material-symbols-outlined text-3xl">code</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-deep dark:text-white">Website Development</h3>
                  </div>
                  <p className="text-grey-dark dark:text-gray-300">
                    Websites engineered to load fast, rank higher, and convert more visitors into paying
                    customers — not just look good.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Built to Convert
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> SEO Optimized From Day One
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Faster Load, Lower Bounce Rate
                    </li>
                  </ul>
                  <Link
                    className="mt-2 font-semibold text-blue-deep transition-colors hover:text-violet-creative dark:text-violet-creative dark:hover:text-violet-creative/80"
                    href="/contact"
                    >Get a Quote →</Link>
                </div>
                <div
                  className="w-full rounded-xl bg-center bg-no-repeat aspect-video bg-cover md:w-1/2"
                  data-alt="Close-up of HTML/SVG code on a screen, representing web development"
                  style={{backgroundImage: "url('/image/services/web-development.jpg')"}}
                  ></div>
              </div>
              {/* Service Card: Mobile App Development */}
              <div className="flex scroll-mt-24 flex-col gap-8 md:flex-row-reverse md:items-center" id="mobile-apps">
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-xl bg-violet-creative/10 text-violet-creative dark:bg-violet-creative/20"
                    >
                      <span className="material-symbols-outlined text-3xl">phone_iphone</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-deep dark:text-white">Mobile App Development</h3>
                  </div>
                  <p className="text-grey-dark dark:text-gray-300">
                    Mobile apps designed to grow your user base and keep people coming back — on iOS and
                    Android alike.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Faster Time to Market
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Built for Retention
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Native &amp; Cross-Platform
                    </li>
                  </ul>
                  <a
                    className="mt-2 font-semibold text-blue-deep transition-colors hover:text-violet-creative dark:text-violet-creative dark:hover:text-violet-creative/80"
                    href="/contact"
                    >Get a Quote →</a
                  >
                </div>
                <div
                  className="w-full rounded-xl bg-center bg-no-repeat aspect-video bg-cover md:w-1/2"
                  data-alt="Smartphone home screen with app icons, representing mobile app development"
                  style={{backgroundImage: "url('/image/services/mobile-apps.jpg')"}}
                ></div>
              </div>
              {/* Service Card: Cloud & DevOps */}
              <div className="flex scroll-mt-24 flex-col gap-8 md:flex-row md:items-center" id="cloud-devops">
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-xl bg-violet-creative/10 text-violet-creative dark:bg-violet-creative/20"
                    >
                      <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-deep dark:text-white">Cloud &amp; DevOps Engineering</h3>
                  </div>
                  <p className="text-grey-dark dark:text-gray-300">
                    Cloud infrastructure and CI/CD pipelines that cut costs, eliminate downtime, and let your
                    team ship features faster.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Lower Infrastructure Costs
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> 99.9% Uptime Reliability
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Faster Release Cycles
                    </li>
                  </ul>
                  <a
                    className="mt-2 font-semibold text-blue-deep transition-colors hover:text-violet-creative dark:text-violet-creative dark:hover:text-violet-creative/80"
                    href="/contact"
                    >Get a Quote →</a
                  >
                </div>
                <div
                  className="w-full rounded-xl bg-center bg-no-repeat aspect-video bg-cover md:w-1/2"
                  data-alt="Server rack with status lights, representing cloud infrastructure"
                  style={{backgroundImage: "url('/image/services/cloud-devops.jpg')"}}
                ></div>
              </div>
              {/* Service Card: Cybersecurity */}
              <div className="flex scroll-mt-24 flex-col gap-8 md:flex-row-reverse md:items-center" id="cybersecurity">
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-xl bg-violet-creative/10 text-violet-creative dark:bg-violet-creative/20"
                    >
                      <span className="material-symbols-outlined text-3xl">shield_lock</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-deep dark:text-white">Cybersecurity</h3>
                  </div>
                  <p className="text-grey-dark dark:text-gray-300">
                    Proactive security that protects your revenue, your data, and your reputation — before an
                    incident happens, not after.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Reduced Breach Risk
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Regulatory Compliance
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> 24/7 Threat Monitoring
                    </li>
                  </ul>
                  <a
                    className="mt-2 font-semibold text-blue-deep transition-colors hover:text-violet-creative dark:text-violet-creative dark:hover:text-violet-creative/80"
                    href="/contact"
                    >Get a Quote →</a
                  >
                </div>
                <div
                  className="w-full rounded-xl bg-center bg-no-repeat aspect-video bg-cover md:w-1/2"
                  data-alt="Padlock resting on a keyboard, representing cybersecurity"
                  style={{backgroundImage: "url('/image/services/cybersecurity.jpg')"}}
                ></div>
              </div>
              {/* Service Card: IT Consultancy */}
              <div className="flex scroll-mt-24 flex-col gap-8 md:flex-row md:items-center" id="it-consultancy">
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-xl bg-violet-creative/10 text-violet-creative dark:bg-violet-creative/20"
                    >
                      <span className="material-symbols-outlined text-3xl">lightbulb</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-deep dark:text-white">IT Consultancy</h3>
                  </div>
                  <p className="text-grey-dark dark:text-gray-300">
                    Strategic technology roadmaps that turn every IT dollar into measurable business impact —
                    not just another line item.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Clear ROI on Every Investment
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Faster Digital Transformation
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Aligned With Business Goals
                    </li>
                  </ul>
                  <a
                    className="mt-2 font-semibold text-blue-deep transition-colors hover:text-violet-creative dark:text-violet-creative dark:hover:text-violet-creative/80"
                    href="/contact"
                    >Get a Quote →</a
                  >
                </div>
                <div
                  className="w-full rounded-xl bg-center bg-no-repeat aspect-video bg-cover md:w-1/2"
                  data-alt="Team gathered around a table taking notes, representing strategic consultancy"
                  style={{backgroundImage: "url('/image/services/it-consultancy.jpg')"}}
                ></div>
              </div>
            </div>
            {/* Central CTA Block */}
            <div className="@container w-full bg-grey-light dark:bg-gray-900 rounded-xl">
              <div
                className="flex flex-col items-center justify-center gap-6 px-4 py-10 text-center @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20"
              >
                <div className="flex flex-col gap-2">
                  <h1
                    className="text-blue-deep dark:text-white text-3xl font-bold leading-tight tracking-tight @[480px]:text-4xl @[480px]:font-black @[480px]:tracking-[-0.033em]"
                  >
                    Have a Project in Mind? Let&apos;s Talk Numbers.
                  </h1>
                  <p className="text-grey-dark dark:text-gray-300 text-base font-normal leading-normal max-w-xl">
                    Book a free consultation and walk away with a clear plan — timeline, cost, and expected
                    impact on your business.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-violet-creative text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-violet-creative/90"
                >
                  <span className="truncate">Schedule a Free Consultation</span>
                </a>
              </div>
            </div>
            {/* FAQ Accordion */}
            <div className="mx-auto w-full max-w-3xl space-y-8 px-4 py-10">
              <h2 className="text-center text-3xl font-bold text-blue-deep dark:text-white">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-grey-dark dark:text-gray-200">
                    What is your development process like?
                    <span className="transition group-open:rotate-180 text-violet-creative">
                      <span className="material-symbols-outlined">expand_more</span>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-grey-dark dark:text-gray-400">
                    Our process is collaborative and transparent. We start with a discovery phase to understand your needs, followed by
                    design, development, testing, and deployment. We use agile methodologies to ensure flexibility and continuous feedback.
                  </p>
                </details>
                <details className="group rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-grey-dark dark:text-gray-200">
                    How long does a typical project take?
                    <span className="transition group-open:rotate-180 text-violet-creative">
                      <span className="material-symbols-outlined">expand_more</span>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-grey-dark dark:text-gray-400">
                    Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex mobile app
                    could take 3-6 months. We provide a detailed timeline after the initial consultation.
                  </p>
                </details>
                <details className="group rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-grey-dark dark:text-gray-200">
                    What technologies do you specialize in?
                    <span className="transition group-open:rotate-180 text-violet-creative">
                      <span className="material-symbols-outlined">expand_more</span>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-grey-dark dark:text-gray-400">
                    We work across today&apos;s most in-demand technologies — React, Node.js, Python, Flutter for
                    Android and iOS, and cloud platforms like AWS and Azure — and choose the right stack for your
                    project, not the trendiest one.
                  </p>
                </details>
                <details className="group rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-grey-dark dark:text-gray-200">
                    Do you provide ongoing support and maintenance?
                    <span className="transition group-open:rotate-180 text-violet-creative">
                      <span className="material-symbols-outlined">expand_more</span>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-grey-dark dark:text-gray-400">
                    Yes, we offer flexible support and maintenance packages to ensure your application remains secure, updated, and performs
                    optimally long after launch.
                  </p>
                </details>
              </div>
            </div>
          </div>
          </div>
        </main>
	);
};