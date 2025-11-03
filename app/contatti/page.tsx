'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simula invio (da implementare con API reale)
    setTimeout(() => {
      toast.success('Messaggio inviato! Ti risponderemo entro 24 ore.')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-slate-900">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Contattami
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Hai un progetto in mente? Parliamone! Consulenza gratuita di 30 minuti
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-24 px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informazioni di Contatto</CardTitle>
                    <CardDescription>
                      Rispondiamo entro 24 ore nei giorni lavorativi
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <Mail size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <a href="mailto:info@pmidigital.it" className="text-blue-600 hover:underline">
                          info@pmidigital.it
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Telefono</div>
                        <a href="tel:+393331234567" className="text-blue-600 hover:underline">
                          +39 333 123 4567
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Posizione</div>
                        <div className="text-gray-600 dark:text-gray-400">Italia</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Orari di Lavoro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Lunedì - Venerdì:</span>
                        <span className="font-semibold">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Sabato:</span>
                        <span className="font-semibold">Su appuntamento</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Domenica:</span>
                        <span className="font-semibold">Chiuso</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Invia un Messaggio</CardTitle>
                  <CardDescription>
                    Compila il form e ti ricontatteremo al più presto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="mario@azienda.it"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+39 333 123 4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Azienda</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nome Azienda"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Messaggio *</Label>
                      <textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Raccontami del tuo progetto..."
                      />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full">
                      {loading ? (
                        'Invio in corso...'
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Invia Messaggio
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
