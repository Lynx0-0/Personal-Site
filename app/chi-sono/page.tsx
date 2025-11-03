import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Code, Zap, Users, Award } from 'lucide-react'

export const metadata = {
  title: 'Chi Sono | Il Tuo Partner Digitale',
  description: 'Sviluppatore full-stack specializzato in soluzioni digitali per PMI. Oltre 5 anni di esperienza e 50+ progetti completati.',
}

export default function ChiSonoPage() {
  const values = [
    {
      icon: Code,
      title: 'Competenza Tecnica',
      description: 'Stack tecnologico moderno e sempre aggiornato per garantire soluzioni performanti e scalabili'
    },
    {
      icon: Zap,
      title: 'Velocità di Esecuzione',
      description: 'Tempi di sviluppo rapidi senza compromettere la qualità del risultato finale'
    },
    {
      icon: Users,
      title: 'Focus sul Cliente',
      description: 'Ascolto attivo delle esigenze e comunicazione trasparente in ogni fase del progetto'
    },
    {
      icon: Award,
      title: 'Qualità Garantita',
      description: 'Testing completo e supporto post-lancio per assicurare il successo del progetto'
    }
  ]

  const stats = [
    { number: '50+', label: 'Progetti Completati' },
    { number: '5+', label: 'Anni di Esperienza' },
    { number: '98%', label: 'Clienti Soddisfatti' },
    { number: '100%', label: 'Supporto Dedicato' }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-slate-900">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Ciao, sono [Il Tuo Nome]
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                  Sviluppatore Full-Stack specializzato in soluzioni digitali per PMI
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Da oltre 5 anni aiuto piccole e medie imprese a digitalizzare i loro processi e incrementare il fatturato attraverso siti web, gestionali custom e app mobile su misura.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contatti">Lavoriamo Insieme</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                I Miei Valori
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Cosa mi contraddistingue nel lavoro con i clienti
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 h-fit">
                        <value.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Come Lavoro
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Un processo trasparente e collaudato per il successo del tuo progetto
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consulenza', desc: 'Analizziamo insieme le tue esigenze e obiettivi' },
                { step: '02', title: 'Preventivo', desc: 'Ricevi un preventivo dettagliato e senza impegno' },
                { step: '03', title: 'Sviluppo', desc: 'Creo la soluzione con aggiornamenti costanti' },
                { step: '04', title: 'Lancio', desc: 'Pubblichiamo e ti supporto nel post-lancio' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-blue-200 dark:text-blue-900 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Iniziamo a Lavorare Insieme
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Prenota una consulenza gratuita di 30 minuti
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link href="/contatti">Prenota Ora</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
