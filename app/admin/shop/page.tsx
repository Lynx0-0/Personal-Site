'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ShoppingCart, Package, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ShopManager() {
  const [shopEnabled, setShopEnabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [metrics, setMetrics] = useState({
    products: 0,
    orders: 0,
    revenue: 0
  })
  const supabase = createClient()

  useEffect(() => {
    loadShopSettings()
    loadShopMetrics()
  }, [])

  const loadShopSettings = async () => {
    const { data, error } = await supabase
      .from('settings')
      .select('shop_enabled')
      .eq('key', 'main')
      .single()

    if (data) {
      setShopEnabled(data.shop_enabled)
    }
  }

  const loadShopMetrics = async () => {
    const [productsData, ordersData] = await Promise.all([
      supabase.from('products').select('id', { count: 'exact' }).eq('active', true),
      supabase.from('orders').select('id, total', { count: 'exact' })
    ])

    const revenue = ordersData.data?.reduce((sum, order) => sum + Number(order.total), 0) || 0

    setMetrics({
      products: productsData.count || 0,
      orders: ordersData.count || 0,
      revenue
    })
  }

  const toggleShop = async (enabled: boolean) => {
    setLoading(true)

    const { error } = await supabase
      .from('settings')
      .update({
        shop_enabled: enabled,
        updated_at: new Date().toISOString()
      })
      .eq('key', 'main')

    if (error) {
      toast.error('Errore nell\'aggiornamento')
      setLoading(false)
      return
    }

    setShopEnabled(enabled)
    toast.success(`Shop ${enabled ? 'attivato' : 'disattivato'} con successo`)

    // In produzione, revalidare le pagine del shop
    // await fetch('/api/revalidate', {
    //   method: 'POST',
    //   body: JSON.stringify({ path: '/shop' })
    // })

    setLoading(false)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Gestione Shop</h1>

      {/* Toggle Shop */}
      <Card>
        <CardHeader>
          <CardTitle>Stato Shop Online</CardTitle>
          <CardDescription>
            Attiva o disattiva lo shop online dal tuo sito
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <div>
              <Label htmlFor="shop-toggle" className="text-base font-medium">
                Shop Online
              </Label>
              <p className="text-sm text-muted-foreground">
                {shopEnabled ? 'Shop attivo e visibile ai visitatori' : 'Shop disattivato - non visibile'}
              </p>
            </div>
            <Switch
              id="shop-toggle"
              checked={shopEnabled}
              onCheckedChange={toggleShop}
              disabled={loading}
            />
          </div>
        </CardContent>
      </Card>

      {/* Shop Metrics */}
      {shopEnabled && (
        <>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Prodotti Attivi
                </CardTitle>
                <Package className="h-5 w-5 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.products}</div>
                <p className="text-xs text-muted-foreground">
                  Prodotti visibili nello shop
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Ordini Totali
                </CardTitle>
                <ShoppingCart className="h-5 w-5 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.orders}</div>
                <p className="text-xs text-muted-foreground">
                  Ordini ricevuti
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Fatturato Shop
                </CardTitle>
                <TrendingUp className="h-5 w-5 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€{metrics.revenue.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">
                  Totale vendite
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Azioni Rapide</CardTitle>
              <CardDescription>
                Gestisci prodotti e ordini
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/admin/shop/products/new">
                  Aggiungi Prodotto
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/shop/products">
                  Gestisci Prodotti
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/shop/orders">
                  Vedi Ordini
                </Link>
              </Button>
            </CardContent>
          </Card>
        </>
      )}

      {/* Shop Info */}
      <Card>
        <CardHeader>
          <CardTitle>Informazioni Shop</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Funzionalità Disponibili</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>Vendita servizi digitali</li>
              <li>Stampa 3D on-demand con preview</li>
              <li>Pagamenti sicuri con Stripe</li>
              <li>Gestione ordini e tracking</li>
              <li>Fatturazione automatica</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-400">
              <strong>Nota:</strong> Quando lo shop è disattivato, tutte le pagine shop e prodotti non saranno visibili ai visitatori, ma i dati rimangono salvati nel database.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
