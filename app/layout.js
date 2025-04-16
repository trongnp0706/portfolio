import { Inter } from 'next/font/google';
import '../src/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Portfolio | Professional Developer',
  description: 'Personal portfolio showcasing skills, projects, and experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
} 