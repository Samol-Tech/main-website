import Link from "next/link";
import type { Metadata } from "next";
import { HomeHeroCarousel } from "./home-hero-carousel";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: {
    absolute: "SamolTech Consult | Web, Mobile & Cloud Solutions That Drive Growth",
  },
  description:
    "SamolTech Consult builds websites, mobile apps, and cloud systems engineered for one outcome: business growth. Get a free project quote and see the ROI.",
  openGraph: {
    title: "SamolTech Consult | Web, Mobile & Cloud Solutions That Drive Growth",
    description:
      "SamolTech Consult builds websites, mobile apps, and cloud systems engineered for one outcome: business growth. Get a free project quote and see the ROI.",
    url: "https://samoltechconsult.name.ng",
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
    title: "SamolTech Consult | Web, Mobile & Cloud Solutions That Drive Growth",
    description:
      "SamolTech Consult builds websites, mobile apps, and cloud systems engineered for one outcome: business growth. Get a free project quote and see the ROI.",
    images: ["/image/logo.jpeg"],
    creator: "@abiodun_sam_",
  },
};

export default async function Home() {
  const latestPosts = await prisma.post.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    take: 3,
  });

  return (
    <main className="flex flex-1 justify-center">
      <div className="layout-content-container flex flex-col max-w-full flex-1">
        <HomeHeroCarousel />
        {/* Hero section with Carousel */}
        <section className="relative w-full overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-gray-900">
          {/* First Hero  */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out carousel-slide"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('/image/code-hero.png')" }}
          >
            <div className="flex flex-col mx-auto items-center justify-center h-full text-center px-4 py-20 relative z-10">
              <div className="max-w-4xl flex flex-col items-center gap-4">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl mb-4">
                  Websites Built to Convert, Not Just Impress
                </h1>
                <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-6">
                  SamolTech Consult builds fast, SEO-ready websites engineered to turn traffic into revenue —
                  with measurable results from day one.
                </p>
                <Link
                  href="/contact"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <span className="truncate">Get a Free Project Quote</span>
                </Link>
              </div>
            </div>
          </div>

          {/*Second hero */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out carousel-slide"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('/image/mobile-hero.jpg')" }}
          >
            <div className="flex flex-col mx-auto items-center justify-center h-full text-center px-4 py-20 relative z-10">
              <div className="max-w-4xl flex flex-col items-center gap-4">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl mb-4">
                  Mobile Apps That Turn Users Into Revenue
                </h1>
                <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-6">
                  From concept to App Store, we build mobile experiences engineered for engagement, retention,
                  and real business growth.
                </p>
                <Link
                  href="/contact"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <span className="truncate">Start Your App Project</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Third Hero  */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out carousel-slide"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('/image/cloud-hero.jpg')" }}
          >
            <div className="flex flex-col mx-auto items-center justify-center h-full text-center px-4 py-20 relative z-10">
              <div className="max-w-4xl flex flex-col items-center gap-4">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl mb-4">
                  Cloud Infrastructure That Cuts Costs, Not Corners
                </h1>
                <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-6">
                  We re-architect your infrastructure for scale and reliability — so you spend less on downtime
                  and more on growth.
                </p>
                <Link
                  href="/contact"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <span className="truncate">Optimize Your Cloud Spend</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
            <button className="size-3 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></button>
            <button className="size-3 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></button>
            <button className="size-3 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></button>
          </div>
        </section>

        <section
          className="hidden py-16 sm:py-20 bg-primary/5 dark:bg-background-dark/5 border-t border-b border-gray-200 dark:border-gray-800"
        >
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-3xl leading-tight">
              Driving Digital Transformation with Expert IT Solutions
            </h2>
            <p className="mt-4 text-md leading-7 text-gray-700 dark:text-gray-300">
              SamolTech&nbsp;Consult Solutions is your trusted partner for comprehensive
              <strong className="font-semibold">software development</strong>
              and advanced
              <strong className="font-semibold">IT solutions</strong>. We specialize in custom web and mobile applications, cloud computing,
              and cybersecurity, helping businesses achieve seamless <strong className="font-semibold">digital transformation</strong>. Our
              expert team leverages cutting-edge technology to build scalable, secure, and future-proof systems tailored to your unique
              needs. Whether you&apos;re looking for innovative software, robust infrastructure, or strategic IT consultancy, we deliver
              excellence that propels your growth and enhances your competitive edge.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <h2 className="text-[#111318] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-5 pt-5 text-center">
            How We Drive Your Growth
          </h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            <div
              className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined text-primary">code</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight">Website Development</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                  High-converting websites engineered for speed, SEO, and measurable ROI.
                </p>
              </div>
            </div>
            <div
              className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined text-primary">phone_iphone</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight">Mobile App Development</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                  Native and cross-platform apps built to grow your user base and revenue.
                </p>
              </div>
            </div>
            <div
              className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined text-primary">cloud_queue</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight">Cloud &amp; DevOps</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                  Cut infrastructure costs and ship faster with automated, scalable operations.
                </p>
              </div>
            </div>
            <div
              className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined text-primary">security</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight">Cybersecurity</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                  Protect revenue and reputation with proactive threat defense.
                </p>
              </div>
            </div>
            <div
              className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined text-primary">groups</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight">IT Consultancy</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                  Strategic roadmaps that turn IT spend into competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 bg-gray-100 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-primary text-base font-semibold tracking-wide uppercase">Client Success Stories</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-4xl">
                What Our Valued Clients Say
              </p>
              <p className="mt-4 text-xl leading-8 text-gray-600 dark:text-gray-300">
                Real businesses. Real growth. See what partnering with SamolTech Consult delivers.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <figure
                className="rounded-2xl bg-white dark:bg-gray-800 p-10 shadow-xl ring-1 ring-gray-900/5 transition-transform duration-300 hover:scale-105"
              >
                <blockquote className="text-lg leading-7 text-gray-700 dark:text-gray-300">
                  <p>
                    “SamolTech Consult rebuilt our website and our conversion rate jumped 42% in the first quarter.
                    They didn&apos;t just deliver a site — they delivered growth.”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50"
                    alt="Photo of Sarah Johnson"
                    src="/image/testimonials/sarah-johnson.png"
                  />
                  <div>
                    <div className="font-semibold text-[#111318] dark:text-white">Sarah Johnson</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Marketing Director, TechCorp</div>
                  </div>
                </figcaption>
              </figure>
              <figure
                className="rounded-2xl bg-white dark:bg-gray-800 p-10 shadow-xl ring-1 ring-gray-900/5 transition-transform duration-300 hover:scale-105"
              >
                <blockquote className="text-lg leading-7 text-gray-700 dark:text-gray-300">
                  <p>
                    “The mobile app SamolTech built for us hit 50,000 downloads in three months. Every dollar we
                    spent came back in user growth — and then some.”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50"
                    alt="Photo of Michael Chen"
                    src="/image/testimonials/michael-chen.png"
                  />
                  <div>
                    <div className="font-semibold text-[#111318] dark:text-white">Michael Chen</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">CEO, NextGen Startups</div>
                  </div>
                </figcaption>
              </figure>
              <figure
                className="rounded-2xl bg-white dark:bg-gray-800 p-10 shadow-xl ring-1 ring-gray-900/5 transition-transform duration-300 hover:scale-105"
              >
                <blockquote className="text-lg leading-7 text-gray-700 dark:text-gray-300">
                  <p>
                    “SamolTech&apos;s cybersecurity overhaul cut our incident response time by 70% and gave our
                    board real confidence in our risk posture.”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50"
                    alt="Photo of Emily White"
                    src="/image/testimonials/emily-white.png"
                  />
                  <div>
                    <div className="font-semibold text-[#111318] dark:text-white">Emily White</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">CTO, SecureCorp Ltd.</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-primary text-base font-semibold tracking-wide uppercase">Partnership &amp; Trust</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-4xl">Trusted by Industry Leaders</p>
            <p className="mt-4 text-xl leading-8 text-gray-600 dark:text-gray-300">
              Join the growing list of companies who chose SamolTech Consult to power their growth.
            </p>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-x-8 gap-y-12">
              <div className="flex justify-center p-4">
                <img
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="Client logo 1"
                  src="/image/clients/logo-1.png"
                />
              </div>
              <div className="flex justify-center p-4">
                <img
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="Client logo 2"
                  src="/image/clients/logo-2.png"
                />
              </div>
              <div className="flex justify-center p-4">
                <img
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="Client logo 3"
                  src="/image/clients/logo-3.png"
                />
              </div>
              <div className="flex justify-center p-4">
                <img
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="Client logo 4"
                  src="/image/clients/logo-4.png"
                />
              </div>
              <div className="flex justify-center p-4">
                <img
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="Client logo 5"
                  src="/image/clients/logo-5.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24">
          <div className="text-center">
            <h2 className="text-[#111318] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-5 pt-5">
              Latest Insights &amp; News
            </h2>
            <p className="mt-2 text-base leading-8 text-gray-500 dark:text-gray-400">
              Practical strategies to help you get more return on your technology investment.
            </p>
          </div>
          {latestPosts.length > 0 ? (
            <div className="mt-16 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {latestPosts.map((post) => (
                <article
                  key={post.id}
                  className="relative flex flex-col items-start justify-between bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  {post.coverImage && (
                    <div className="relative w-full">
                      <img
                        className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                        alt={post.title}
                        src={post.coverImage}
                      />
                      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  )}
                  <div className="max-w-xl mt-6">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time className="text-gray-500" dateTime={(post.publishedAt ?? post.createdAt).toISOString()}>
                        {(post.publishedAt ?? post.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      <Link
                        className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary hover:bg-primary/20"
                        href={`/blog?category=${encodeURIComponent(post.category)}`}
                      >
                        {post.category}
                      </Link>
                    </div>
                    <div className="group">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-[#111318] dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                        <Link href={`/blog/${post.slug}`}>
                          {/* Positioned against the article (now `relative`), not this
                              div, so the whole card — image included — is clickable. */}
                          <span className="absolute inset-0"></span>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-gray-500 dark:text-gray-400">
              New articles are on the way — check back soon.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
