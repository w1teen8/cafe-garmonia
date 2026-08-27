import SmoothScroll from "./SmoothScroll";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
      >
        Перейти до вмісту
      </a>
      <Header />
      <main id="home">{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
