import { Inter, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { IMAGES } from "@/data/siteData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Sing Real Estate Team | Metro Vancouver Real Estate",
  description:
    "Sing Real Estate Team — conscious real estate advisory in Metro Vancouver. Buy, sell, invest, and build legacy with Bel-Air Realty Group.",
  metadataBase: new URL("https://www.singrealestateteam.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sing Real Estate Team",
    description:
      "Real Estate. Legacy. Conscious Living. Top-producing team serving Metro Vancouver.",
    url: "https://www.singrealestateteam.ca/",
    images: [{ url: IMAGES.og }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Sing Real Estate Team",
  url: "https://www.singrealestateteam.ca",
  image: IMAGES.og,
  telephone: "+1-604-808-3783",
  email: "teamsing@belairrealty.ca",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2621 East Hastings Street",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    postalCode: "V5K 1Z5",
    addressCountry: "CA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
