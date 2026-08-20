"use client";

import { useEffect } from "react";

// The success/error banner on this page is driven by a ?success=1 or
// ?error=... query param set by the Server Action's redirect. Once it's
// been shown, strip the param from the address bar (URL only, no
// navigation/re-render) so a page refresh, or the browser's back/forward
// button, doesn't resurrect a stale banner from a past submission.
export function ClearStatusParam() {
	useEffect(() => {
		const url = new URL(window.location.href);
		if (url.searchParams.has("success") || url.searchParams.has("error")) {
			url.searchParams.delete("success");
			url.searchParams.delete("error");
			window.history.replaceState({}, "", url.pathname + url.search);
		}
	}, []);

	return null;
}
