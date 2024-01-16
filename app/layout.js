import { Inter } from 'next/font/google'
import './globals.css'
import MainHeader from '@/components/main-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Valeria Del Real',
  description: 'Iniciando pagina web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <MainHeader />
        {children}
        </body>
    </html>
  )
}
