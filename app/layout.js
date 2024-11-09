


import './globals.css'

import { Roboto, Urbanist } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const urbanist = Urbanist({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${roboto.className} bg-[#181818]`}>
  {children}
</body>

    </html>
  );
}
