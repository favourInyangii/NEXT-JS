import '../styles/globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio website built with Next.js 13',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
