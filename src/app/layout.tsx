import "./globals.css";
// deactivated for now
//import { GoogleAnalytics } from "@next/third-parties/google";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import { DM_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="bg-[#070815] text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
      {/* {process.env.GOOGLE_ANALYTICS &&
        process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS}/>
        )} */}
    </html>
  );
}
