# 🚀 PMI Digital Services - Sito Web Completo per Servizi Digitali

Piattaforma completa Next.js 14 per PMI che offre servizi digitali: siti web, gestionali, app mobile e stampa 3D on-demand.

## ✨ Caratteristiche Principali

### 🎨 Frontend Moderno
- **Next.js 14** con App Router e Server Components
- **Tailwind CSS** per styling responsive
- **Framer Motion** per animazioni fluide
- **Shadcn/ui** componenti UI professionali
- **Dark Mode** completo

### 📊 Area Admin Completa
- Dashboard con metriche real-time
- Gestione clienti (CRM)
- Gestione progetti con Kanban
- Sistema fatturazione
- Shop manager con toggle on/off
- Analytics e report

### 🛍️ E-commerce Modulare
- Shop attivabile/disattivabile
- Gestione prodotti e servizi
- Integrazione Stripe per pagamenti
- Carrello e checkout
- Fatturazione automatica

### 🎨 Stampa 3D On-Demand
- Viewer 3D interattivo con Three.js
- Upload e preview file STL
- Configuratore materiali e qualità
- Calcolo prezzo automatico
- Integrazione con servizi di stampa

### 🔐 Sicurezza e Performance
- Autenticazione Supabase
- Row Level Security (RLS)
- TypeScript type-safe
- SEO ottimizzato
- Performance ottimizzate

## 🛠️ Stack Tecnologico

```yaml
Frontend:
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Shadcn/ui + Radix UI
  - Three.js + React Three Fiber

Backend:
  - Supabase (PostgreSQL)
  - Supabase Auth
  - Supabase Storage
  - Row Level Security

Payment:
  - Stripe Checkout
  - Stripe Webhooks
  - Fatturazione automatica

Tools:
  - ESLint
  - TypeScript
  - Git
```

## 📦 Installazione

### Prerequisiti

- Node.js 18+ installato
- Account Supabase
- Account Stripe (per pagamenti)

### Setup Rapido

1. **Installa le dipendenze**

```bash
npm install
```

2. **Configura le variabili d'ambiente**

Copia `.env.example` in `.env.local`:

```bash
cp .env.example .env.local
```

Modifica `.env.local` con le tue credenziali:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://tuoprogetto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tua-anon-key
SUPABASE_SERVICE_KEY=tua-service-key

# Stripe
STRIPE_SECRET_KEY=sk_test_tua-chiave
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_tua-chiave
STRIPE_WEBHOOK_SECRET=whsec_tuo-webhook-secret

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. **Setup database Supabase**

Esegui la migrazione SQL da `supabase/migrations/001_initial_schema.sql` nella dashboard Supabase:
- Vai su Supabase Dashboard → SQL Editor
- Copia e incolla il contenuto del file
- Esegui la query

4. **Avvia il server di sviluppo**

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 📁 Struttura del Progetto

```
pmi-digital-services/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Homepage
│   ├── servizi/                 # Pagina servizi
│   ├── portfolio/               # Portfolio progetti
│   ├── chi-sono/                # About page
│   ├── contatti/                # Contatti
│   ├── admin/                   # Area admin
│   │   ├── layout.tsx          # Layout con sidebar
│   │   ├── page.tsx            # Dashboard
│   │   ├── clienti/            # Gestione clienti
│   │   ├── progetti/           # Gestione progetti
│   │   ├── fatture/            # Gestione fatture
│   │   └── shop/               # Shop manager
│   └── api/                     # API routes
│
├── components/                  # Componenti React
│   ├── ui/                     # Componenti UI base
│   ├── layout/                 # Layout components
│   ├── home/                   # Componenti homepage
│   └── 3d/                     # Componenti 3D
│
├── lib/                        # Utilities
│   ├── supabase/              # Config Supabase
│   └── utils.ts               # Utilities
│
├── hooks/                      # Custom hooks
├── types/                      # TypeScript types
├── supabase/migrations/        # Database migrations
└── public/                     # File statici
```

## 🎯 Funzionalità Implementate

### ✅ Completate

- [x] Setup Next.js 14 con TypeScript
- [x] Configurazione Tailwind CSS e Shadcn/ui
- [x] Integrazione Supabase completa
- [x] Sistema autenticazione
- [x] Homepage con animazioni
- [x] Pagine pubbliche (servizi, portfolio, chi-sono, contatti)
- [x] Area admin con dashboard
- [x] Shop manager con toggle
- [x] Viewer 3D per stampa 3D
- [x] Schema database completo
- [x] Row Level Security (RLS)

### 🚧 Da Implementare

- [ ] API Stripe per pagamenti
- [ ] Webhook Stripe
- [ ] Sistema upload file 3D
- [ ] Gestione carrello shop
- [ ] Generazione PDF fatture
- [ ] Email transazionali
- [ ] Notifiche real-time

## 🚀 Deployment

### Vercel (Consigliato)

1. Fai push del codice su GitHub
2. Importa il progetto su [Vercel](https://vercel.com)
3. Configura le variabili d'ambiente
4. Deploy automatico!

## 📝 Prossimi Passi

1. **Installa dipendenze**: `npm install`
2. **Setup Supabase**: Crea progetto ed esegui migrazioni
3. **Setup Stripe**: Configura API keys
4. **Personalizza**: Sostituisci testi e immagini
5. **Testa**: `npm run dev`
6. **Deploy**: `npm run build && vercel --prod`

## 📄 Licenza

MIT License

---

⭐ Progetto sviluppato con Next.js 14, Supabase e Stripe