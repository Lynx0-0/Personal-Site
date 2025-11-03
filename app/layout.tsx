import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Servizi Digitali PMI | Siti Web, Gestionali e App su Misura',
  description: 'Aiuto PMI a incrementare i guadagni e automatizzare le attività ripetitive con siti web, gestionali e app su misura. Consulenza gratuita disponibile.',
  keywords: ['servizi digitali', 'siti web', 'gestionali', 'app personalizzate', 'PMI', 'automazione'],
  authors: [{ name: 'Il Tuo Nome' }],
  openGraph: {
    title: 'Servizi Digitali PMI',
    description: 'Trasformo la tua attività in un business digitale che lavora per te 24/7',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
