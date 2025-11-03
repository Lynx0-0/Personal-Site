import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Globe, Database, Smartphone, Printer, Check } from 'lucide-react'

export const metadata = {
  title: 'Servizi Digitali per PMI | Siti Web, Gestionali, App',
  description: 'Scopri i nostri servizi: siti web professionali, gestionali custom, app mobile e stampa 3D on-demand per la tua azienda.',
}

export default function ServiziPage() {
  const services = [
    {
      icon: Globe,
      title: 'Siti Web Professionali',
      description: 'Siti web moderni, veloci e ottimizzati per convertire visitatori in clienti',
      features: [
        'Design responsive e moderno',
        'Ottimizzazione SEO avanzata',
        'Integrazione E-commerce',
        'CMS per gestione autonoma',
        'Performance ottimizzate',
        'Hosting e manutenzione inclusi'
      ],
      price: 'Da €1.500',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Gestionali Custom',
      description: 'Software su misura per gestire clienti, progetti, fatture e automatizzare il business',
      features: [
        'Dashboard real-time personalizzata',
        'Gestione clienti e progetti',
        'Fatturazione automatica',
        'Report e analytics avanzati',
        'Automazioni workflow',
        'Multi-utente con permessi'
      ],
      price: 'Da €3.000',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'App Mobile',
      description: 'Applicazioni native iOS e Android per portare il tuo business sempre a portata di mano',
      features: [
        'iOS e Android nativi',
        'Design UI/UX professionale',
        'Notifiche push',
        'Funzionamento offline',
        'Sincronizzazione cloud',
        'Pubblicazione su Store'
      ],
      price: 'Da €5.000',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Printer,
      title: 'Stampa 3D On-Demand',
      description: 'Servizio di stampa 3D per prototipi, gadget personalizzati e prodotti custom',
      features: [
        'Preview 3D interattivo',
        'Calcolo prezzo automatico',
        'Materiali diversi (PLA, ABS, PETG)',
        'Qualità professionale',
        'Spedizione rapida',
        'Supporto tecnico'
      ],
      price: 'Da €20/pezzo',
      color: 'from-orange-500 to-red-500'
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
              Servizi Digitali Completi per la Tua PMI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Soluzioni su misura per digitalizzare, automatizzare e far crescere il tuo business
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <CardHeader className="space-y-4">
                      <div className={`p-4 rounded-lg bg-gradient-to-br ${service.color} text-white w-fit`}>
                        <service.icon size={32} />
                      </div>
                      <CardTitle className="text-3xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {service.description}
                      </CardDescription>
                      <div className="text-3xl font-bold text-primary pt-4">
                        {service.price}
                      </div>
                      <Button size="lg" asChild className="w-full md:w-auto">
                        <Link href="/contatti">Richiedi Preventivo</Link>
                      </Button>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-4">Cosa include:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto a Digitalizzare il Tuo Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Prenota una consulenza gratuita e scopri come posso aiutarti
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link href="/contatti">Consulenza Gratuita 30min</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
