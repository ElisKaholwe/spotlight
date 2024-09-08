import Header from '@/components/Header';
import './globals.css';
import Footer from './(site-routes)/footer/page';
export const metadata = {
  title: 'sp⌬tlight',
  description: 'A Web App by bugverseIO',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
