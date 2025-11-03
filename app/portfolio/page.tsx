import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Portfolio | Progetti Realizzati',
  description: 'Scopri i progetti che ho realizzato per PMI italiane: siti web, gestionali custom e app mobile.',
}

export default function PortfolioPage() {
  const projects = [
    {
      title: 'E-commerce Artigianato',
      category: 'Sito Web + Shop',
      description: 'Sito e-commerce completo per azienda artigianale con gestione magazzino e fatturazione automatica',
      results: '+150% vendite online in 6 mesi',
      tech: ['Next.js', 'Stripe', 'Supabase'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
    },
    {
      title: 'Gestionale Palestra',
      category: 'Gestionale Custom',
      description: 'Software gestionale per palestra con prenotazioni, pagamenti e gestione abbonamenti',
      results: '-70% tempo amministrativo',
      tech: ['Next.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop'
    },
    {
      title: 'App Ordini Ristorante',
      category: 'App Mobile',
      description: 'App iOS e Android per ordini da asporto e delivery con integrazione pagamenti',
      results: '+200% ordini digitali',
      tech: ['React Native', 'Firebase', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop'
    },
    {
      title: 'Sito Architetto',
      category: 'Sito Web Portfolio',
      description: 'Portfolio professionale per studio di architettura con galleria progetti 3D interattiva',
      results: '+300% richieste preventivo',
      tech: ['Next.js', 'Three.js', 'CMS'],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop'
    },
    {
      title: 'Gestionale Fatturazione',
      category: 'Gestionale Custom',
      description: 'Sistema completo per gestione clienti, progetti e fatturazione elettronica',
      results: '100% fatture automatizzate',
      tech: ['Next.js', 'Supabase', 'API Fatture'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop'
    },
    {
      title: 'Shop Stampa 3D',
      category: 'E-commerce + 3D',
      description: 'E-commerce con configuratore 3D per stampa on-demand di modelli personalizzati',
      results: 'Nuovo canale vendita',
      tech: ['Next.js', 'Three.js', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop'
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-slate-900">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Portfolio Progetti
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Alcuni dei progetti che ho realizzato per PMI italiane
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      {project.title}
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-sm font-semibold text-green-700 dark:text-green-400">
                        {project.results}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Vuoi un Progetto Come Questi?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Raccontami la tua idea e creiamo insieme qualcosa di straordinario
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link href="/contatti">Inizia il Tuo Progetto</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
