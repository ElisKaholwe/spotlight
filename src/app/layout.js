import './globals.css';
import localFont from 'next/font/local';
import { Inter } from '@next/font/google';

// FONTS AND FONT-OPTIMIZATION
// @primary font-family (headings and titles)
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});

// @secondary font-family (paragraphs and spans)
const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'slip',
  description: 'a blog web app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${inter.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
