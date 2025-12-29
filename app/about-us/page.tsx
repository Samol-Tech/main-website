import Link from "next/link";

export default function About() {
	return (
		<main className="flex-grow">
			{/*HeroSection */}
			<section className="relative">
				<div className="absolute inset-0 bg-background-dark opacity-50"></div>
				<div
					className="min-h-[480px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
					style=
					{{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDdhLRbduEs2jtf4oRIzXiApA1GcywCa-eyJxUv43LacUH8HYmsQuMBaoIqz1dMdS72bZshwB5wPHtHN0XTWBa79esBp9NHgizJEvomiHPlBsAjUXQqB4jqby5VLhNIqe0GVhiw_MS5_pz78pCTF_D9NKh0dTsgL3sgWYjaaX16GEgigREknrTyC3PmygOoMe9F482yx-mkjnE1HHb_Crjqi7VvfCBs6mUUD1Ef8ORWpx77oGqFRBpZYPTYvxQeP2GOvHn9quU_p-Uc);" }}
				>
					<div className="relative max-w-4xl mx-auto text-center px-4 py-16 sm:py-20 lg:py-24">
						<h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
							Driving Innovation, Building Futures
						</h1>
						<p className="mt-4 text-white/90 text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">
							We are a team of passionate engineers and strategists dedicated to delivering cutting-edge software solutions that power
							your success.
						</p>
						<Link href="/service">
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
							From a small startup to a leading digital solutions provider, our journey has been one of passion, innovation, and
							unwavering commitment to our clients.
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
									Founded with a vision to revolutionize the digital landscape, DevSolutions began its journey in a small garage, fueled
									by coffee and code.
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
									Launched our first enterprise-level application, winning accolades for its innovative design and robust performance,
									marking our arrival on the tech scene.
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
									Opened our first international office, expanding our reach and ability to serve a global client base with diverse needs.
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
									Continuing to push the boundaries of technology, exploring AI, and helping businesses thrive in the digital-first world.
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
							The principles that guide our every decision and define our character.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<span className="material-symbols-outlined text-2xl text-primary">emoji_objects</span>
							</div>
							<h3 className="mt-5 text-lg font-medium text-[#111318] dark:text-white">Innovation</h3>
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
								We constantly explore new technologies and ideas to deliver forward-thinking solutions.
							</p>
						</div>
						<div className="text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<span className="material-symbols-outlined text-2xl text-primary">shield</span>
							</div>
							<h3 className="mt-5 text-lg font-medium text-[#111318] dark:text-white">Integrity</h3>
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
								We believe in transparent, honest, and ethical practices in all our engagements.
							</p>
						</div>
						<div className="text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<span className="material-symbols-outlined text-2xl text-primary">handshake</span>
							</div>
							<h3 className="mt-5 text-lg font-medium text-[#111318] dark:text-white">Partnership</h3>
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
								Your success is our success. We work collaboratively to achieve shared goals.
							</p>
						</div>
						<div className="text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<span className="material-symbols-outlined text-2xl text-primary">verified</span>
							</div>
							<h3 className="mt-5 text-lg font-medium text-[#111318] dark:text-white">Excellence</h3>
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
								We are committed to the highest standards of quality in Services and services.
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
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to build your next big idea?</h2>
					<p className="mt-4 text-lg leading-8 text-white/80">
						Let&apros;s collaborate to turn your vision into a reality. We&apros;re here to help you succeed.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link href="/contact">
							<button
								className="min-w-[84px] cursor-pointer rounded-lg bg-white h-12 px-5 text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors"
							>
								<span className="truncate">Work With Us</span>
							</button>
						</Link>
						<Link className="text-base font-semibold leading-6 text-white" href="#">Learn more <span aria-hidden="true">→</span></Link>
					</div>
				</div>
			</section>

			<footer className="w-full bg-[#1A202C] text-[#F4F4F4] bg-cover" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 1) 100%),  url('/image/footer-bg.jpg');" }}>
				<div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
					<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
						<div className="flex flex-col gap-6">
							<Link className="flex items-center gap-2 text-2xl font-bold text-white" href="/">
								<span className="material-symbols-outlined text-primary text-3xl"> hub </span>
								<span>SamolTech&nbsp;Consult</span>
							</Link>
							<p className="text-sm text-[#A0AEC0]">
								Engineering digital solutions that drive growth and innovation for businesses worldwide.
							</p>
							<div className="flex flex-col gap-4 text-sm text-[#A0AEC0]">
								<div className="flex items-start gap-3">
									<span className="material-symbols-outlined text-primary/80 mt-0.5">location_on</span>
									<span>123 Innovation Drive<br />Tech City, TX 75001</span>
								</div>
								<div className="flex items-center gap-3">
									<span className="material-symbols-outlined text-primary/80">call</span>
									<span>(123) 456-7890</span>
								</div>
								<div className="flex items-center gap-3">
									<span className="material-symbols-outlined text-primary/80">mail</span>
									<span>contact@SamolTech&nbsp;Consult.com</span>
								</div>
							</div>
						</div>
						<div>
							<h3 className="mb-6 text-base font-semibold text-white">Company</h3>
							<ul className="space-y-4">
								<li><Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="/about-us.html">About Us</Link></li>
								<li><Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="/services.html">Services</Link></li>
								<li><Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="/blog.html">Blog</Link></li>
								<li><Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="/contact.html">Contact Us</Link></li>
								<li><Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">Careers</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="mb-6 text-base font-semibold text-white">Our Services</h3>
							<ul className="space-y-4">
								<li><Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">Website Development</Link></li>
								<li><Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">Mobile App Development</Link></li>
								<li><Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">Cloud &amp; DevOps</Link></li>
								<li><Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">Cybersecurity</Link></li>
								<li><Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">IT Consultancy</Link></li>
							</ul>
						</div>
						<div className="flex flex-col gap-6">
							<h3 className="text-base font-semibold text-white">Join Our Newsletter</h3>
							<p className="text-sm text-[#A0AEC0]">Get the latest news, articles, and resources, sent to your inbox weekly.</p>
							<form className="flex w-full flex-col items-center gap-2 sm:flex-row">
								<label className="sr-only" htmlFor="email-address">Email address</label>
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
											<path
												d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
											></path>
										</svg>
									</Link>
									<Link aria-label="Twitter" className="text-[#A0AEC0] transition-colors hover:text-white" href="#">
										<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.21 0-.42-.015-.63.961-.689 1.799-1.56 2.46-2.548l-.002-.001z"
											></path>
										</svg>
									</Link>
									<Link aria-label="GitHub" className="text-[#A0AEC0] transition-colors hover:text-white" href="#">
										<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
											<path
												clipRule="evenodd"
												d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .267.18.577.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
												fill-rule="evenodd"
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
							<Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">Privacy Policy</Link>
							<Link className="text-sm text-[#A0AEC0] transition-colors hover:text-white" href="#">Terms of Service</Link>
						</div>
					</div>
				</div>
			</footer>
		</main>
	);
};