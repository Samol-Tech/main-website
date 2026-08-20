"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";

type ConsentState = "pending" | "accepted" | "declined";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const STORAGE_KEY = "cookie-consent";
const CHANGE_EVENT = "cookie-consent-changed";

function isConsentValue(value: string | null): value is "accepted" | "declined" {
	return value === "accepted" || value === "declined";
}

// localStorage is external, mutable state — useSyncExternalStore is the
// React-recommended way to read it, rather than useState+useEffect (which
// forces an extra render and can't correctly report the server snapshot).
function subscribe(callback: () => void) {
	window.addEventListener(CHANGE_EVENT, callback);
	return () => window.removeEventListener(CHANGE_EVENT, callback);
}

function getSnapshot(): ConsentState {
	const stored = window.localStorage.getItem(STORAGE_KEY);
	return isConsentValue(stored) ? stored : "pending";
}

function getServerSnapshot(): ConsentState {
	return "pending";
}

// Google Analytics only starts loading once a visitor accepts — GA sets
// cookies, so firing it unconditionally would need consent we don't have
// yet. The choice is remembered in localStorage so the banner only shows
// once per browser.
export function CookieConsent() {
	const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

	function respond(value: "accepted" | "declined") {
		window.localStorage.setItem(STORAGE_KEY, value);
		window.dispatchEvent(new Event(CHANGE_EVENT));
	}

	if (!GA_MEASUREMENT_ID) return null;

	return (
		<>
			{consent === "accepted" && (
				<>
					<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
					<Script id="ga-init" strategy="afterInteractive">
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${GA_MEASUREMENT_ID}');
						`}
					</Script>
				</>
			)}
			{consent === "pending" && (
				<div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 px-4 py-4 backdrop-blur dark:border-gray-800 dark:bg-gray-900/95 sm:px-6">
					<div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
						<p className="text-sm text-gray-600 dark:text-gray-400">
							We use cookies to understand how visitors use this site via Google Analytics. No personal data is sold or shared.
						</p>
						<div className="flex shrink-0 gap-3">
							<button
								onClick={() => respond("declined")}
								className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
							>
								Decline
							</button>
							<button
								onClick={() => respond("accepted")}
								className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
							>
								Accept
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
