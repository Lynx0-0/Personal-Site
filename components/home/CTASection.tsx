'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Pronto a Far Crescere il Tuo Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Prenota una consulenza gratuita di 30 minuti. Analizzeremo insieme la tua situazione e ti mostrerò come posso aiutarti.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" asChild className="text-base px-8 group">
              <Link href="/contatti">
                <Calendar className="mr-2 h-5 w-5" />
                Prenota Consulenza Gratuita
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link href="/portfolio">
                Guarda i Progetti
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm text-blue-100">Garanzia Soddisfatti o Rimborsati</div>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">30 giorni</div>
              <div className="text-sm text-blue-100">Supporto Post-Lancio Incluso</div>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">Pagamento</div>
              <div className="text-sm text-blue-100">A rate senza interessi</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
