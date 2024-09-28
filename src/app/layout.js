import './globals.css';
export const metadata = {
  title: 'slip',
  description: 'a blog web app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
