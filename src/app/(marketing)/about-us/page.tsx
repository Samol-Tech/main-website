import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Meet SamolTech Consult — the technology partner growth-focused businesses trust to turn ambitious ideas into measurable results.",
	openGraph: {
		title: "About Us | SamolTech Consult",
		description:
			"Meet SamolTech Consult — the technology partner growth-focused businesses trust to turn ambitious ideas into measurable results.",
		url: "https://samoltechconsult.name.ng/about-us",
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
		title: "About Us | SamolTech Consult",
		description:
			"Meet SamolTech Consult — the technology partner growth-focused businesses trust to turn ambitious ideas into measurable results.",
		images: ["/image/logo.jpeg"],
		creator: "@abiodun_sam_",
	},
};

export default function About() {
	return (
		<main className="flex-grow">
			{/*HeroSection */}
			<section className="relative">
				<div
					className="min-h-[480px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
					style={{
						backgroundImage:
							"linear-gradient(rgba(10, 37, 64, 0.75), rgba(10, 37, 64, 0.85)), url('/image/about-hero.jpg')",
					}}
				>
					<div className="relative max-w-4xl mx-auto text-center px-4 py-16 sm:py-20 lg:py-24">
						<h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
							Technology Partners Who Deliver Real Business Growth
						</h1>
						<p className="mt-4 text-white/90 text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">
							We&apos;re the technology partner growth-focused businesses trust to turn ambitious ideas into measurable
							results — on time, on budget, on target.
						</p>
						<Link href="/services">
							<button
								className="mt-8 flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
							>
								<span className="truncate">Discover Our Services</span>
							</button>
						</Link>
					</div>
				</div>
			</section>
			{/*Company Story and Timeline Section */}
			<section className="py-16 sm:py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-4xl">Our Story</h2>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
							From a small startup to a growth partner for ambitious businesses, our story comes down to one thing:
							technology that performs, for clients who expect results.
						</p>
					</div>
					{/*Timeline */}
					<div className="max-w-2xl mx-auto">
						<div className="grid grid-cols-[auto_1fr] gap-x-4">
							<div className="flex flex-col items-center gap-2 pt-3">
								<span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
								<div className="w-px bg-gray-300 dark:bg-gray-600 h-full grow"></div>
							</div>
							<div className="flex flex-1 flex-col py-3 pl-4">
								<p className="text-[#111318] dark:text-white text-lg font-medium leading-normal">The Genesis</p>
								<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">2018</p>
								<p className="mt-2 text-gray-600 dark:text-gray-300">
									Founded with a simple premise: technology should pay for itself. SamolTech Consult began its journey
									helping small businesses compete online — and grew by keeping that promise.
								</p>
							</div>
							<div className="flex flex-col items-center gap-2">
								<div className="w-px bg-gray-300 dark:bg-gray-600 h-4"></div>
								<span className="material-symbols-outlined text-primary text-3xl">emoji_events</span>
								<div className="w-px bg-gray-300 dark:bg-gray-600 h-full grow"></div>
							</div>
							<div className="flex flex-1 flex-col py-3 pl-4">
								<p className="text-[#111318] dark:text-white text-lg font-medium leading-normal">First Major Milestone</p>
								<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">2020</p>
								<p className="mt-2 text-gray-600 dark:text-gray-300">
									Delivered our first enterprise-scale application — and the results spoke for themselves. Client
									referrals became our biggest source of new business.
								</p>
							</div>
							<div className="flex flex-col items-center gap-2 pb-3">
								<div className="w-px bg-gray-300 dark:bg-gray-600 h-4"></div>
								<span className="material-symbols-outlined text-primary text-3xl">public</span>
								<div className="w-px bg-gray-300 dark:bg-gray-600 h-full grow"></div>
							</div>
							<div className="flex flex-1 flex-col py-3 pl-4">
								<p className="text-[#111318] dark:text-white text-lg font-medium leading-normal">Expanding Horizons</p>
								<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">2022</p>
								<p className="mt-2 text-gray-600 dark:text-gray-300">
									Opened our first international office, so more businesses could get the same ROI-driven approach
									that built our reputation at home.
								</p>
							</div>
							<div className="flex flex-col items-center gap-2 pb-3">
								<div className="w-px bg-gray-300 dark:bg-gray-600 h-4"></div>
								<span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
							</div>
							<div className="flex flex-1 flex-col py-3 pl-4">
								<p className="text-[#111318] dark:text-white text-lg font-medium leading-normal">Future Forward</p>
								<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Present</p>
								<p className="mt-2 text-gray-600 dark:text-gray-300">
									Continuing to push the boundaries of technology, including AI, to help clients grow faster in an
									increasingly digital-first market.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Core Values Section */}
			<section className="py-16 sm:py-24 bg-white dark:bg-background-dark/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-4xl">Our Core Values</h2>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
							The principles that guide every project — and every dollar of your investment.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<span className="material-symbols-outlined text-2xl text-primary">emoji_objects</span>
							</div>
							<h3 className="mt-5 text-lg font-medium text-[#111318] dark:text-white">Innovation</h3>
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
								We use the latest technology because it gives your business a real, measurable edge — not for its own sake.
							</p>
						</div>
						<div className="text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<span className="material-symbols-outlined text-2xl text-primary">shield</span>
							</div>
							<h3 className="mt-5 text-lg font-medium text-[#111318] dark:text-white">Integrity</h3>
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
								Transparent pricing, honest timelines, and straight answers — no surprises, ever.
							</p>
						</div>
						<div className="text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<span className="material-symbols-outlined text-2xl text-primary">handshake</span>
							</div>
							<h3 className="mt-5 text-lg font-medium text-[#111318] dark:text-white">Partnership</h3>
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
								We measure our success by your results. When you grow, we&apos;ve done our job.
							</p>
						</div>
						<div className="text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<span className="material-symbols-outlined text-2xl text-primary">verified</span>
							</div>
							<h3 className="mt-5 text-lg font-medium text-[#111318] dark:text-white">Excellence</h3>
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
								Every project is held to the highest standard, because your success is the only outcome that matters.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/*Team Section */}
			<section className="py-16 sm:py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-4xl">Meet Our Leadership</h2>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">The driving force behind our innovation and success.</p>
					</div>
					<div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						<div className="text-center group">
							<img
								className="mx-auto h-40 w-40 rounded-full object-cover"
								data-alt="Professional headshot of Jane Doe"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG7PlIfiyPpolm_pfPkYemzJhEbILhB0_kDdwOfy95pfmBHpBIjca7RW6VOHFSODO0DF2mdzQLmMS96UAR_cGq8eimHzHxA3Po31WdAkYKtht-2wj8hKc90nyaDsHSmx4zH9IQaPV4I7LrE5ee9LKQCBSXvdKkARI5PF1avsQEI40y_UZmRgL7V80wseKlvROksGsv82-mzQqN5zrZdr4IowVSnf7O4U-Rcy0M0AX-h1onVmzASp8J5wmsSJuxTeGew9lY2tTsFcIS"
							/>
							<h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-[#111318] dark:text-white">Jane Doe</h3>
							<p className="text-sm leading-6 text-primary">Founder &amp; CEO</p>
						</div>
						<div className="text-center group">
							<img
								className="mx-auto h-40 w-40 rounded-full object-cover"
								data-alt="Professional headshot of John Smith"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Grs3fzfyZh6jRGkVdPJbh3Z0UWbiDWxfMk-sGHsgLPwiemV-X2HZN_-dbYeX92OdSQSKirpP3ffC2jr9q7BZf_KiNDKz-fmXBBSJCj5huPORpqsHiZvC0X2Z5ciq20xHeYxieQtAfPc4nI7cyzTdSK4uPiLyFoNXM8eMqjewK7SEnCFH5it_P51ALKWwboik9VdsXY00IBTPTBoMM4azat2f1WaiCQvr21_v6eXpB2FuIC1Unq3I0W_r2xzRuDuy_y45TF4WU0qJ"
							/>
							<h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-[#111318] dark:text-white">John Smith</h3>
							<p className="text-sm leading-6 text-primary">Chief Technology Officer</p>
						</div>
						<div className="text-center group">
							<img
								className="mx-auto h-40 w-40 rounded-full object-cover"
								data-alt="Professional headshot of Emily White"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuADmXqt7uA8K8cecgtZzzrt8jcI_dOENV3jGh_Q7YphfCbqFJf4qcbyTjEEQna3bDWbdLLGTdC3G9GdvclSNbOvBR-KFz8ASTT7Hx62_2DvqV3Xtv80NV-nFEsOvdBA8Vcn5qqGzbA1UfM-kPFtAKjgeYjBDy0z1X9dgZtW1h8fJ03DS_MEC-jvNVR_1FzZeW9i990hOELbqXycqtodOSoXvRS1ffcZEEHndTQAqIKVf6SXvF0gM9Gln5loFDbWzuGjhJ7kJVoPgFy6"
							/>
							<h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-[#111318] dark:text-white">Emily White</h3>
							<p className="text-sm leading-6 text-primary">Head of Product</p>
						</div>
						<div className="text-center group">
							<img
								className="mx-auto h-40 w-40 rounded-full object-cover"
								data-alt="Professional headshot of Michael Brown"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJB7vHZQIXLQ0KI8CJ3STBXUUc_3U7fUZQVf02MuHqd65g1w1lD8pw4b8b_YDF4zJF50i6z-_BAT5UDdT6CGJmKMk3gD8jAQt7VPjytVZUDw2rC6scHpu4F5ljyqNVWtm90qnJkwY5blmz9lEIFaSPE22mVBZd83aBDVXW__1nAk2aiuUon0ilRcfjQH8dCEYa2mmtS_GDyfaYCkVo0pvzwvypjY5UT2Z-jT47WyA-zXQvZ7orPWoHbfe6Y-un2_Jg4FReO0mGBI5q"
							/>
							<h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-[#111318] dark:text-white">Michael Brown</h3>
							<p className="text-sm leading-6 text-primary">Lead DevOps Engineer</p>
						</div>
					</div>
				</div>
			</section>
			{/*CTA Section */}
			<section className="bg-primary/90">
				<div className="max-w-4xl mx-auto text-center px-4 py-16 sm:py-20 lg:py-24">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Turn Your Idea Into Revenue?</h2>
					<p className="mt-4 text-lg leading-8 text-white/80">
						Book a free consultation and get a clear roadmap — no obligation, no jargon, just a plan to grow.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link href="/contact">
							<button
								className="min-w-[84px] cursor-pointer rounded-lg bg-white h-12 px-5 text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors"
							>
								<span className="truncate">Book a Free Consultation</span>
							</button>
						</Link>
						<Link className="text-base font-semibold leading-6 text-white" href="/services">See what we do <span aria-hidden="true">→</span></Link>
					</div>
				</div>
			</section>
		</main>
	);
};