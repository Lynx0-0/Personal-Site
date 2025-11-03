'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Users, FolderKanban, DollarSign, AlertCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState({
    revenue: 0,
    clients: 0,
    projects: 0,
    pending: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadMetrics()
  }, [])

  const loadMetrics = async () => {
    const supabase = createClient()

    try {
      // Carica tutte le metriche in parallelo
      const [clientsData, projectsData] = await Promise.all([
        supabase.from('clients').select('id', { count: 'exact' }),
        supabase.from('projects').select('id, status', { count: 'exact' })
      ])

      setMetrics({
        revenue: 15750, // Simulato - da calcolare da invoices
        clients: clientsData.count || 0,
        projects: projectsData.data?.filter(p => p.status === 'active').length || 0,
        pending: projectsData.data?.filter(p => p.status === 'pending').length || 0
      })
    } catch (error) {
      console.error('Errore caricamento metriche:', error)
    } finally {
      setLoading(false)
    }
  }

  const metricCards = [
    {
      title: 'Fatturato Mensile',
      value: `€${metrics.revenue.toFixed(2)}`,
      change: '+12% dal mese scorso',
      icon: DollarSign,
      color: 'text-green-500'
    },
    {
      title: 'Clienti Totali',
      value: metrics.clients,
      change: '+3 questo mese',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      title: 'Progetti Attivi',
      value: metrics.projects,
      change: `${metrics.pending} in attesa`,
      icon: FolderKanban,
      color: 'text-purple-500'
    },
    {
      title: 'Crescita',
      value: '+24%',
      change: 'Rispetto anno scorso',
      icon: TrendingUp,
      color: 'text-orange-500'
    }
  ]

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="h-20 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Ultimo aggiornamento: {new Date().toLocaleString('it-IT')}
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metricCards.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className={`h-5 w-5 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {metric.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="text-lg">Nuovo Cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Aggiungi un nuovo cliente al sistema
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="text-lg">Nuovo Progetto</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Crea un nuovo progetto per un cliente
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="text-lg">Nuova Fattura</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Genera una nuova fattura
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Attività Recenti</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: 'Nuovo progetto creato', client: 'Azienda X', time: '2 ore fa' },
              { action: 'Fattura pagata', client: 'Azienda Y', time: '5 ore fa' },
              { action: 'Cliente aggiunto', client: 'Azienda Z', time: '1 giorno fa' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <AlertCircle className="h-5 w-5 text-blue-500" />
                <div className="flex-1">
                  <div className="font-medium">{activity.action}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{activity.client}</div>
                </div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
