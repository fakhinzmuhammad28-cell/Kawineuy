import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { LangProvider, LocalizationProvider } from '@/locales';
import { Toaster } from 'sonner';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kawineuy.vercel.app'), // 🔥 WAJIB

  title: 'The Wedding of Annida & Alif',
  description:
    'Join us in celebrating the union of Annida and Alif. Discover our love story, wedding details, and more.',

  openGraph: {
    title: 'The Wedding of Annida & Alif',
    description:
      'Dengan segala hormat, kami mengundang Anda untuk hadir pada pernikahan kami dalam keberkahan Allah SWT ﷻ',
    url: 'https://kawineuy.vercel.app',
    siteName: 'Wedding Invitation',
    images: [
      {
        url: '/og-image.jpg', // 🔥 cukup relative karena sudah pakai metadataBase
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'The Wedding of Annida & Alif',
    description:
      'Dengan segala hormat, kami mengundang Anda untuk hadir pada pernikahan kami dalam keberkahan Allah SWT ﷻ',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 BACKUP META (ANTI GAGAL TOTAL) */}
        <meta property="og:title" content="The Wedding of Annida & Alif" />
        <meta property="og:description" content="Kami mengundang Anda ke hari bahagia kami" />
        <meta property="og:image" content="https://kawineuy.vercel.app/og-image.jpg" />
        <meta property="og:url" content="https://kawineuy.vercel.app" />
        <meta property="og:type" content="website" />
      </head>

      <body className={`${poppins.variable} antialiased`}>
        <LangProvider>
          <LocalizationProvider>
            {children}
            <Toaster />
          </LocalizationProvider>
        </LangProvider>

        {/* SCRIPT MARQUEE (TIDAK DIUBAH) */}
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