import type { Metadata } from "next";
import { Play, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const play = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Shajid Nursing School Portal",
    template: "%s | Shajid Nursing School",
  },
  description:
    "Shajid Nursing School Portal for prospective, new, and returning students.",
  keywords: [
    "Shajid Nursing School",
    "Nursing School",
    "Nursing Admission",
    "Student Portal",
    "Nursing Education",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${play.variable} ${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}