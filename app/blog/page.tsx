
export default function Blog() {
	return (
		<main className="flex-1 max-w-[960px] mx-auto">
			{/* PageHeading */}
			<div className="flex flex-wrap justify-between gap-3 p-4 pt-12 text-center md:text-left">
				<div className="flex w-full flex-col gap-3">
					<p className="text-[#111318] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Insights &amp; Articles</p>
					<p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal">
						Explore the latest in tech, from web development to cybersecurity.
					</p>
				</div>
			</div>
			{/* SearchBar and Chips */}
			<div className="px-4 py-3 flex flex-col md:flex-row gap-4 items-center">
				<div className="w-full md:flex-1">
					<label className="flex flex-col min-w-40 h-12 w-full">
						<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
							<div
								className="text-[#616f89] dark:text-gray-400 flex border-none bg-white dark:bg-background-dark/50 items-center justify-center pl-4 rounded-l-lg border-r-0"
							>
								<span className="material-symbols-outlined">search</span>
							</div>
							<input
								className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-background-dark/50 focus:border-none h-full placeholder:text-[#616f89] dark:placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
								placeholder="Search articles by keyword..."
								
							/>
						</div>
					</label>
				</div>
				<div className="flex gap-2 p-3 flex-wrap justify-center">
					<button
						className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary pl-4 pr-4 text-white hover:bg-primary/90 transition-colors"
					>
						<p className="text-sm font-medium leading-normal">All</p>
					</button>
					<button
						className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-background-dark/50 pl-4 pr-4 text-[#111318] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
					>
						<p className="text-sm font-medium leading-normal">Web Development</p>
					</button>
					<button
						className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-background-dark/50 pl-4 pr-4 text-[#111318] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
					>
						<p className="text-sm font-medium leading-normal">Mobile App</p>
					</button>
					<button
						className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-background-dark/50 pl-4 pr-4 text-[#111318] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
					>
						<p className="text-sm font-medium leading-normal">Cloud &amp; DevOps</p>
					</button>
				</div>
			</div>
			{/* Blog Post Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
				{/* Card 1 */}
				<div
					className="bg-white dark:bg-background-dark/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
				>
					<div
						className="w-full bg-center bg-no-repeat aspect-video bg-cover"
						data-alt="Abstract gradient representing headless CMS"
						style={{ backgroundImage: "url('/image/blog/linear-gray.png')" }}
					></div>
					<div className="p-6 flex flex-col gap-4">
						<p className="text-primary text-sm font-bold leading-normal">Web Development</p>
						<p className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
							The Future of Headless CMS in 2024
						</p>
						<p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal">
							Discover how headless architecture is revolutionizing content delivery and developer workflows across the web.
						</p>
						<div className="flex items-center justify-between mt-2">
							<p className="text-[#616f89] dark:text-gray-500 text-sm font-normal leading-normal">John Doe - Oct 26, 2023</p>
							<a
								className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90 transition-colors"
								href="#"
							>
								<span className="truncate">Read More</span>
							</a>
						</div>
					</div>
				</div>
				{/* Card 2 */}
				<div
					className="bg-white dark:bg-background-dark/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
				>
					<div
						className="w-full bg-center bg-no-repeat aspect-video bg-cover"
						data-alt="Stylized depiction of mobile app interface elements"
						style={{ backgroundImage: "url('/image/blog/smart-phone.png')" }}
					></div>
					<div className="p-6 flex flex-col gap-4">
						<p className="text-primary text-sm font-bold leading-normal">Mobile App</p>
						<p className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
							Cross-Platform Development: React Native vs. Flutter
						</p>
						<p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal">
							A deep dive into the pros and cons of the two leading frameworks for building beautiful, native-like mobile applications.
						</p>
						<div className="flex items-center justify-between mt-2">
							<p className="text-[#616f89] dark:text-gray-500 text-sm font-normal leading-normal">Jane Smith - Oct 22, 2023</p>
							<a
								className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90 transition-colors"
								href="#"
							>
								<span className="truncate">Read More</span>
							</a>
						</div>
					</div>
				</div>
				{/* Card 3 */}
				<div
					className="bg-white dark:bg-background-dark/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
				>
					<div
						className="w-full bg-center bg-no-repeat aspect-video bg-cover"
						data-alt="Server racks in a data center to illustrate cloud computing"
						style={{ backgroundImage: "url('/image/blog/server-rack.png')" }}
					></div>
					<div className="p-6 flex flex-col gap-4">
						<p className="text-primary text-sm font-bold leading-normal">Cloud &amp; DevOps</p>
						<p className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
							Automating Your Servicesflow with CI/CD Pipelines
						</p>
						<p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal">
							Learn how to implement continuous integration and delivery to streamline your development and deployment processes.
						</p>
						<div className="flex items-center justify-between mt-2">
							<p className="text-[#616f89] dark:text-gray-500 text-sm font-normal leading-normal">Alex Johnson - Oct 18, 2023</p>
							<a
								className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90 transition-colors"
								href="#"
							>
								<span className="truncate">Read More</span>
							</a>
						</div>
					</div>
				</div>
				{/* Card 4 */}
				<div
					className="bg-white dark:bg-background-dark/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
				>
					<div
						className="w-full bg-center bg-no-repeat aspect-video bg-cover"
						data-alt="Digital lock icon symbolizing cybersecurity"
						style={{ backgroundImage: "url('/image/blog/security.png')" }}
					></div>
					<div className="p-6 flex flex-col gap-4">
						<p className="text-primary text-sm font-bold leading-normal">Cybersecurity</p>
						<p className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
							Top 5 Security Threats to Watch Out For in 2024
						</p>
						<p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal">
							Stay ahead of the curve by understanding the most common and emerging threats to your digital infrastructure.
						</p>
						<div className="flex items-center justify-between mt-2">
							<p className="text-[#616f89] dark:text-gray-500 text-sm font-normal leading-normal">Sam Wilson - Oct 15, 2023</p>
							<a
								className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90 transition-colors"
								href="#"
							>
								<span className="truncate">Read More</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* Pagination */}
			<div className="flex justify-center p-4 pt-8">
				<nav className="flex items-center gap-2">
					<a
						className="flex h-10 w-10 items-center justify-center rounded-lg text-[#616f89] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
						href="#"
					>
						<span className="material-symbols-outlined text-xl">chevron_left</span>
					</a>
					<a className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white" href="#">1</a>
					<a
						className="flex h-10 w-10 items-center justify-center rounded-lg text-[#111318] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
						href="#"
					>2</a
					>
					<a
						className="flex h-10 w-10 items-center justify-center rounded-lg text-[#111318] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
						href="#"
					>3</a
					>
					<span className="flex h-10 w-10 items-center justify-center text-[#616f89] dark:text-gray-400">...</span>
					<a
						className="flex h-10 w-10 items-center justify-center rounded-lg text-[#111318] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
						href="#"
					>8</a
					>
					<a
						className="flex h-10 w-10 items-center justify-center rounded-lg text-[#616f89] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
						href="#"
					>
						<span className="material-symbols-outlined text-xl">chevron_right</span>
					</a>
				</nav>
			</div>
		</main>
	);
};