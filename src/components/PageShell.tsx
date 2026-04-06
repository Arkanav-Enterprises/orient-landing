import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      {/* Page header */}
      <section style={{ paddingTop: 80 + 60, paddingBottom: 80 }}>
        <div className="container-site">
          <h1
            className="font-medium leading-[1.05] text-white mb-4"
            style={{ fontSize: "clamp(36px, 4vw, 60px)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-[18px] font-medium text-white/50 leading-[1.4]" style={{ maxWidth: 600 }}>
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Page content */}
      <section style={{ paddingBottom: 120 }}>
        <div className="container-site">{children}</div>
      </section>

      <Footer />
    </main>
  );
}
