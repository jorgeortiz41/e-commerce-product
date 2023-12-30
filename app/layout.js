import { Inter, Azeret_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const azeret = Azeret_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Sneakers',
  description: 'Example e-commerce product page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={azeret.className}>{children}</body>
    </html>
  )
}
