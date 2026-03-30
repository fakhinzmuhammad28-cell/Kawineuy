import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LangProvider, LocalizationProvider } from "@/locales";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

// =============================
// 🔥 OG CONFIG UTAMA (Tetap ada)
// =============================
export const metadata: Metadata = {
  metadataBase: new URL("https://kawineuy.vercel.app"),

  title: "The Wedding of Annida & Alif",
  description:
    "Join us in celebrating the union of Annida & Alif. Discover our love story, wedding details, and more.",

  openGraph: {
    title: "The Wedding of Annida & Alif",
    description:
      "Dengan segala hormat, kami mengundang Anda untuk hadir pada pernikahan kami dalam keberkahan Allah SWT ﷻ",
    url: "https://kawineuy.vercel.app",
    siteName: "Wedding Invitation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "id_ID",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Wedding of Annida & Alif",
    description:
      "Dengan segala hormat, kami mengundang Anda untuk hadir pada hari bahagia kami.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/*
        ===================================================
        🔥 BACKUP META AGAR WHATSAPP 100% BACA OG IMAGE
        (WA TIDAK MENGERTI metadata Next.js!)
        ===================================================
        */}
        <meta property="og:title" content="The Wedding of Annida & Alif" />
        <meta
          property="og:description"
          content="Kami mengundang Anda ke hari bahagia kami"
        />
        <meta
          property="og:image"
          content="https://kawineuy.vercel.app/og-image.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://kawineuy.vercel.app/og-image.png"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kawineuy.vercel.app" />

        {/* favicon */}
        <link rel="icon" href="/favicon.svg" />
      </head>

      <body className={`${poppins.variable} antialiased`}>
        <LangProvider>
          <LocalizationProvider>
            {children}
            <Toaster />
          </LocalizationProvider>
        </LangProvider>

        {/* Title Marquee */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const title = "The Wedding of Annida & Alif • ";
              let i = 0;
              setInterval(() => {
                document.title = title.substring(i) + title.substring(0, i);
                i = (i + 1) % title.length;
              }, 200);
            `,
          }}
        />
      </body>
    </html>
  );
}