'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, Clock, TrendingDown, Users } from 'lucide-react'

export function ProblemsSection() {
  const problems = [
    {
      icon: Clock,
      title: 'Tempo Sprecato',
      description: 'Ore perse ogni giorno in attività manuali ripetitive che potrebbero essere automatizzate',
      color: 'text-red-500'
    },
    {
      icon: TrendingDown,
      title: 'Vendite Limitate',
      description: 'Nessuna presenza online significa perdere clienti che cercano servizi su Google',
      color: 'text-orange-500'
    },
    {
      icon: AlertCircle,
      title: 'Errori Costosi',
      description: 'Gestione manuale di ordini e fatture porta a errori che costano tempo e denaro',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: 'Concorrenza Avanti',
      description: 'I tuoi competitors hanno già digitalizzato e ti stanno superando',
      color: 'text-blue-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="py-24 px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Riconosci Questi Problemi?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Queste sono le sfide che ogni PMI affronta senza una soluzione digitale adeguata
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 ${problem.color}`}>
                      <problem.icon size={24} />
                    </div>
                    <CardTitle className="text-xl">{problem.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {problem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
