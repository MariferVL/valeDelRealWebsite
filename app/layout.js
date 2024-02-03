// import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'



export const metadata = {
  title: 'Valeria Del Real',
  description: 'Iniciando pagina web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='bg-translucid'>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
