

import './globals.css'
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Izdihar - Shopify Challenge',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1><FontAwesomeIcon icon={faShoppingCart} />The Shoppies</h1>
        </header >
        <div>{children}</div>
        </body>
    </html>
  )
}
