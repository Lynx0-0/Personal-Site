'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Globe, Database, Smartphone, Printer, ArrowRight } from 'lucide-react'

export function SolutionsSection() {
  const solutions = [
    {
      icon: Globe,
      title: 'Siti Web Professionali',
      description: 'Siti web moderni che convertono visitatori in clienti, ottimizzati per Google e mobile',
      features: ['Design Moderno', 'SEO Ottimizzato', 'E-commerce Integrato'],
      price: 'Da €1.500'
    },
    {
      icon: Database,
      title: 'Gestionali Custom',
      description: 'Software su misura per gestire clienti, progetti, fatture e automatizzare il tuo business',
      features: ['Dashboard Real-time', 'Automazioni', 'Report Avanzati'],
      price: 'Da €3.000'
    },
    {
      icon: Smartphone,
      title: 'App Mobile',
      description: 'App iOS e Android per portare il tuo business sempre a portata di mano dei clienti',
      features: ['iOS + Android', 'Notifiche Push', 'Offline Ready'],
      price: 'Da €5.000'
    },
    {
      icon: Printer,
      title: 'Stampa 3D On-Demand',
      description: 'Servizio di stampa 3D per prototipi, gadget personalizzati e prodotti custom',
      features: ['Preview 3D', 'Calcolo Automatico', 'Materiali Vari'],
      price: 'Da €20'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Le Mie Soluzioni Per Te
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Servizi digitali completi per far crescere la tua PMI e automatizzare i processi
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                <CardHeader>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white w-fit mb-4">
                    <solution.icon size={28} />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <ul className="space-y-2 mb-4">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-primary mb-4">
                      {solution.price}
                    </div>
                  </div>
                  <Button variant="outline" asChild className="w-full group">
                    <Link href="/contatti">
                      Richiedi Preventivo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
