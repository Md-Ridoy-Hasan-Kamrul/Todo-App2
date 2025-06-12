import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/globals.css';
import { ReduxProvider } from './store/provider';

// Initialize the Inter font, specifying the 'latin' subset for optimization.
const inter = Inter({ subsets: ['latin'] });

// Define the website's metadata for SEO and browser tab information.
export const metadata: Metadata = {
  title: 'My To-Do App',
  description:
    'A simple to-do app built with Next.js, Tailwind, Redux, and LocalStorage',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
