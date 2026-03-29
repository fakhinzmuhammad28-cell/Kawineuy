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