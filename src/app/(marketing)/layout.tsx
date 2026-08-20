import { Header } from "./header";
import { Footer } from "./footer";
import { CookieConsent } from "./cookie-consent";

// Chrome (Header/Footer) shared by every public marketing route. Split out of
// the root layout so /admin can render without it — see src/app/layout.tsx.
export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        {children}
        <Footer />
      </div>
      {/* Only loads/tracks on the public site — /admin has its own layout
          and isn't wrapped by this one, so it's never tracked. */}
      <CookieConsent />
    </div>
  );
}
