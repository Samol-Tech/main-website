
export default function Page() {
	return (
		<main className="flex-1">
			<div className="container mx-auto px-4 py-16 sm:py-24">
				{/* Page Heading  */}
				<div className="text-center mb-16">
					<p className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark sm:text-5xl md:text-6xl">
						Get in Touch
					</p>
					<p className="text-text-muted-light dark:text-text-muted-dark text-lg font-normal leading-normal mt-4 max-w-2xl mx-auto">
						We&apros;d love to hear from you. Reach out htmlFor a consultation, a project quote, or any questions you may have.
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
									<p className="text-base font-bold text-text-light dark:text-text-dark">Our Office</p>
									<p className="text-text-muted-light dark:text-text-muted-dark text-sm">9 Joy Close, Oke-Ibukun Estate Zone 2, Elebu, off Alaka-Express Rd, Ibadan, NG. </p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
									<span className="material-symbols-outlined">mail</span>
								</div>
								<div className="flex flex-col justify-center">
									<p className="text-base font-bold text-text-light dark:text-text-dark">Email Us</p>
									<a href="mailto:contact@samoltechconsult.com" className="text-text-muted-light dark:text-text-muted-dark text-sm">contact@SamolTechConsult.com</a>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
									<span className="material-symbols-outlined">call</span>
								</div>
								<div className="flex flex-col justify-center">
									<p className="text-base font-bold text-text-light dark:text-text-dark">Call Us</p>
									<a href="tel:+2348139723521" className="text-text-muted-light dark:text-text-muted-dark text-sm">(234) 813 9723 521</a>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
									<span className="material-symbols-outlined">schedule</span>
								</div>
								<div className="flex flex-col justify-center">
									<p className="text-base font-bold text-text-light dark:text-text-dark">Business Hours</p>
									<p className="text-text-muted-light dark:text-text-muted-dark text-sm">Monday - Friday: 9:00 AM - 5:00 PM GMT+1</p>
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
					{/* Right Column: Contact htmlForm */}
					<div className="bg-htmlForeground-light dark:bg-htmlForeground-dark p-8 sm:p-10 rounded-lg shadow-sm">
						<form action="#" className="space-y-6" method="POST">
							<div>
								<label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="full-name">Full Name</label>
								<div className="mt-2">
									<input
										autoComplete="name"
										className="block w-full rounded-md border-0 py-2.5 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark shadow-sm ring-1 ring-inset ring-border-light dark:ring-border-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:ring-2 focus:ring-inset focus:ring-primary-light sm:text-sm sm:leading-6"
										id="full-name"
										name="full-name"
										placeholder="John Doe"
										type="text"
									/>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="email">Email Address</label>
								<div className="mt-2">
									<input
										autoComplete="email"
										className="block w-full rounded-md border-0 py-2.5 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark shadow-sm ring-1 ring-inset ring-border-light dark:ring-border-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:ring-2 focus:ring-inset focus:ring-primary-light sm:text-sm sm:leading-6"
										id="email"
										name="email"
										placeholder="you@example.com"
										type="email"
									/>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="phone">Phone Number</label>
								<div className="mt-2">
									<input
										autoComplete="tel"
										className="block w-full rounded-md border-0 py-2.5 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark shadow-sm ring-1 ring-inset ring-border-light dark:ring-border-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:ring-2 focus:ring-inset focus:ring-primary-light sm:text-sm sm:leading-6"
										id="phone"
										name="phone"
										placeholder="(555) 000-0000"
										type="tel"
									/>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="inquiry-type">Inquiry Type</label>
								<div className="mt-2">
									<select
										className="block w-full rounded-md border-0 py-2.5 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark shadow-sm ring-1 ring-inset ring-border-light dark:ring-border-dark focus:ring-2 focus:ring-inset focus:ring-primary-light sm:text-sm sm:leading-6"
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
								<label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="message">Message</label>
								<div className="mt-2">
									<textarea
										className="block w-full rounded-md border-0 py-2.5 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark shadow-sm ring-1 ring-inset ring-border-light dark:ring-border-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:ring-2 focus:ring-inset focus:ring-primary-light sm:text-sm sm:leading-6"
										id="message"
										name="message"
										placeholder="How can we help you?"
										rows={4}
									></textarea>
								</div>
							</div>
							<div className="flex items-center gap-x-3">
								<input
									className="h-4 w-4 rounded border-gray-300 text-primary-light focus:ring-primary-light"
									id="privacy-policy"
									name="privacy-policy"
									type="checkbox"
								/>
								<label className="block text-sm leading-6 text-text-muted-light dark:text-text-muted-dark" htmlFor="privacy-policy"
								>I agree to the <a className="font-semibold text-primary-light" href="#">Privacy Policy</a>.</label
								>
							</div>
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