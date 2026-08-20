"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export function Header() {
	useEffect(() => {
		const menu = document.getElementById("menu-items");
		const menuBtn = document.getElementById("menu-button");
		menuBtn?.addEventListener("click", function () {
			menu?.classList.toggle("menu-close");
			// menu.classList.toggle("menu-items");
		});

		// Desktop and mobile each render their own toggle button, so wire up every
		// instance found on the page rather than assuming there's only one.
		const themeToggles = document.querySelectorAll<HTMLButtonElement>(".theme-toggle");
		const themeIcons = document.querySelectorAll<HTMLElement>(".theme-icon");
		const syncThemeIcons = () => {
			const isDark = document.documentElement.classList.contains("dark");
			themeIcons.forEach((icon) => {
				icon.textContent = isDark ? "light_mode" : "dark_mode";
			});
		};
		syncThemeIcons(); // Match whatever the anti-FOUC script in layout.tsx already set
		themeToggles.forEach((toggle) => {
			toggle.addEventListener("click", () => {
				const isDark = document.documentElement.classList.toggle("dark");
				localStorage.setItem("theme", isDark ? "dark" : "light");
				syncThemeIcons();
			});
		});
	}, []);
	return (
		<header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 py-3"
				>
					<Link href="/">
						<div className="flex items-center gap-4 text-primary">
							<div className="size-8">
								<Image src="/image/logo.jpeg" alt="SamolTech Consult Logo"
									width={120}
									height={120}
								/>
							</div>
							<h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">SamolTech Consult</h2>
						</div>
					</Link>
					<div className="md:flex justify-end gap-6">
						<button
							aria-label="Toggle dark mode"
							className="theme-toggle hidden md:flex items-center justify-center rounded-lg p-2 text-[#111318] hover:bg-gray-200/60 dark:text-white dark:hover:bg-gray-800 transition-colors"
						>
							<span className="theme-icon material-symbols-outlined">dark_mode</span>
						</button>
						<nav id="menu-items" className="menu-close md:flex justify-end gap-8">

							<div className="flex items-center gap-9">
								<Link
									className="text-[#111318] dark:text-gray-200 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
									href="/services"
								>Services </Link>
								<Link
									className="text-[#111318] dark:text-gray-200 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
									href="/about-us"
								>About Us</Link>
								<Link
									className="text-[#111318] dark:text-gray-200 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
									href="/blog"
								>Blog</Link>
								<Link
									href="/contact"
									className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
								>
									<span className="truncate">Contact Us</span>
								</Link>
							</div>
						</nav>
					</div>
					<div className="md:hidden flex items-center gap-2">
						<button
							aria-label="Toggle dark mode"
							className="theme-toggle flex items-center justify-center rounded-lg p-2 text-[#111318] hover:bg-gray-200/60 dark:text-white dark:hover:bg-gray-800 transition-colors"
						>
							<span className="theme-icon material-symbols-outlined">dark_mode</span>
						</button>
						<div className="">
							<button id="menu-button" className="text-[#111318] dark:text-white">
								<span className="material-symbols-outlined">menu</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};