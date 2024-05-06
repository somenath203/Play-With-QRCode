import { Inter as FontSans } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'PlayWithQRCode',
  description: 'This is an app that lets you generate as well as scan qr code',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
        <script src="https://kit.fontawesome.com/1b20c7f767.js" crossOrigin="anonymous"></script>
        <Toaster />
      </body>
    </html>
  );
}
