import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 301 redirects: old tphorient.com .php URLs → new clean paths */
  async redirects() {
    return [
      // About pages
      { source: "/about-us.php", destination: "/about", permanent: true },
      { source: "/our-legacy.php", destination: "/about#legacy", permanent: true },
      { source: "/our-infrastructure.php", destination: "/about#infrastructure", permanent: true },
      { source: "/our-patrons.php", destination: "/about#patrons", permanent: true },
      { source: "/suppliers-hub.php", destination: "/about#suppliers", permanent: true },
      { source: "/our-team.php", destination: "/about#team", permanent: true },

      // Product index
      { source: "/product.php", destination: "/products", permanent: true },

      // Offset presses
      { source: "/orient-standard.php", destination: "/products", permanent: true },
      { source: "/orient-super.php", destination: "/products/orient-super", permanent: true },
      { source: "/orient-x-cel.php", destination: "/products/orient-x-cel", permanent: true },
      { source: "/orient-xpress.php", destination: "/products/orient-x-press", permanent: true },
      { source: "/orient-xlc.php", destination: "/products/orient-xlc", permanent: true },
      { source: "/folder.php", destination: "/products/folders", permanent: true },

      // Flexo presses
      { source: "/orient-x-press-flex-asr-370.php", destination: "/products/x-press-flex-narrow", permanent: true },
      { source: "/orient-x-press-flex-asr-650.php", destination: "/products/x-press-flex-mid", permanent: true },
      { source: "/orient-x-press-flex-asr-1000.php", destination: "/products/x-press-flex-wide", permanent: true },

      // Packaging & converting
      { source: "/folder-gluer-machine.php", destination: "/products/folders", permanent: true },
      { source: "/die-cutting-machine.php", destination: "/products", permanent: true },

      // Inkjet
      { source: "/inkjet-digital-printing-machine.php", destination: "/products/orient-jet-c", permanent: true },
      { source: "/orient-jet-l-and-p-series-printing-machine.php", destination: "/products/orient-jet-lp", permanent: true },

      // Services
      { source: "/spare-parts.php", destination: "/services/spare-parts", permanent: true },
      { source: "/amc-servicing.php", destination: "/services/amc", permanent: true },
      { source: "/financial-services.php", destination: "/contact", permanent: true },

      // Other pages
      { source: "/news-and-events.php", destination: "/news", permanent: true },
      { source: "/download.php", destination: "/downloads", permanent: true },
      { source: "/contact.php", destination: "/contact", permanent: true },
      { source: "/careers.php", destination: "/careers", permanent: true },

      // SEO landing pages → products
      { source: "/web-offset-printing-machine-press.php", destination: "/products", permanent: true },
      { source: "/book-printing-machine-press.php", destination: "/products", permanent: true },
      { source: "/offset-printing-machine.php", destination: "/products", permanent: true },
      { source: "/newspaper-printing-machine-press.php", destination: "/products", permanent: true },

      // Enquiry forms → contact
      { source: "/new-press-enquiry.php", destination: "/contact", permanent: true },
      { source: "/existing-press-enquiry.php", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
