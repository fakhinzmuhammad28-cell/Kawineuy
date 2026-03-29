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
  title: 'The Wedding of Annida & Alif',
  description:
    'Join us in celebrating the union of Annida and Alif. Discover our love story, wedding details, and more.',

  openGraph: {
    title: 'The Wedding of Annida & Alif',
    description:
      'Dengan segala hormat, kami mengundang Anda ke hari bahagia kami',
    url: 'https://bit.ly/Karawineuy',
    siteName: 'Wedding Invitation',
    images: [
      {
        url: '/assets/images/og-image.jpg', // 🔥 gambar preview
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
    description: 'Kami mengundang Anda ke hari bahagia kami',
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
      <body className={`${poppins.variable} antialiased`}>
        <LangProvider>
          <LocalizationProvider>
            {children}
            <Toaster />
          </LocalizationProvider>
        </LangProvider>

        {/* ⬇⬇⬇ SCRIPT MARQUEE TITLE TANPA MENGUBAH KODE ASLI ⬇⬇⬇ */}
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
        {/* ⬆⬆⬆ SCRIPT MARQUEE TITLE ⬆⬆⬆ */}

      </body>
    </html>
  );
}