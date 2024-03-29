import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import 'boxicons/css/boxicons.min.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'my-blog-app',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1536px] m-auto ">
          <Navbar />
          <div className="w-11/12 m-auto min-h-screen">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
