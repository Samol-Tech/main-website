import type { Metadata } from "next";
import Script from "next/script";
import { createContactSubmission } from "./actions";
import { ClearStatusParam } from "./clear-status-param";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Tell SamolTech Consult about your project and get a free quote within one business day. Reach our Ibadan office by phone, email, or the contact form.",
	openGraph: {
		title: "Contact Us | SamolTech Consult",
		description:
			"Tell SamolTech Consult about your project and get a free quote within one business day. Reach our Ibadan office by phone, email, or the contact form.",
		url: "https://samoltechconsult.name.ng/contact",
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
		title: "Contact Us | SamolTech Consult",
		description:
			"Tell SamolTech Consult about your project and get a free quote within one business day. Reach our Ibadan office by phone, email, or the contact form.",
		images: ["/image/logo.jpeg"],
		creator: "@abiodun_sam_",
	},
};

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ success?: string; error?: string }>;
}) {
	const { success, error } = await searchParams;

	return (
		<main className="flex-1">
			<div className="container mx-auto px-4 py-16 sm:py-24">
				{/* Page Heading  */}
				<div className="text-center mb-16">
					<p className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#111318] dark:text-white sm:text-5xl md:text-6xl">
						Let&apos;s Grow Your Business Together
					</p>
					<p className="text-gray-500 dark:text-gray-400 text-lg font-normal leading-normal mt-4 max-w-2xl mx-auto">
						Tell us about your project and we&apos;ll reply within one business day with next steps —
						no sales pressure, just a clear plan to move forward.
					</p>
				</div>
				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					{/* Left Column: Contact Info & Map */}
					<div className="flex flex-col gap-8">
						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
									<span className="material-symbols-outlined">location_on</span>
								</div>
								<div className="flex flex-col justify-center">
									<p className="text-base font-bold text-[#111318] dark:text-white">Our Office</p>
									<p className="text-gray-500 dark:text-gray-400 text-sm">9 Joy Close, Oke-Ibukun Estate Zone 2, Elebu, off Alaka-Express Rd, Ibadan, NG. </p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
									<span className="material-symbols-outlined">mail</span>
								</div>
								<div className="flex flex-col justify-center">
									<p className="text-base font-bold text-[#111318] dark:text-white">Email Us</p>
									<a href="mailto:contact@samoltechconsult.com" className="text-gray-500 dark:text-gray-400 text-sm">contact@SamolTechConsult.com</a>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
									<span className="material-symbols-outlined">call</span>
								</div>
								<div className="flex flex-col justify-center">
									<p className="text-base font-bold text-[#111318] dark:text-white">Call Us</p>
									<a href="tel:+2348139723521" className="text-gray-500 dark:text-gray-400 text-sm">(234) 813 9723 521</a>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
									<span className="material-symbols-outlined">schedule</span>
								</div>
								<div className="flex flex-col justify-center">
									<p className="text-base font-bold text-[#111318] dark:text-white">Business Hours</p>
									<p className="text-gray-500 dark:text-gray-400 text-sm">Monday - Friday: 9:00 AM - 5:00 PM GMT+1</p>
								</div>
							</div>
						</div>
						<div className="aspect-video w-full overflow-hidden rounded-lg">

							<iframe
								allowFullScreen={false}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.823437893369!2d3.8367!3d7.3775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103c8f8c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2s9%20Joy%20Close%2C%20Oke-Ibukun%20Estate%20Zone%202%2C%20Elebu%2C%20Ibadan%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
								className="h-full w-full"
							/>

						</div>
					</div>
					{/* Right Column: Contact Form */}
					<div className="bg-white dark:bg-gray-900 p-8 sm:p-10 rounded-lg shadow-sm">
						{(success || error) && <ClearStatusParam />}
						{success ? (
							<p className="mb-6 rounded-md bg-green-50 dark:bg-green-950 px-4 py-3 text-sm text-green-700 dark:text-green-300">
								Thanks — your message is in. We&apos;ll reply within one business day.
							</p>
						) : error ? (
							<p className="mb-6 rounded-md bg-red-50 dark:bg-red-950 px-4 py-3 text-sm text-red-700 dark:text-red-300">
								{error === "captcha"
									? "We couldn't verify you're human. Please try the form again."
									: "Something went wrong. Please check your details and try again."}
							</p>
						) : null}
						<Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
						<form action={createContactSubmission} className="space-y-6">
							<div>
								<label className="block text-sm font-medium text-[#111318] dark:text-white" htmlFor="full-name">Full Name</label>
								<div className="mt-2">
									<input
										autoComplete="name"
										className="block w-full rounded-md border-0 py-2.5 bg-background-light dark:bg-background-dark text-[#111318] dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
										id="full-name"
										name="full-name"
										placeholder="John Doe"
										required
										type="text"
									/>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-[#111318] dark:text-white" htmlFor="email">Email Address</label>
								<div className="mt-2">
									<input
										autoComplete="email"
										className="block w-full rounded-md border-0 py-2.5 bg-background-light dark:bg-background-dark text-[#111318] dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
										id="email"
										name="email"
										placeholder="you@example.com"
										required
										type="email"
									/>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-[#111318] dark:text-white" htmlFor="phone">Phone Number</label>
								<div className="mt-2">
									<input
										autoComplete="tel"
										className="block w-full rounded-md border-0 py-2.5 bg-background-light dark:bg-background-dark text-[#111318] dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
										id="phone"
										name="phone"
										placeholder="(555) 000-0000"
										type="tel"
									/>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-[#111318] dark:text-white" htmlFor="inquiry-type">Inquiry Type</label>
								<div className="mt-2">
									<select
										className="block w-full rounded-md border-0 py-2.5 bg-background-light dark:bg-background-dark text-[#111318] dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
										id="inquiry-type"
										name="inquiry-type"
									>
										<option>Website Development</option>
										<option>Mobile App Development</option>
										<option>Cloud &amp; DevOps</option>
										<option>Cybersecurity</option>
										<option>IT Consultancy</option>
										<option>General Inquiry</option>
									</select>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-[#111318] dark:text-white" htmlFor="message">Message</label>
								<div className="mt-2">
									<textarea
										className="block w-full rounded-md border-0 py-2.5 bg-background-light dark:bg-background-dark text-[#111318] dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
										id="message"
										name="message"
										placeholder="How can we help you?"
										required
										rows={4}
									></textarea>
								</div>
							</div>
							<div className="flex items-center gap-x-3">
								<input
									className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
									id="privacy-policy"
									name="privacy-policy"
									type="checkbox"
								/>
								<label className="block text-sm leading-6 text-gray-500 dark:text-gray-400" htmlFor="privacy-policy"
								>I agree to the <a className="font-semibold text-primary" href="#">Privacy Policy</a>.</label
								>
							</div>
							<div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} data-theme="auto"></div>
							<div>
								<button
									className="flex w-full justify-center rounded-full bg-primary px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity"
									type="submit"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
};